import React, { useState } from 'react';
import StudentCard from '../components/StudentCard';
import PerformanceGraph from '../components/PerformanceGraph';
import RecommendationBox from '../components/RecommendationBox';

const mockStudents = [
  {
    id: 1,
    name: 'Emma Johnson',
    grade: '10th Grade',
    subject: 'Mathematics',
    progress: 78,
    lastActivity: '2 hours ago',
    avatar: '/images/avatars/student1.jpg'
  },
  {
    id: 2,
    name: 'Lucas Smith',
    grade: '10th Grade',
    subject: 'Science',
    progress: 92,
    lastActivity: '1 day ago',
    avatar: '/images/avatars/student2.jpg'
  },
  {
    id: 3,
    name: 'Olivia Davis',
    grade: '10th Grade',
    subject: 'English',
    progress: 65,
    lastActivity: '3 hours ago',
    avatar: '/images/avatars/student3.jpg'
  },
  {
    id: 4,
    name: 'Noah Wilson',
    grade: '10th Grade',
    subject: 'History',
    progress: 81,
    lastActivity: '5 hours ago',
    avatar: '/images/avatars/student4.jpg'
  },
  {
    id: 5,
    name: 'Sophia Brown',
    grade: '10th Grade',
    subject: 'Physics',
    progress: 73,
    lastActivity: '1 hour ago',
    avatar: '/images/avatars/student5.jpg'
  }
];

const mockPerformanceData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
  datasets: [
    {
      name: 'Class Average',
      data: [65, 68, 70, 72, 75, 78]
    },
    {
      name: 'Selected Student',
      data: [60, 65, 75, 70, 80, 85]
    }
  ]
};

const mockRecommendations = [
  {
    id: 1,
    title: 'Additional Practice for Emma',
    description: 'Emma is struggling with algebraic equations. Consider assigning extra practice problems focusing on this concept.',
    type: 'individual',
    priority: 'high'
  },
  {
    id: 2,
    title: 'Group Project Opportunity',
    description: 'Lucas, Olivia, and Noah show strong collaboration skills. Consider grouping them for the upcoming science project.',
    type: 'group',
    priority: 'medium'
  },
  {
    id: 3,
    title: 'Class-wide Review Session',
    description: 'Several students are having difficulty with the latest history unit. A review session may be beneficial.',
    type: 'class',
    priority: 'medium'
  }
];

const TeacherDashboard = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const handleStudentSelect = (studentId) => {
    const student = mockStudents.find(s => s.id === studentId);
    setSelectedStudent(student);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Teacher Dashboard</h1>
          <div className="flex space-x-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-150">
              Create Assessment
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition duration-150">
              Export Data
            </button>
          </div>
        </div>
        
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-1">Total Students</h3>
            <p className="text-3xl font-bold text-gray-800">24</p>
            <p className="text-sm text-green-600 mt-2">↑ 12% from last month</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-1">Class Average</h3>
            <p className="text-3xl font-bold text-gray-800">76%</p>
            <p className="text-sm text-green-600 mt-2">↑ 3% from last assessment</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-1">At-Risk Students</h3>
            <p className="text-3xl font-bold text-gray-800">5</p>
            <p className="text-sm text-red-600 mt-2">↑ 2 since last month</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-1">Pending Assessments</h3>
            <p className="text-3xl font-bold text-gray-800">3</p>
            <p className="text-sm text-gray-600 mt-2">Due this week</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Student List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Student List</h2>
                <div className="mt-2">
                  <input 
                    type="text" 
                    placeholder="Search students..." 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="overflow-y-auto" style={{ maxHeight: '600px' }}>
                {mockStudents.map((student) => (
                  <div 
                    key={student.id} 
                    onClick={() => handleStudentSelect(student.id)}
                    className={`cursor-pointer transition-colors duration-150 ${selectedStudent && selectedStudent.id === student.id ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                  >
                    <StudentCard student={student} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Individual Performance Overview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {selectedStudent ? `${selectedStudent.name}'s Performance` : 'Class Performance Overview'}
              </h2>
              
              <div className="flex mb-4 border-b">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-2 font-medium ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  Overview
                </button>
                <button 
                  onClick={() => setActiveTab('skills')}
                  className={`px-4 py-2 font-medium ${activeTab === 'skills' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  Skills
                </button>
                <button 
                  onClick={() => setActiveTab('assessments')}
                  className={`px-4 py-2 font-medium ${activeTab === 'assessments' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  Assessments
                </button>
                <button 
                  onClick={() => setActiveTab('engagement')}
                  className={`px-4 py-2 font-medium ${activeTab === 'engagement' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  Engagement
                </button>
              </div>
              
              <div className="h-80 mb-6">
                <PerformanceGraph data={mockPerformanceData} />
              </div>
              
              {selectedStudent && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Strongest Skill</h3>
                    <p className="text-lg font-semibold text-gray-800">Problem Solving</p>
                    <p className="text-sm text-gray-600">92% proficiency</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Area for Improvement</h3>
                    <p className="text-lg font-semibold text-gray-800">Algebraic Concepts</p>
                    <p className="text-sm text-gray-600">63% proficiency</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Learning Style</h3>
                    <p className="text-lg font-semibold text-gray-800">Visual</p>
                    <p className="text-sm text-gray-600">Based on activity patterns</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Recommendations */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">AI-Powered Recommendations</h2>
                <select className="text-sm border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option value="all">All Types</option>
                  <option value="individual">Individual</option>
                  <option value="group">Group</option>
                  <option value="class">Class-wide</option>
                </select>
              </div>
              
              <div className="space-y-4">
                {mockRecommendations.map((recommendation) => (
                  <RecommendationBox key={recommendation.id} recommendation={recommendation} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default TeacherDashboard;
