export const quizMfa = {
	questions: [
		{
			id: 1,
			question: 'What is the primary purpose of Multi-Factor Authentication (MFA)?',
			answers: [
				'To simplify login processes',
				'To add an extra layer of security to account access',
				'To store passwords securely',
				'To eliminate the need for passwords'
			],
			correctAnswer: 'To add an extra layer of security to account access',
		},
		{
			id: 2,
			question: 'Which of the following is NOT a category of authentication factors used in MFA?',
			answers: [
				'Knowledge Factors',
				'Possession Factors',
				'Behavior Factors',
				'Inherence Factors'
			],
			correctAnswer: 'Behavior Factors',
		},
		{
			id: 3,
			question: 'What type of MFA method is generally considered more secure than SMS codes?',
			answers: [
				'Password recovery questions',
				'Biometric authentication',
				'Email verification',
				'Security token generators'
			],
			correctAnswer: 'Biometric authentication',
		},
		{
			id: 4,
			question: 'What should you do if you receive a request for your MFA code via email?',
			answers: [
				'Reply to the email with your code',
				'Ignore the request, as it could be phishing',
				'Provide the code to verify your identity',
				'Change your password immediately'
			],
			correctAnswer: 'Ignore the request, as it could be phishing',
		},
		{
			id: 5,
			question: 'When should you enable MFA?',
			answers: [
				'Only for financial accounts',
				'On all accounts that support it',
				'Only for accounts you access from public networks',
				'Never, as it complicates the login process'
			],
			correctAnswer: 'On all accounts that support it',
		},
	],
};
