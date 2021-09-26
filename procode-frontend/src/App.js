import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import bootstrap from "bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import { Faculty } from "./views/Faculty/Faculty";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/team" component={null} />
          <Route exact path="/faculty" component={Faculty} />
          <Route exact path="*" component={null} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
