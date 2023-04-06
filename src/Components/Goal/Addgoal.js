import React, { useState } from "react";

export default function AddGoals({ handleGoalsList }) {
  const [goal, setGoal] = useState({ Title: "", Description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGoalsList(goal);
    goal.Title("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="Title"
        value={goal.Title}
        required
        onChange={(e) => {
          setGoal({ ...goal, Title: e.target.value });
        }}
        type="text"
        placeholder="add goal title..."
      />
      <input
        name="Description"
        required
        value={goal.Description}
        onChange={(e) => {
          setGoal({ ...goal, Description: e.target.value });
        }}
        type="text"
        placeholder="add goal Description..."
      />
      <button>Add Goal</button>
    </form>
  );
}
