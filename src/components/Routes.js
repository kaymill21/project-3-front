import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors";
import Patients from "../pages/Patients";
import CreateAppointment from "../pages/CreateAppointment";
import AppointmentDetails from "../pages/AppointmentDetails";

function Routes() {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/doctors" component={Doctors} />
          <Route path="/patients" component={Patients} />
          <Route path="/create-appointment" component={CreateAppointment} />
          <Route path="/appointment-details" component={AppointmentDetails} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
