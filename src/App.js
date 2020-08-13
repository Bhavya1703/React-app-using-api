import React from "react";
import "./App.css";
// import axios from "axios";
import Nav from "./Components/navbar/Navbar";
import Weather from "./Components/weather/Weather";
import Covid from "./Components/covid/Covid";
import { Route, Switch } from "react-router-dom";
import GoogleMapReact from "google-map-react";

const Home = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCVUJfW6DgL5ZSJYxbq5dN-NTItRmKyEMo" }}
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        defaultZoom={4}
      ></GoogleMapReact>
    </div>
  );
};
function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/covid" component={Covid} />
        <Route path="/weather" component={Weather} />
      </Switch>
    </div>
  );
}

export default App;
