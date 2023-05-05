import { Route, Routes } from "react-router-dom";

import ToDo from "./Components/ToDo/todo";
import TimeManagement from "./Components/TimeManagement/timemanagement";
import NoteTaking from "./Components/Books/books";
import Jarnuling from "./Components/journaling/juruling";
import GoalsList from "./Components/Goal/goal_list";
import EDR from "./Components/EveryDayRead/everydayread";
import "./App.css";
import Nav from "./Components/NavBar/navbar";
import Home from "./Components/Home/home";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/timemanagement" element={<TimeManagement />} />
        <Route path="/notetaking" element={<NoteTaking />} />
        <Route path="/jarnuling" element={<Jarnuling />} />
        <Route path="/goals" element={<GoalsList />} />
        <Route path="/everydayread" element={<EDR />} />
      </Routes>
    </>
  );
}

export default App;
