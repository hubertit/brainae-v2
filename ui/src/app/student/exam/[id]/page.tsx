'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Icon, {
  faClock,
  faCheckCircle,
  faExclamationCircle,
  faFileAlt,
  faArrowRight,
  faArrowLeft,
  faFlag,
} from '../../../components/Icon';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  points: number;
}

interface ExamData {
  id: string;
  title: string;
  course: string;
  courseName: string;
  duration: number; // in minutes
  totalQuestions: number;
  totalPoints: number;
  maxAttempts: number;
  questions: Question[];
}

export default function ExamPage() {
  const params = useParams();
  const router = useRouter();
  const examId = params.id as string;

  const [mounted, setMounted] = useState(false);
  const [exam, setExam] = useState<ExamData | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [timeRemaining, setTimeRemaining] = useState(0); // in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [attemptsUsed, setAttemptsUsed] = useState(1);

  // Set mounted state on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Mock exam data - in production, fetch from API
  useEffect(() => {
    if (!mounted) return;
    const mockExam: ExamData = {
      id: examId,
      title: 'Midterm Examination',
      course: 'BUS 101',
      courseName: 'Introduction to Business Management',
      duration: 60, // 60 minutes
      totalQuestions: 10,
      totalPoints: 100,
      maxAttempts: 2,
      questions: [
        {
          id: 1,
          question: 'What is the primary goal of business management?',
          options: [
            'Maximize profits',
            'Create value for stakeholders',
            'Minimize costs',
            'Increase market share',
          ],
          correctAnswer: 1,
          points: 10,
        },
        {
          id: 2,
          question: 'Which management function involves setting goals and objectives?',
          options: [
            'Planning',
            'Organizing',
            'Leading',
            'Controlling',
          ],
          correctAnswer: 0,
          points: 10,
        },
        {
          id: 3,
          question: 'What is SWOT analysis used for?',
          options: [
            'Financial analysis',
            'Strategic planning',
            'Market research',
            'Performance evaluation',
          ],
          correctAnswer: 1,
          points: 10,
        },
        {
          id: 4,
          question: 'Which leadership style involves making decisions without consulting team members?',
          options: [
            'Democratic',
            'Autocratic',
            'Laissez-faire',
            'Transformational',
          ],
          correctAnswer: 1,
          points: 10,
        },
        {
          id: 5,
          question: 'What is the purpose of a mission statement?',
          options: [
            'To describe company values',
            'To define company purpose',
            'To set financial targets',
            'To outline marketing strategy',
          ],
          correctAnswer: 1,
          points: 10,
        },
        {
          id: 6,
          question: 'Which organizational structure has a clear chain of command?',
          options: [
            'Matrix',
            'Flat',
            'Hierarchical',
            'Network',
          ],
          correctAnswer: 2,
          points: 10,
        },
        {
          id: 7,
          question: 'What does ROI stand for?',
          options: [
            'Return on Investment',
            'Rate of Interest',
            'Revenue on Income',
            'Return on Income',
          ],
          correctAnswer: 0,
          points: 10,
        },
        {
          id: 8,
          question: 'Which management theory emphasizes employee motivation?',
          options: [
            'Scientific Management',
            'Human Relations',
            'Bureaucratic',
            'Classical',
          ],
          correctAnswer: 1,
          points: 10,
        },
        {
          id: 9,
          question: 'What is the first step in the decision-making process?',
          options: [
            'Identify alternatives',
            'Define the problem',
            'Evaluate options',
            'Implement solution',
          ],
          correctAnswer: 1,
          points: 10,
        },
        {
          id: 10,
          question: 'Which communication channel is most effective for complex information?',
          options: [
            'Email',
            'Face-to-face',
            'Text message',
            'Phone call',
          ],
          correctAnswer: 1,
          points: 10,
        },
      ],
    };

    setExam(mockExam);
    setTimeRemaining(mockExam.duration * 60);
    setAttemptsUsed(1); // In production, fetch from API
  }, [examId, mounted]);

  // Timer countdown
  useEffect(() => {
    if (!mounted || !exam || isSubmitted || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [mounted, exam, isSubmitted, timeRemaining]);

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    if (isSubmitted) return;
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const handleFlagQuestion = (questionId: number) => {
    const newFlagged = new Set(flaggedQuestions);
    if (newFlagged.has(questionId)) {
      newFlagged.delete(questionId);
    } else {
      newFlagged.add(questionId);
    }
    setFlaggedQuestions(newFlagged);
  };

  const handleNext = () => {
    if (currentQuestionIndex < (exam?.totalQuestions || 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleGoToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const calculateScore = () => {
    if (!exam) return 0;
    let totalScore = 0;
    exam.questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        totalScore += question.points;
      }
    });
    return totalScore;
  };

  const handleSubmit = () => {
    if (window.confirm('Are you sure you want to submit the exam? You cannot change your answers after submission.')) {
      const finalScore = calculateScore();
      setScore(finalScore);
      setIsSubmitted(true);
      // In production, submit to API
    }
  };

  const handleAutoSubmit = () => {
    const finalScore = calculateScore();
    setScore(finalScore);
    setIsSubmitted(true);
    alert('Time is up! Your exam has been automatically submitted.');
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  if (!mounted || !exam) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Icon icon={faFileAlt} className="text-gray-400 mb-4" size="3x" />
          <p className="text-gray-600">Loading exam...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = exam.questions[currentQuestionIndex];
  const answeredCount = Object.keys(answers).length;
  const isLastQuestion = currentQuestionIndex === exam.questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border border-gray-200 p-8 text-center">
          <Icon icon={faCheckCircle} className="text-green-500 mb-4" size="4x" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Exam Submitted Successfully</h2>
          <p className="text-gray-600 mb-6">Your answers have been submitted and graded.</p>
          
          <div className="bg-gray-50 border border-gray-200 p-6 mb-6">
            <div className="text-4xl font-bold text-primary mb-2">{score}/{exam.totalPoints}</div>
            <div className="text-lg text-gray-600 mb-4">
              {((score || 0) / exam.totalPoints * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">
              Correct Answers: {Object.keys(answers).filter(
                (qId) => answers[parseInt(qId)] === exam.questions.find((q) => q.id === parseInt(qId))?.correctAnswer
              ).length} / {exam.totalQuestions}
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => router.push('/student/assignments')}
              className="px-6 py-2 bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Back to Assessments
            </button>
            <button
              onClick={() => router.push('/student/grades')}
              className="px-6 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors"
            >
              View Grades
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-white border border-gray-200 p-4 mb-6 sticky top-20 z-40">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{exam.title}</h2>
            <p className="text-sm text-gray-600">{exam.course} - {exam.courseName}</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <Icon icon={faClock} className="text-primary" />
                <span className={timeRemaining < 300 ? 'text-red-600' : ''}>
                  {formatTime(timeRemaining)}
                </span>
              </div>
              <div className="text-xs text-gray-600">Time Remaining</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-gray-900">
                {answeredCount} / {exam.totalQuestions}
              </div>
              <div className="text-xs text-gray-600">Answered</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-gray-900">
                Attempt {attemptsUsed} / {exam.maxAttempts}
              </div>
              <div className="text-xs text-gray-600">Attempts</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white border border-gray-200 p-6">
            {/* Question Navigation */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <div className="text-sm text-gray-600">
                Question {currentQuestionIndex + 1} of {exam.totalQuestions}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleFlagQuestion(currentQuestion.id)}
                  className={`p-2 ${
                    flaggedQuestions.has(currentQuestion.id)
                      ? 'text-yellow-600 bg-yellow-50'
                      : 'text-gray-400 hover:text-yellow-600 hover:bg-yellow-50'
                  } transition-colors`}
                  title="Flag for review"
                >
                  <Icon icon={faFlag} size="sm" />
                </button>
              </div>
            </div>

            {/* Question */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {currentQuestion.question}
              </h3>
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = answers[currentQuestion.id] === index;
                  const isCorrect = isSubmitted && index === currentQuestion.correctAnswer;
                  const isWrong = isSubmitted && isSelected && index !== currentQuestion.correctAnswer;

                  return (
                    <label
                      key={index}
                      className={`flex items-center gap-3 p-4 border-2 cursor-pointer transition-all ${
                        isSelected
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      } ${
                        isCorrect ? 'border-green-500 bg-green-50' : ''
                      } ${
                        isWrong ? 'border-red-500 bg-red-50' : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestion.id}`}
                        checked={isSelected}
                        onChange={() => handleAnswerSelect(currentQuestion.id, index)}
                        className="w-4 h-4 text-primary focus:ring-primary"
                        disabled={isSubmitted}
                      />
                      <span className="flex-1 text-gray-900">{option}</span>
                      {isCorrect && (
                        <Icon icon={faCheckCircle} className="text-green-500" size="sm" />
                      )}
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <button
                onClick={handlePrevious}
                disabled={isFirstQuestion}
                className={`flex items-center gap-2 px-4 py-2 ${
                  isFirstQuestion
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:text-primary border border-gray-200 hover:border-primary'
                } transition-colors`}
              >
                <Icon icon={faArrowLeft} size="sm" />
                <span>Previous</span>
              </button>
              <button
                onClick={isLastQuestion ? handleSubmit : handleNext}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                <span>{isLastQuestion ? 'Submit Exam' : 'Next'}</span>
                {!isLastQuestion && <Icon icon={faArrowRight} size="sm" />}
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar - Question Navigator */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 p-4 sticky top-32">
            <h3 className="font-semibold text-gray-900 mb-4">Question Navigator</h3>
            <div className="grid grid-cols-5 gap-2">
              {exam.questions.map((question, index) => {
                const isAnswered = answers[question.id] !== undefined;
                const isFlagged = flaggedQuestions.has(question.id);
                const isCurrent = index === currentQuestionIndex;

                return (
                  <button
                    key={question.id}
                    onClick={() => handleGoToQuestion(index)}
                    className={`w-10 h-10 text-sm font-medium transition-colors ${
                      isCurrent
                        ? 'bg-primary text-white'
                        : isAnswered
                        ? 'bg-green-100 text-green-700 border-2 border-green-300'
                        : 'bg-gray-100 text-gray-700 border-2 border-gray-200'
                    } ${isFlagged ? 'ring-2 ring-yellow-400' : ''}`}
                    title={`Question ${index + 1}${isFlagged ? ' (Flagged)' : ''}`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-primary"></div>
                <span>Current</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-100 border-2 border-green-300"></div>
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-100 border-2 border-gray-200"></div>
                <span>Not Answered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

