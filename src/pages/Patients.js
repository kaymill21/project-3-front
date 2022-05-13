import { useEffect, useState } from "react";
import PatientList from "../components/PatientList";
import { useHistory } from "react-router-dom";

// const BASE_URL = "http://localhost:9292/";

function Patients() {
  const history = useHistory();

  // const [patients, setPatients] = useState([]);

  // useEffect(() => {
  //   fetch(BASE_URL + "patients")
  //     .then((r) => r.json())
  //     .then((patients) => setPatients(patients));
  // }, []);

  function handleCreatePatientButton(e) {
    history.push("/create-patient");
  }

  return (
    <div className="list-container">
      <h3>Current Patients</h3>

      <PatientList />
      <div className="container">
        <div className="center">
          <button
            type="button"
            className="button-primary"
            onClick={handleCreatePatientButton}
          >
            Create a Patient
          </button>
        </div>
      </div>
    </div>
  );
}

export default Patients;
