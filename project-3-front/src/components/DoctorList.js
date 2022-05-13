import Doctors from "../pages/Doctors";
import DoctorRow from "./DoctorRow";
import "../styles/barebones.css";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:9292";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "/doctors")
      .then((r) => r.json())
      .then((doctors) => setDoctors(doctors));
  }, []);

  const doctorRow = doctors.map((doctor) => (
    <DoctorRow
      key={doctor.id}
      doctor={doctor}
      onDeleteDoctor={handleDeleteDoctor}
    />
  ));

  function handleDeleteDoctor(doctorToDelete) {
    const updatedDoctors = doctors.filter(
      (doctor) => doctor.id !== doctorToDelete.id
    );
    setDoctors(updatedDoctors);
  }
  return (
    <div className="list-container">
      <table className="u-full-width">
        <thead>
          <tr>
            <th scope="col">Last Name</th>
            <th scope="col">First Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{doctorRow}</tbody>
      </table>
    </div>
  );
}

export default DoctorList;
