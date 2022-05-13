import PatientList from "./PatientList";
const BASE_URL = "http://localhost:9292";

function PatientRow({ patient, onDeletePatient }) {
  function handleDeletePatient() {
    fetch(BASE_URL + `/patients/${patient.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletePatient) => onDeletePatient(deletePatient));
  }

  return (
    <tr>
      <td>{patient.patient_lastname}</td>
      <td>{patient.patient_firstname}</td>
      <td>{patient.patient_address}</td>
      <td>{patient.patient_city}</td>
      <td>{patient.patient_state}</td>
      <td>{patient.patient_phone}</td>
      <td>{patient.patient_email}</td>
      <td>
        <button
          type="button"
          className="button-x"
          onClick={handleDeletePatient}
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default PatientRow;
