import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import { useHistory } from "react-router-dom";

function Home() {
  const [isDetails] = useState(false);
  const history = useHistory();

  function handleCreateAppointmentButton() {
    history.push("/create-appointment");
  }

  return (
    <div className="list-container">
      <h3>Appointments</h3>

      <AppointmentList />
      <div className="container">
        <div className="center">
          <button
            type="button"
            className="button-primary"
            onClick={handleCreateAppointmentButton}
          >
            Create an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
