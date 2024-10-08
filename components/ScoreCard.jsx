import React from 'react';

const ScoreCard = ({ quizResult, questions, name, resetQuiz }) => {
	const passPercentage = 60;

	const percentage = (quizResult.score / (questions.length * 5)) * 100;
	const status = percentage >= passPercentage ? 'Pass' : 'Fail';

	return (
		<>
			<div className="p-4 shadow-md rounded-md">
				<h3 className="text-lg font-semibold mb-4">Hello, {name}. Here is your Result Analysis</h3>
				<table className="w-full text-left">
					<tbody>
						<tr>
							<td className="py-2">Total Questions:</td>
							<td>{questions.length}</td>
						</tr>
						<tr>
							<td className="py-2">Total Score:</td>
							<td>{quizResult.score}</td>
						</tr>
						<tr>
							<td className="py-2">Correct Answers:</td>
							<td>{quizResult.correctAnswers}</td>
						</tr>
						<tr>
							<td className="py-2">Wrong Answers:</td>
							<td>{quizResult.wrongAnswers}</td>
						</tr>
						<tr>
							<td className="py-2">Percentage:</td>
							<td>{percentage}%</td>
						</tr>
						<tr>
							<td className="py-2">Status:</td>
							<td>{status}</td>
						</tr>
					</tbody>
				</table>
				<button
					onClick={resetQuiz} // Call the reset function here
					className="mt-3 py-2 px-4 rounded nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:bg-gray-400/25 dark:nx-text-gray-50 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50"
				>
					Restart
				</button>
			</div>
		</>
	);
};

export default ScoreCard;
