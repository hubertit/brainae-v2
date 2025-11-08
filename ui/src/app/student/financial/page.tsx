'use client';

import { useState } from 'react';
import Icon, {
  faDollarSign,
  faCalendar,
  faFileAlt,
  faDownload,
  faCheckCircle,
  faClock,
  faCreditCard,
  faReceipt,
  faAward,
} from '../../components/Icon';

export default function StudentFinancial() {
  const [activeTab, setActiveTab] = useState<'overview' | 'payments' | 'invoices'>('overview');

  const financialSummary = {
    balance: 1250.00,
    totalDue: 2500.00,
    paidThisSemester: 1250.00,
    financialAid: 5000.00,
  };

  const upcomingPayments = [
    {
      id: 1,
      description: 'Fall 2024 Tuition - Remaining Balance',
      amount: 1250.00,
      dueDate: 'Jan 15, 2025',
      status: 'pending',
    },
    {
      id: 2,
      description: 'Spring 2025 Tuition - First Installment',
      amount: 2500.00,
      dueDate: 'Feb 1, 2025',
      status: 'upcoming',
    },
  ];

  const paymentHistory = [
    {
      id: 1,
      description: 'Fall 2024 Tuition - First Installment',
      amount: 1250.00,
      date: 'Aug 15, 2024',
      method: 'Credit Card',
      status: 'paid',
      receipt: true,
    },
    {
      id: 2,
      description: 'Registration Fee',
      amount: 150.00,
      date: 'Aug 1, 2024',
      method: 'Bank Transfer',
      status: 'paid',
      receipt: true,
    },
    {
      id: 3,
      description: 'Summer 2024 Tuition',
      amount: 2000.00,
      date: 'Jun 10, 2024',
      method: 'Credit Card',
      status: 'paid',
      receipt: true,
    },
  ];

  const invoices = [
    {
      id: 'INV-2024-001',
      description: 'Fall 2024 Tuition',
      amount: 2500.00,
      date: 'Aug 1, 2024',
      status: 'partial',
      paid: 1250.00,
    },
    {
      id: 'INV-2024-002',
      description: 'Registration Fee',
      amount: 150.00,
      date: 'Aug 1, 2024',
      status: 'paid',
      paid: 150.00,
    },
    {
      id: 'INV-2024-003',
      description: 'Summer 2024 Tuition',
      amount: 2000.00,
      date: 'Jun 1, 2024',
      status: 'paid',
      paid: 2000.00,
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Financial Information</h1>
        <p className="text-gray-600">Manage your tuition payments and view financial details</p>
      </div>

      {/* Financial Summary */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
              <Icon icon={faDollarSign} className="text-gray-600" size="lg" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">${financialSummary.balance.toFixed(2)}</div>
              <div className="text-sm text-gray-600">Current Balance</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
              <Icon icon={faCalendar} className="text-gray-600" size="lg" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">${financialSummary.totalDue.toFixed(2)}</div>
              <div className="text-sm text-gray-600">Total Due</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
              <Icon icon={faCheckCircle} className="text-gray-600" size="lg" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">${financialSummary.paidThisSemester.toFixed(2)}</div>
              <div className="text-sm text-gray-600">Paid This Semester</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
              <Icon icon={faAward} className="text-gray-600" size="lg" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">${financialSummary.financialAid.toFixed(2)}</div>
              <div className="text-sm text-gray-600">Financial Aid</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border border-gray-200 mb-6">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === 'overview'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('payments')}
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === 'payments'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Payment History
          </button>
          <button
            onClick={() => setActiveTab('invoices')}
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === 'invoices'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Invoices
          </button>
        </div>
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Upcoming Payments */}
          <div className="bg-white border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Payments</h2>
            <div className="space-y-4">
              {upcomingPayments.map((payment) => (
                <div
                  key={payment.id}
                  className="flex items-center justify-between p-4 border border-gray-200 hover:border-primary transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gray-100 flex items-center justify-center">
                        <Icon icon={payment.status === 'pending' ? faClock : faCalendar} className="text-gray-600" size="sm" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{payment.description}</p>
                        <p className="text-sm text-gray-600">Due: {payment.dueDate}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-bold text-gray-900">${payment.amount.toFixed(2)}</span>
                    <button className="px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium">
                      Pay Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Payment Methods</h2>
              <button className="text-primary hover:text-primary/80 text-sm font-medium">
                Add Payment Method
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                  <Icon icon={faCreditCard} className="text-gray-600" size="lg" />
                  <div>
                    <p className="font-medium text-gray-900">Visa •••• 4242</p>
                    <p className="text-sm text-gray-600">Expires 12/2025</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1">
                  Primary
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'payments' && (
        <div className="bg-white border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Payment History</h2>
          <div className="space-y-4">
            {paymentHistory.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between p-4 border border-gray-200 hover:border-primary transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gray-100 flex items-center justify-center">
                      <Icon icon={faCheckCircle} className="text-gray-600" size="sm" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{payment.description}</p>
                      <p className="text-sm text-gray-600">{payment.date} • {payment.method}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-gray-900">${payment.amount.toFixed(2)}</span>
                  {payment.receipt && (
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors text-sm font-medium">
                      <Icon icon={faDownload} size="sm" />
                      <span>Receipt</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'invoices' && (
        <div className="bg-white border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Invoices</h2>
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center justify-between p-4 border border-gray-200 hover:border-primary transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gray-100 flex items-center justify-center">
                      <Icon icon={faFileAlt} className="text-gray-600" size="sm" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{invoice.description}</p>
                      <p className="text-sm text-gray-600">{invoice.id} • {invoice.date}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm text-gray-600">
                      {invoice.status === 'paid' ? 'Paid' : `$${invoice.paid.toFixed(2)} of $${invoice.amount.toFixed(2)}`}
                    </p>
                    <p className="text-lg font-bold text-gray-900">${invoice.amount.toFixed(2)}</p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors text-sm font-medium">
                    <Icon icon={faDownload} size="sm" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

