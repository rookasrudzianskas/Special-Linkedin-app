import './App.css';
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
        <Login />
    </div>
  );
}

export default App;
