'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Icon, {
  faBook,
  faChevronRight,
  faChevronDown,
  faCheckCircle,
  faCircle,
  faDownload,
  faFileAlt,
  faBookOpen,
  faPlay,
  faClock,
  faUser,
  faArrowLeft,
  faLock,
} from '../../../components/Icon';

interface Lesson {
  id: number;
  title: string;
  type: 'reading' | 'video' | 'quiz' | 'assignment' | 'cat' | 'exam';
  duration: string;
  completed: boolean;
  locked: boolean;
  assessmentId?: number; // ID for linking to exam interface
}

interface Module {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
  completed: boolean;
  progress: number;
}

interface CourseData {
  id: number;
  name: string;
  code: string;
  instructor: string;
  description: string;
  modules: Module[];
  resources: {
    id: number;
    name: string;
    type: 'pdf' | 'doc' | 'ppt' | 'video' | 'other';
    size: string;
    url: string;
  }[];
}

export default function CourseDetail() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id as string;
  const [course, setCourse] = useState<CourseData | null>(null);
  const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set([1]));
  const [selectedLesson, setSelectedLesson] = useState<{ moduleId: number; lessonId: number } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Mock course data - in production, fetch from API
    const mockCourses: { [key: string]: CourseData } = {
      '1': {
        id: 1,
        name: 'Introduction to Business Management',
        code: 'BUS 101',
        instructor: 'Dr. Sarah Johnson',
        description: 'This course provides a comprehensive introduction to the fundamental principles and practices of business management. Students will explore key concepts including organizational structure, leadership, strategic planning, and operational management.',
        modules: [
          {
            id: 1,
            title: 'Module 1: Foundations of Management',
            description: 'Introduction to management principles and theories',
            progress: 100,
            completed: true,
            lessons: [
              { id: 1, title: 'What is Management?', type: 'reading', duration: '15 min', completed: true, locked: false },
              { id: 2, title: 'Management Theories Overview', type: 'reading', duration: '20 min', completed: true, locked: false },
              { id: 3, title: 'Evolution of Management Thought', type: 'video', duration: '25 min', completed: true, locked: false },
              { id: 4, title: 'Module 1 Quiz', type: 'quiz', duration: '10 min', completed: true, locked: false, assessmentId: 101 },
            ],
          },
          {
            id: 2,
            title: 'Module 2: Planning and Decision Making',
            description: 'Strategic planning and decision-making processes',
            progress: 60,
            completed: false,
            lessons: [
              { id: 5, title: 'Strategic Planning Fundamentals', type: 'reading', duration: '18 min', completed: true, locked: false },
              { id: 6, title: 'Setting Goals and Objectives', type: 'reading', duration: '15 min', completed: true, locked: false },
              { id: 7, title: 'Decision-Making Models', type: 'video', duration: '30 min', completed: false, locked: false },
              { id: 8, title: 'SWOT Analysis', type: 'reading', duration: '22 min', completed: false, locked: false },
              { id: 9, title: 'Module 2 CAT', type: 'cat', duration: '30 min', completed: false, locked: false, assessmentId: 102 },
              { id: 10, title: 'Module 2 Assignment', type: 'assignment', duration: '45 min', completed: false, locked: false, assessmentId: 1 },
            ],
          },
          {
            id: 3,
            title: 'Module 3: Organizing and Leading',
            description: 'Organizational structure and leadership styles',
            progress: 0,
            completed: false,
            lessons: [
              { id: 11, title: 'Organizational Structures', type: 'reading', duration: '20 min', completed: false, locked: false },
              { id: 12, title: 'Leadership Styles', type: 'video', duration: '28 min', completed: false, locked: false },
              { id: 13, title: 'Team Management', type: 'reading', duration: '25 min', completed: false, locked: false },
              { id: 14, title: 'Module 3 CAT', type: 'cat', duration: '25 min', completed: false, locked: false, assessmentId: 103 },
            ],
          },
          {
            id: 4,
            title: 'Module 4: Controlling and Performance',
            description: 'Control systems and performance measurement',
            progress: 0,
            completed: false,
            lessons: [
              { id: 15, title: 'Control Systems', type: 'reading', duration: '18 min', completed: false, locked: true },
              { id: 16, title: 'Performance Metrics', type: 'video', duration: '22 min', completed: false, locked: true },
              { id: 17, title: 'Final Exam', type: 'exam', duration: '60 min', completed: false, locked: true, assessmentId: 3 },
            ],
          },
        ],
        resources: [
          { id: 1, name: 'Course Syllabus', type: 'pdf', size: '2.5 MB', url: '#' },
          { id: 2, name: 'Textbook Chapter 1', type: 'pdf', size: '5.2 MB', url: '#' },
          { id: 3, name: 'Management Theories Reference', type: 'pdf', size: '3.1 MB', url: '#' },
          { id: 4, name: 'Case Study Examples', type: 'doc', size: '1.8 MB', url: '#' },
          { id: 5, name: 'Lecture Slides - Module 1', type: 'ppt', size: '4.5 MB', url: '#' },
          { id: 6, name: 'Lecture Slides - Module 2', type: 'ppt', size: '3.9 MB', url: '#' },
        ],
      },
    };

    setCourse(mockCourses[courseId] || null);
  }, [courseId, mounted]);

  const toggleModule = (moduleId: number) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  const handleLessonClick = (moduleId: number, lessonId: number, lesson: Lesson) => {
    if (lesson.locked) return;
    
    // If it's an assessment type (quiz, assignment, cat, exam), navigate to exam interface
    if (lesson.type === 'quiz' || lesson.type === 'assignment' || lesson.type === 'cat' || lesson.type === 'exam') {
      if (lesson.assessmentId) {
        router.push(`/student/exam/${lesson.assessmentId}`);
        return;
      }
    }
    
    // Otherwise, show lesson content
    setSelectedLesson({ moduleId, lessonId });
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'reading':
        return faBookOpen;
      case 'video':
        return faPlay;
      case 'quiz':
        return faFileAlt;
      case 'assignment':
        return faFileAlt;
      case 'cat':
        return faFileAlt;
      case 'exam':
        return faFileAlt;
      default:
        return faCircle;
    }
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return faFileAlt;
      case 'doc':
        return faFileAlt;
      case 'ppt':
        return faFileAlt;
      case 'video':
        return faPlay;
      default:
        return faFileAlt;
    }
  };

  if (!mounted || !course) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Icon icon={faBook} className="text-gray-400 mb-4" size="3x" />
          <p className="text-gray-600">Loading course...</p>
        </div>
      </div>
    );
  }

  const overallProgress = course.modules.reduce((acc, module) => acc + module.progress, 0) / course.modules.length;

  // Get all assessments (CATs, assignments, exams, quizzes)
  const allAssessments = course.modules.flatMap(module =>
    module.lessons
      .filter(lesson => (lesson.type === 'quiz' || lesson.type === 'assignment' || lesson.type === 'cat' || lesson.type === 'exam') && lesson.assessmentId)
      .map(lesson => ({
        ...lesson,
        moduleTitle: module.title,
        moduleId: module.id,
      }))
  );

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/student/courses"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-4"
        >
          <Icon icon={faArrowLeft} size="sm" />
          <span>Back to Courses</span>
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.name}</h1>
            <p className="text-gray-600 mb-4">{course.code} • {course.instructor}</p>
            <p className="text-gray-700 max-w-3xl">{course.description}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900 mb-1">{Math.round(overallProgress)}%</div>
            <div className="text-sm text-gray-600">Complete</div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Content - Course Modules */}
        <div className="lg:col-span-3">
          <div className="bg-white border border-gray-200 mb-6">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Course Content</h2>
              <p className="text-sm text-gray-600 mt-1">{course.modules.length} modules • {course.modules.reduce((acc, m) => acc + m.lessons.length, 0)} lessons</p>
            </div>

            <div className="divide-y divide-gray-200">
              {course.modules.map((module) => (
                <div key={module.id}>
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1 text-left">
                      <div className="w-10 h-10 bg-gray-100 flex items-center justify-center flex-shrink-0">
                        {module.completed ? (
                          <Icon icon={faCheckCircle} className="text-green-600" size="lg" />
                        ) : (
                          <span className="text-gray-600 font-semibold">{module.id}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{module.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{module.description}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>{module.lessons.length} lessons</span>
                          <span>{module.progress}% complete</span>
                        </div>
                      </div>
                    </div>
                    <Icon
                      icon={expandedModules.has(module.id) ? faChevronDown : faChevronRight}
                      className="text-gray-400"
                      size="sm"
                    />
                  </button>

                  {expandedModules.has(module.id) && (
                    <div className="px-6 pb-6 bg-gray-50">
                      <div className="space-y-2">
                        {module.lessons.map((lesson) => (
                          <button
                            key={lesson.id}
                            onClick={() => handleLessonClick(module.id, lesson.id, lesson)}
                            disabled={lesson.locked}
                            className={`w-full flex items-center gap-3 p-3 text-left transition-colors ${
                              lesson.locked
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:bg-white cursor-pointer'
                            } ${
                              selectedLesson?.moduleId === module.id && selectedLesson?.lessonId === lesson.id
                                ? 'bg-primary/5 border-l-4 border-primary'
                                : 'border-l-4 border-transparent'
                            }`}
                          >
                            <div className="flex-shrink-0">
                              {lesson.completed ? (
                                <Icon icon={faCheckCircle} className="text-green-600" size="sm" />
                              ) : (
                                <Icon icon={getLessonIcon(lesson.type)} className="text-gray-400" size="sm" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <p className={`text-sm font-medium ${lesson.locked ? 'text-gray-400' : 'text-gray-900'}`}>
                                  {lesson.title}
                                </p>
                                {(lesson.type === 'quiz' || lesson.type === 'assignment' || lesson.type === 'cat' || lesson.type === 'exam') && !lesson.locked && (
                                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5">
                                    {lesson.type === 'cat' ? 'CAT' : lesson.type === 'exam' ? 'EXAM' : lesson.type.toUpperCase()}
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                                <span className="capitalize">{lesson.type === 'cat' ? 'CAT' : lesson.type}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <Icon icon={faClock} size="xs" />
                                  {lesson.duration}
                                </span>
                                {(lesson.type === 'quiz' || lesson.type === 'assignment' || lesson.type === 'cat' || lesson.type === 'exam') && !lesson.locked && (
                                  <>
                                    <span>•</span>
                                    <span className="text-primary font-medium">Click to attempt</span>
                                  </>
                                )}
                              </div>
                            </div>
                            {lesson.locked && (
                              <Icon icon={faLock} className="text-gray-400" size="sm" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Selected Lesson Content */}
          {selectedLesson && (
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {course.modules.find(m => m.id === selectedLesson.moduleId)?.lessons.find(l => l.id === selectedLesson.lessonId)?.title}
              </h3>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  This is where the lesson content would be displayed. In a production environment, this would show:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Reading materials and text content</li>
                  <li>Embedded videos for video lessons</li>
                  <li>Interactive quizzes and assessments</li>
                  <li>Assignment instructions and submission forms</li>
                </ul>
                <p className="text-gray-700">
                  Students can read at their own pace, mark lessons as complete, and track their progress through the course.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium">
                  Mark as Complete
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Progress Card */}
          <div className="bg-white border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Your Progress</h3>
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>Overall Progress</span>
                <span>{Math.round(overallProgress)}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2">
                <div
                  className="bg-primary h-2 transition-all"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <div className="flex items-center justify-between mb-1">
                <span>Completed Modules</span>
                <span>{course.modules.filter(m => m.completed).length}/{course.modules.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Completed Lessons</span>
                <span>
                  {course.modules.reduce((acc, m) => acc + m.lessons.filter(l => l.completed).length, 0)}/
                  {course.modules.reduce((acc, m) => acc + m.lessons.length, 0)}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Access - Assessments */}
          {allAssessments.length > 0 && (
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Assessments</h3>
              <div className="space-y-2">
                {allAssessments.map((assessment) => (
                  <button
                    key={assessment.id}
                    onClick={() => assessment.assessmentId && router.push(`/student/exam/${assessment.assessmentId}`)}
                    disabled={assessment.locked}
                    className={`w-full flex items-center gap-3 p-3 text-left border border-gray-200 transition-colors ${
                      assessment.locked
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:border-primary hover:bg-gray-50 cursor-pointer'
                    }`}
                  >
                    <Icon
                      icon={assessment.completed ? faCheckCircle : getLessonIcon(assessment.type)}
                      className={assessment.completed ? 'text-green-600' : 'text-gray-500'}
                      size="sm"
                    />
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium ${assessment.locked ? 'text-gray-400' : 'text-gray-900'} truncate`}>
                        {assessment.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {assessment.type === 'cat' ? 'CAT' : assessment.type === 'exam' ? 'EXAM' : assessment.type.toUpperCase()} • {assessment.duration}
                      </p>
                    </div>
                    {assessment.locked && (
                      <Icon icon={faLock} className="text-gray-400" size="sm" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Resources */}
          <div className="bg-white border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Course Resources</h3>
            <div className="space-y-2">
              {course.resources.map((resource) => (
                <a
                  key={resource.id}
                  href={resource.url}
                  download
                  className="flex items-center gap-3 p-3 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors"
                >
                  <Icon icon={getResourceIcon(resource.type)} className="text-gray-500" size="sm" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{resource.name}</p>
                    <p className="text-xs text-gray-500">{resource.type.toUpperCase()} • {resource.size}</p>
                  </div>
                  <Icon icon={faDownload} className="text-gray-400" size="sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Course Info */}
          <div className="bg-white border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Course Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Icon icon={faUser} className="text-gray-500" size="sm" />
                <span className="text-gray-600">Instructor: <span className="font-medium text-gray-900">{course.instructor}</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon={faBook} className="text-gray-500" size="sm" />
                <span className="text-gray-600">Course Code: <span className="font-medium text-gray-900">{course.code}</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

