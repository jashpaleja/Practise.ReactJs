import logo from "./logo.svg";
import "./App.css";
import { Spinner } from "react-bootstrap";
// import { Routes, Route, Link, NavLink } from "react-router-dom";
import background from "./assets/onboarding-background-pattern/onboarding-background-pattern@3x.png";
import { Component } from "react";
// import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import { Redirect } from "react-router-dom";

class App extends Component {
  state = { time: false };
  componentDidMount() {
    setTimeout(() => this.setState({ time: true }), 3000);
  }
  render() {
    if (this.state.time) {
      return <LoginScreen />;
    } else {
      return (
        <div>
          <div
            style={{
              backgroundColor: "#7CBFC0",
              textAlign: "center",
              display: "block",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url(${background})`,
              paddingTop: "25%",
              paddingBottom: "25%",
            }}
          >
            <Spinner animation="border" variant="info" />
          </div>
        </div>
      );
    }
  }
}

export default App;
