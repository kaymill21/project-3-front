import Home from "../pages/Home";
import AppointmentRow from "./AppointmentRow";
import AppointmentDetails from "../pages/AppointmentDetails";
import { useEffect, useState } from "react";
import "../styles/barebones.css";
import { useHistory, Route, useParams } from "react-router-dom";

const BASE_URL = "http://localhost:9292/";

function AppointmentList() {
  const history = useHistory();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "appointments")
      .then((r) => r.json())
      .then((appointments) => setAppointments(appointments));
  }, []);

  const appointmentRow = appointments.map((appointment) => (
    <AppointmentRow
      key={appointment.id}
      appointment={appointment}
      onAppointmentDetails={handleAppointmentDetails}
      onDeleteAppointment={handleDeleteAppointment}
    />
  ));

  function handleDeleteAppointment(appointmentToDelete) {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== appointmentToDelete.id
    );
    setAppointments(updatedAppointments);
  }

  function handleAppointmentDetails(appointment) {
    history.push(`/appointments/${appointment.id}`)
  }

  return (
    <div>
      <table className="u-full-width">
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Date</th>
            <th scope="col">Duration</th>
            <th scope="col">Doctor</th>
            <th scope="col">Patient</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{appointmentRow}</tbody>
      </table>
    </div>
  );
}

export default AppointmentList;
