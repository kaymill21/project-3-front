import AppointmentList from "./AppointmentList";
import AppointmentDetails from "../pages/AppointmentDetails";

const BASE_URL = "http://localhost:9292";

function AppointmentRow({
  appointment,
  onDeleteAppointment,
  onAppointmentDetails,
}) {
  function handleAppointmentDetails() {
    fetch(BASE_URL + `/appointments/${appointment.id}`, {
      method: "GET",
    })
      .then((r) => r.json())
      .then((appointment) => onAppointmentDetails(appointment));
  }

  function handleDeleteAppointment() {
    fetch(BASE_URL + `/appointments/${appointment.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deleteAppointment) => onDeleteAppointment(deleteAppointment));
  }

  return (
    <tr>
      <td>
        {appointment.appointment_type === null
          ? ""
          : appointment.appointment_type}
      </td>

      <td>
        {appointment.appointment_date === null ||
        appointment.appointment_date === undefined
          ? ""
          : appointment.appointment_date.toString().split("T")[0]}
      </td>

      <td>
        {appointment.appointment_duration === null
          ? ""
          : appointment.appointment_duration}{" "}
        minutes
      </td>

      <td>
        {appointment.appointment_doctor === null
          ? ""
          : appointment.appointment_doctor}
      </td>
      <td>
        {appointment.appointment_patient === null
          ? ""
          : appointment.appointment_patient}
      </td>

      <td>
        <button
          type="button"
          className="button-primary"
          onClick={handleAppointmentDetails}
        >
          Details
        </button>
      </td>
      <td>
        <button
          type="button"
          className="button-x"
          onClick={handleDeleteAppointment}
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default AppointmentRow;
