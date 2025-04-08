import React, { useState } from 'react';

const AssessmentResultPage = () => {
  // Sample data - in a real app, this would come from an API or database
  const [studentData] = useState({
    name: "Alex Johnson",
    gradeLevel: "7th Grade",
    assessmentDate: "April 8, 2025",
    overallScore: 78,
    learningLevel: "Developing",
    subject: "Mathematics",
    skillBreakdown: [
      { 
        skill: "Algebraic Reasoning", 
        score: 85, 
        status: "Proficient",
        description: "Ability to solve equations and understand algebraic expressions"
      },
      { 
        skill: "Number Sense", 
        score: 90, 
        status: "Advanced",
        description: "Understanding of number properties, operations, and relationships"
      },
      { 
        skill: "Geometry & Measurement", 
        score: 65, 
        status: "Developing",
        description: "Knowledge of shapes, spatial relationships, and measurement concepts"
      },
      { 
        skill: "Data Analysis & Probability", 
        score: 70, 
        status: "Developing",
        description: "Skills in interpreting data, understanding probability concepts"
      },
      { 
        skill: "Problem Solving", 
        score: 68, 
        status: "Developing",
        description: "Ability to apply mathematical concepts to solve complex problems"
      }
    ],
    strengths: [
      "Strong grasp of algebraic equations and expressions",
      "Excellent understanding of number properties and operations",
      "Good at mental math and calculation accuracy"
    ],
    areasForImprovement: [
      "Understanding geometric concepts and spatial relationships",
      "Applying formulas in measurement problems",
      "Multi-step problem solving requiring multiple math concepts"
    ],
    personalizedPath: [
      {
        title: "Geometric Reasoning Workshop",
        description: "Interactive lessons on shapes, angles, and spatial relationships",
        type: "Lesson",
        estimatedTime: "45 minutes",
        priority: "High"
      },
      {
        title: "Measurement Problem Set",
        description: "Practice applying area, volume, and perimeter formulas to real-world scenarios",
        type: "Practice",
        estimatedTime: "30 minutes",
        priority: "High"
      },
      {
        title: "Visual Math Tools",
        description: "Interactive tools to visualize geometric concepts and strengthen spatial reasoning",
        type: "Activity",
        estimatedTime: "25 minutes",
        priority: "Medium"
      },
      {
        title: "Math Application Challenge",
        description: "Multi-step problems that integrate algebra, geometry, and data analysis concepts",
        type: "Practice",
        estimatedTime: "40 minutes",
        priority: "Medium"
      }
    ]
  });

  // Function to get color based on score
  const getScoreColor = (score) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 80) return "bg-blue-500";
    if (score >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  // Function to get status badge styling
  const getStatusBadge = (status) => {
    switch (status) {
      case "Advanced":
        return "bg-green-100 text-green-800";
      case "Proficient":
        return "bg-blue-100 text-blue-800";
      case "Developing":
        return "bg-yellow-100 text-yellow-800";
      case "Needs Support":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header section */}
          <header className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Mathematics Assessment Results</h1>
                <p className="text-gray-600">{studentData.subject} • {studentData.assessmentDate}</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center">
                <div className="mr-4">
                  <p className="text-sm text-gray-500">Student</p>
                  <p className="font-medium">{studentData.name}</p>
                  <p className="text-sm text-gray-500">{studentData.gradeLevel}</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">{studentData.overallScore}%</span>
                </div>
              </div>
            </div>
          </header>

          {/* AI-detected Learning Level */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Math Proficiency Level</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">AI-Detected Math Level</h3>
                      <p className="text-2xl font-bold text-blue-700">{studentData.learningLevel}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Based on problem-solving approach, solution methods, and conceptual understanding, our AI has determined 
                    that this student is at a <strong>{studentData.learningLevel}</strong> level in {studentData.subject}.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-50 rounded-lg p-6 h-full">
                  <h3 className="text-lg font-medium mb-3">Math Proficiency Scale</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm font-medium">Advanced</span>
                      <span className="text-xs text-gray-500 ml-auto">90-100%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm font-medium">Proficient</span>
                      <span className="text-xs text-gray-500 ml-auto">80-89%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="text-sm font-medium">Developing</span>
                      <span className="text-xs text-gray-500 ml-auto">70-79%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-sm font-medium">Needs Support</span>
                      <span className="text-xs text-gray-500 ml-auto">Below 70%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mathematical Skill Breakdown */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Mathematical Skill Breakdown</h2>
            <div className="space-y-4">
              {studentData.skillBreakdown.map((skill, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex flex-col md:flex-row md:items-center mb-2">
                    <h3 className="text-lg font-medium flex-1">{skill.skill}</h3>
                    <div className="flex items-center mt-2 md:mt-0">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(skill.status)} mr-3`}>
                        {skill.status}
                      </span>
                      <span className="font-semibold text-gray-700">{skill.score}%</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`${getScoreColor(skill.score)} h-2.5 rounded-full`}
                      style={{ width: `${skill.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mathematical Strengths and Areas for Improvement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-green-700">Math Strengths</h2>
              <ul className="space-y-2">
                {studentData.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-yellow-700">Areas to Strengthen</h2>
              <ul className="space-y-2">
                {studentData.areasForImprovement.map((area, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Math Visualization */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Mathematical Skills Radar Chart</h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-50 rounded-lg p-4 flex items-center justify-center">
              <div className="text-center">
                <svg width="350" height="350" viewBox="0 0 350 350" className="mx-auto">
                  {/* Background pentagonal grid */}
                  <g fill="none" stroke="#e5e7eb">
                    <polygon points="175,50 284,131 247,265 103,265 66,131" strokeWidth="1" />
                    <polygon points="175,86 257,147 228,249 122,249 93,147" strokeWidth="1" />
                    <polygon points="175,122 230,164 209,232 141,232 120,164" strokeWidth="1" />
                    <polygon points="175,158 203,181 190,216 160,216 147,181" strokeWidth="1" />
                    <polygon points="175,175 175,175 175,175 175,175 175,175" strokeWidth="1" />
                    
                    <line x1="175" y1="50" x2="175" y2="175" strokeWidth="1" />
                    <line x1="284" y1="131" x2="175" y2="175" strokeWidth="1" />
                    <line x1="247" y1="265" x2="175" y2="175" strokeWidth="1" />
                    <line x1="103" y1="265" x2="175" y2="175" strokeWidth="1" />
                    <line x1="66" y1="131" x2="175" y2="175" strokeWidth="1" />
                  </g>
                  
                  {/* Student score polygon */}
                  <polygon 
                    points={`
                      ${175 - (175 - 66) * 0.85/100}, ${175 - (175 - 50) * 0.85/100}
                      ${175 + (284 - 175) * 0.90/100}, ${175 - (175 - 131) * 0.90/100}
                      ${175 + (247 - 175) * 0.65/100}, ${175 + (265 - 175) * 0.65/100}
                      ${175 - (175 - 103) * 0.70/100}, ${175 + (265 - 175) * 0.70/100}
                      ${175 - (175 - 66) * 0.68/100}, ${175 - (175 - 131) * 0.68/100}
                    `}
                    fill="rgba(37, 99, 235, 0.2)"
                    stroke="#2563eb"
                    strokeWidth="2"
                  />
                  
                  {/* Skill points */}
                  <circle cx={175 - (175 - 66) * 0.85/100} cy={175 - (175 - 50) * 0.85/100} r="4" fill="#2563eb" />
                  <circle cx={175 + (284 - 175) * 0.90/100} cy={175 - (175 - 131) * 0.90/100} r="4" fill="#2563eb" />
                  <circle cx={175 + (247 - 175) * 0.65/100} cy={175 + (265 - 175) * 0.65/100} r="4" fill="#2563eb" />
                  <circle cx={175 - (175 - 103) * 0.70/100} cy={175 + (265 - 175) * 0.70/100} r="4" fill="#2563eb" />
                  <circle cx={175 - (175 - 66) * 0.68/100} cy={175 - (175 - 131) * 0.68/100} r="4" fill="#2563eb" />
                  
                  {/* Labels */}
                  <text x="175" y="35" textAnchor="middle" fill="#4b5563" fontSize="12">Algebraic Reasoning</text>
                  <text x="305" y="131" textAnchor="start" fill="#4b5563" fontSize="12">Number Sense</text>
                  <text x="247" y="290" textAnchor="middle" fill="#4b5563" fontSize="12">Geometry & Measurement</text>
                  <text x="90" y="290" textAnchor="middle" fill="#4b5563" fontSize="12">Data Analysis & Probability</text>
                  <text x="40" y="131" textAnchor="end" fill="#4b5563" fontSize="12">Problem Solving</text>
                </svg>
                <p className="text-sm text-gray-500 mt-2">Visual representation of mathematical skill proficiency across key areas</p>
              </div>
            </div>
          </section>

          {/* Math-Specific Personalized Learning Path */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-semibold">Personalized Math Learning Path</h2>
              <div className="ml-auto">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
                  </svg>
                  Save Path
                </button>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Based on the assessment results, our AI has created a personalized mathematics learning path
              focused on strengthening areas of difficulty while building on existing strengths.
            </p>
            <div className="space-y-4">
              {studentData.personalizedPath.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 transition-colors cursor-pointer">
                  <div className="flex items-start">
                    <div className="mr-4">
                      {item.type === "Activity" && (
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                          </svg>
                        </div>
                      )}
                      {item.type === "Practice" && (
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                          </svg>
                        </div>
                      )}
                      {item.type === "Lesson" && (
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className="font-medium text-lg">{item.title}</h3>
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                          item.priority === "High" ? "bg-red-100 text-red-800" : 
                          item.priority === "Medium" ? "bg-yellow-100 text-yellow-800" : 
                          "bg-green-100 text-green-800"
                        }`}>
                          {item.priority} Priority
                        </span>
                      </div>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        {item.estimatedTime}
                        <span className="ml-4 bg-gray-100 px-2 py-1 rounded text-gray-600">
                          {item.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Math Growth insights */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Growth Insights</h2>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-start mb-4">
                <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <h3 className="text-lg font-medium text-blue-800 mb-2">Mathematical Mindset</h3>
                  <p className="text-gray-700">
                    Alex demonstrates a growth mindset when tackling algebraic problems but shows signs of a fixed mindset
                    when facing geometry challenges. Encouraging persistence through spatial reasoning activities
                    will help develop confidence in these areas.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
                <div>
                  <h3 className="text-lg font-medium text-blue-800 mb-2">Learning Recommendations</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Use visual models when introducing new geometric concepts</li>
                    <li>Provide real-world contexts for measurement problems</li>
                    <li>Break down multi-step problems into smaller, manageable parts</li>
                    <li>Build on algebraic strengths by gradually incorporating geometric elements</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Action buttons */}
          <div className="flex justify-between">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Assessment
            </button>
            <div>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 mr-2">
                Print Results
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Start Math Learning Path
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResultPage;