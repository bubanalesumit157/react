import React from 'react';
function GoalDetail({ goal }) {
  return (
    <div className="border p-4 rounded-lg">
      <h4 className="text-lg font-semibold">{goal.title}</h4>
      <p>{goal.description}</p>
    </div>
  );
}
export default GoalDetail;
