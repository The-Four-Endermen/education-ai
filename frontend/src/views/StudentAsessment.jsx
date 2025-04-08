import React, { useState } from 'react';

const StudentAssessmentPage = () => {
  // Sample mathematics questions for middle school
  const [questions] = useState([
    {
      id: 1,
      type: 'multiple-choice',
      question: 'What is the solution to the equation 3x + 7 = 22?',
      options: ['x = 3', 'x = 5', 'x = 7', 'x = 15'],
      correctAnswer: 'x = 5'
    },
    {
      id: 2,
      type: 'multiple-choice',
      question: 'Which expression is equivalent to 2(3x - 4)?',
      options: ['6x - 4', '6x - 8', '5x - 4', '6x + 8'],
      correctAnswer: '6x - 8'
    },
    {
      id: 3,
      type: 'text-input',
      question: 'If a rectangle has a length of 12 cm and a width of 8 cm, what is its area in square centimeters?',
      correctAnswer: ['96', '96 cm²', '96 square centimeters', '96 sq cm']
    },
    {
      id: 4,
      type: 'multiple-choice',
      question: 'Which of these is NOT a prime number?',
      options: ['13', '19', '21', '23'],
      correctAnswer: '21'
    },
    {
      id: 5,
      type: 'multiple-choice',
      question: 'In a right triangle, if one acute angle is 30°, what is the other acute angle?',
      options: ['30°', '45°', '60°', '90°'],
      correctAnswer: '60°'
    },
    {
      id: 6,
      type: 'text-input',
      question: 'If 25% of a number is 75, what is the number?',
      correctAnswer: ['300']
    },
    {
      id: 7,
      type: 'multiple-choice',
      question: 'Which of the following is the correct order of operations in mathematics?',
      options: [
        'Addition, Subtraction, Multiplication, Division, Exponents, Parentheses',
        'Parentheses, Exponents, Multiplication, Division, Addition, Subtraction',
        'Parentheses, Exponents, Addition, Subtraction, Multiplication, Division',
        'Parentheses, Multiplication, Division, Exponents, Addition, Subtraction'
      ],
      correctAnswer: 'Parentheses, Exponents, Multiplication, Division, Addition, Subtraction'
    },
    {
      id: 8,
      type: 'text-input',
      question: 'What is the circumference of a circle with radius 7 cm? (Use π = 3.14)',
      correctAnswer: ['43.96', '43.96 cm', '44', '44 cm', '43.96 centimeters', '43.98', '43.98 cm']
    }
  ]);

  // State for tracking current question and answers
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle answer selection/input
  const handleAnswerChange = (value) => {
    setAnswers({
      ...answers,
      [questions[currentQuestionIndex].id]: value
    });
  };

  // Navigation functions
  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const jumpToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  // Handle assessment submission
  const handleSubmit = () => {
    // In a real app, you would send the answers to the backend
    console.log("Assessment submitted:", answers);
    setSubmitted(true);
    // Redirect to results page would happen here
    // window.location.href = '/assessment-results';
  };

  // Calculate progress percentage
  const progressPercentage = (Object.keys(answers).length / questions.length) * 100;

  // Render question based on type
  const renderQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (currentQuestion.type === 'multiple-choice') {
      return (
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4">{currentQuestion.question}</h3>
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  id={`option-${index}`}
                  name={`question-${currentQuestion.id}`}
                  className="h-5 w-5 text-blue-600"
                  checked={answers[currentQuestion.id] === option}
                  onChange={() => handleAnswerChange(option)}
                />
                <label htmlFor={`option-${index}`} className="ml-2 text-gray-700">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (currentQuestion.type === 'text-input') {
      return (
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4">{currentQuestion.question}</h3>
          <input
            type="text"
            className="w-full border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={answers[currentQuestion.id] || ''}
            onChange={(e) => handleAnswerChange(e.target.value)}
            placeholder="Type your answer here..."
          />
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with progress bar */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-center">Middle School Mathematics Assessment</h1>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>{Object.keys(answers).length} of {questions.length} answered</span>
            <span>{Math.round(progressPercentage)}% complete</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {/* Question number indicator */}
          <div className="mb-6 pb-4 border-b border-gray-200">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
          </div>

          {/* Question content */}
          {renderQuestion()}

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={goToPreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className={`px-4 py-2 rounded-md ${
                currentQuestionIndex === 0
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>

            {currentQuestionIndex < questions.length - 1 ? (
              <button
                onClick={goToNextQuestion}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                disabled={Object.keys(answers).length < questions.length}
              >
                Submit Assessment
              </button>
            )}
          </div>
        </div>

        {/* Quick navigation */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-medium mb-4">Question Navigation</h3>
            <div className="flex flex-wrap gap-2">
              {questions.map((question, index) => (
                <button
                  key={question.id}
                  onClick={() => jumpToQuestion(index)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    answers[question.id]
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  } ${
                    currentQuestionIndex === index ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Math tips */}
        <div className="max-w-3xl mx-auto mt-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Tip: Remember to show your work for any calculations. For geometry problems, drawing a sketch can help you visualize the solution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Calculator tool */}
        <div className="max-w-3xl mx-auto mt-6">
          <div className="bg-blue-50 rounded-lg p-4 flex items-center">
            <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
            <span className="text-blue-700">You may use a calculator for this assessment. Scratch paper is also allowed.</span>
          </div>
        </div>
      </main>

      {/* Submission Modal */}
      {submitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Assessment Submitted!</h2>
            <p className="text-gray-600 mb-6 text-center">
              Your mathematics assessment has been submitted successfully. Your teacher will review your results soon.
            </p>
            <div className="flex justify-center">
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={() => {
                  // In a real app, redirect to the results page
                  console.log("Redirecting to results...");
                }}
              >
                View Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentAssessmentPage;