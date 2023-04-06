import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import uuid from "react-uuid";
import AddGoals from "./Addgoal";

export default function GoalsList() {
  const [goalsList, setGoalsList] = useState([]);

  function handleGoalsList(newgoal) {
    let newGoalsList = [...goalsList, newgoal];
    setGoalsList(newGoalsList);
  }

  const deleteGoal = (text) => {
    const newGoals = goalsList.filter((goal) => {
      return goal !== text;
    });
    setGoalsList(newGoals);
  };
  return (
    <div>
      {goalsList?.length > 0 ? (
        <ul>
          {goalsList.map((goal) => (
            <>
              <li key={uuid()}>{goal.Title}</li>
              <MdDeleteForever
                className="todo-delete-button"
                onClick={() => deleteGoal(goal)}
                style={{ color: "black" }}
              />
            </>
          ))}
        </ul>
      ) : (
        <h1>No Goals Found.</h1>
      )}
      <div>
        <AddGoals handleGoalsList={handleGoalsList} />
      </div>
    </div>
  );
}
