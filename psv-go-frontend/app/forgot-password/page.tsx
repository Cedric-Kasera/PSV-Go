'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="mb-4">
              <Image 
                src="/images/psvgologo.png" 
                alt="PSV Go Logo" 
                width={150} 
                height={100}
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {isSubmitted ? 'Check Your Email' : 'Forgot Password?'}
            </h1>
            <p className="text-gray-600 text-center">
              {isSubmitted 
                ? 'We\'ve sent a password reset link to your email address.' 
                : 'Enter your email address and we\'ll send you a link to reset your password.'}
            </p>
          </div>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Reset Link
              </button>
            </form>
          ) : (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">
                If an account exists with {email}, you will receive a password reset link shortly.
              </p>
              <Link 
                href="/" 
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Back to login
              </Link>
            </div>
          )}

          {!isSubmitted && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Remember your password?{' '}
                <Link href="/" className="font-medium text-blue-600 hover:text-blue-500">
                  Sign in
                </Link>
              </p>
            </div>
          )}
        </div>
        
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} PSV Go. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}