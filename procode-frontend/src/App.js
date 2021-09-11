import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/team" component={null} />
          <Route exact path="*" component={null} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
