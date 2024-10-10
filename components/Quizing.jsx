'use client';
import React, { useState } from 'react';
import Quiz from './Quiz';
import { quizPasswordSecurity } from '../components/data/quizPasswordSecurity';
import { quizDataProtection } from '../components/data/quizDataProtection';
import { quizMfa } from '../components/data/quizMfa';
import { quizPhishing } from '../components/data/quizPhishing';
import { quizSoftwareInstallationUpdate } from '../components/data/quizSoftwareInstallationUpdate';

const quizzes = {
  passwordSecurity: quizPasswordSecurity,
	dataProtection: quizDataProtection,
	Mfa: quizMfa,
	Phishing: quizPhishing,
  softwareInstallationUpdate: quizSoftwareInstallationUpdate,
};

export default function Quizing({ selectedQuiz }) {
  const [quizStarted, setQuizStarted] = useState(false);
  const [name, setName] = useState('');

  const quiz = quizzes[selectedQuiz];

  return (
    <div className="my-6 pb-6 mx-auto text-center border border-gray-500 rounded-xl">
      <div className="text-center">
        <h1 className="mt-6 mb-3">Interactive Quiz</h1>
      </div>

      {quizStarted ? (
        <Quiz name={name} quiz={quiz} />
      ) : (
        <>
          <div className="mb-6 mt-20">
            <label htmlFor="nameInput" className="block text-center">
              Enter Your Name:
            </label>
            <input
              type="text"
              className="mt-3 mx-auto block w-1/2 px-3 py-2 border border-gray-500 focus:ring-0 rounded-md shadow-sm focus:bg-transparent sm:text-sm"
              id="nameInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button
            onClick={() => setQuizStarted(true)}
            className="mb-20 py-2 px-4 rounded nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:bg-gray-400/25 dark:nx-text-gray-50 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50"
            disabled={!name.trim()}
          >
            Start Quiz
          </button>
        </>
      )}
    </div>
  );
}
