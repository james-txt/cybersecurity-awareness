import React, { useState } from 'react';
import ScoreCard from './ScoreCard';

const Quiz = ({ name, quiz }) => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState('');
	const [answerChecked, setAnswerChecked] = useState(false);
	const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
	const [showResults, setShowResults] = useState(false);
	const [quizResult, setQuizResult] = useState({
		score: 0,
		correctAnswers: 0,
		wrongAnswers: 0,
	});

	const { questions } = quiz;
	const { question, answers, correctAnswer } = questions[currentQuestionIndex];

	const onAnswerSelected = (answer, idx) => {
		setSelectedAnswerIndex(idx);
		setSelectedAnswer(answer);
		setAnswerChecked(true);
	};

	const handleNextQuestion = () => {
		if (selectedAnswer === correctAnswer) {
			setQuizResult((prev) => ({
				...prev,
				score: prev.score + 5,
				correctAnswers: prev.correctAnswers + 1,
			}));
		} else {
			setQuizResult((prev) => ({
				...prev,
				wrongAnswers: prev.wrongAnswers + 1,
			}));
		}
		if (currentQuestionIndex !== questions.length - 1) {
			setCurrentQuestionIndex((prev) => prev + 1);
		} else {
			setShowResults(true);
		}
		setSelectedAnswer('');
		setSelectedAnswerIndex(null);
		setAnswerChecked(false);
	};

	const resetQuiz = () => {
		setCurrentQuestionIndex(0);
		setSelectedAnswer('');
		setSelectedAnswerIndex(null);
		setAnswerChecked(false);
		setShowResults(false);
		setQuizResult({
			score: 0,
			correctAnswers: 0,
			wrongAnswers: 0,
		});
	};

	return (
		<div>
			<div>
				{!showResults ? (
					<div className="card p-4 border border-gray-500 rounded-xl">
						<h4 className="text-lg font-semibold mb-4">{question}</h4>
						<ul className="list-group text-gray-50 space-y-2">
							{answers.map((answer, idx) => (
								<li
									key={idx}
									onClick={() => onAnswerSelected(answer, idx)}
									className={`list-group-item cursor-pointer p-2 rounded ${selectedAnswerIndex === idx ? 'bg-blue-700' : 'bg-char/50'}`}
								>
									{answer}
								</li>
							))}
						</ul>
						<div className="flex justify-between mt-3">
							<b>Question {currentQuestionIndex + 1}/{questions.length}</b>
							<button
								onClick={handleNextQuestion}
								className="text-gray-50 mb-20 py-2 px-4 rounded nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-call-out:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:bg-gray-400/25 dark:nx-text-gray-50 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50"
								disabled={!answerChecked}
							>
								{currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next Question'}
							</button>
						</div>
					</div>
				) : (
					<ScoreCard 
						quizResult={quizResult} 
						questions={questions} 
						name={name} 
						resetQuiz={resetQuiz} 
					/>
				)}
			</div>
		</div>
	);
};

export default Quiz;
