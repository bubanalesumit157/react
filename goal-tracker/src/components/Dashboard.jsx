import React from 'react';
import GoalList from './GoalList';
import GoalForm from './GoalForm';
function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <GoalForm />
      <GoalList />
    </div>
  );
}
export default Dashboard;
