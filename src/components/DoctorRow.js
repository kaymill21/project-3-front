import DoctorList from "./DoctorList";

const BASE_URL = "http://localhost:9292";

function DoctorRow({ doctor, onDeleteDoctor }) {
  function handleDeleteDoctor() {
    fetch(BASE_URL + `/doctors/${doctor.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deleteDoctor) => onDeleteDoctor(deleteDoctor));
  }

  return (
    <tr>
      <td>{doctor.doctor_lastname}</td>
      <td>{doctor.doctor_firstname}</td>
      <td>{doctor.doctor_phone}</td>
      <td>{doctor.doctor_email}</td>

      <td>
        <button type="button" className="button-x" onClick={handleDeleteDoctor}>
          X
        </button>
      </td>
    </tr>
  );
}

export default DoctorRow;
