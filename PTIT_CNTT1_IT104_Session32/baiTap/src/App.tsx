import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChangeState from "./views/ChangeState";
import ChangeTheme from "./views/ChangeTheme";
import Counter from "./views/Counter";
import ListUser from "./views/ListUser";
import Profile from "./views/Profile";
import RandomNumber from "./views/RandomNumber";
import Register from "./views/Register";
import Login from "./views/Login";
import HomePage from "./views/HomePage";
import TasksList from "./views/TasksList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home-pages" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/list-user" element={<ListUser />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/random-number" element={<RandomNumber />} />
        <Route path="/change-state" element={<ChangeState />} />
        <Route path="/change-theme" element={<ChangeTheme />} />
        <Route path="/tasks-list" element={<TasksList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
