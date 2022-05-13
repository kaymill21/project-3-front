// import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors";
import Patients from "../pages/Patients";
import AppointmentDetails from "../pages/AppointmentDetails";
import CreateAppointment from "../pages/CreateAppointment";
import UpdateAppointment from "../pages/UpdateAppointment";
import UpdateDoctor from "../pages/UpdateDoctor";
import UpdatePatient from "../pages/UpdatePatient";
import CreateDoctor from "../pages/CreateDoctor";
import CreatePatient from "../pages/CreatePatient";
import "../styles/barebones.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/doctors">
          <Doctors />
        </Route>
        <Route exact path="/patients">
          <Patients />
        </Route>
        <Route path="/appointments/:id">
          <AppointmentDetails />
        </Route>
        <Route path="/appointment/update/:id">
          <UpdateAppointment />
        </Route>
        <Route path="/doctor/update/:id">
          <UpdateDoctor />
        </Route>
        <Route path="/patient/update/:id">
          <UpdatePatient />
        </Route>
        <Route path="/create-appointment">
          <CreateAppointment />
        </Route>
        <Route path="/create-doctor">
          <CreateDoctor />
        </Route>
        <Route path="/create-patient">
          <CreatePatient />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
