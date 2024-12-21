import React, { useState } from 'react';
function GoalForm() {
  const [goal, setGoal] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`New Goal: ${goal}`);
    setGoal('');
  };
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="Enter your goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-600 text-white p-2">Add Goal</button>
    </form>
  );
}
export default GoalForm;