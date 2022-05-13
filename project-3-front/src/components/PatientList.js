import PatientRow from "./PatientRow";
import { useEffect, useState } from "react";
import "../styles/barebones.css";

const BASE_URL = "http://localhost:9292/";

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "patients")
      .then((r) => r.json())
      .then((patients) => setPatients(patients));
  }, []);

  const patientRow = patients.map((patient) => (
    <PatientRow
      key={patient.id}
      patient={patient}
      onDeletePatient={handleDeletePatient}
    />
  ));

  function handleDeletePatient(patientToDelete) {
    const updatedPatients = patients.filter(
      (patient) => patient.id !== patientToDelete.id
    );
    setPatients(updatedPatients);
  }

  return (
    <div>
      <table className="u-full-width">
        <thead>
          <tr>
            <th scope="col">Last Name</th>
            <th scope="col">First Name</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{patientRow}</tbody>
      </table>
    </div>
  );
}

export default PatientList;
