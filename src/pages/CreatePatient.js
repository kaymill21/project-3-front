import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";


const BASE_URL = "http://localhost:9292";

const FormDiv = styled.div`
  width: 90%;
  margin: auto;
  background: rgb(240, 240, 240);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CreatePatient() {
  const history = useHistory();

  const [updatedPatient, setUpdatedPatient] = useState([]);
  const [patient_firstname, setPatientFirstName] = useState("");
  const [patient_lastname, setPatientLastName] = useState("");
  const [patient_phone, setPatientPhone] = useState("");
  const [patient_email, setPatientEmail] = useState("");
  const [patient_address, setPatientAddress] = useState("");
  const [patient_city, setPatientCity] = useState("");
  const [patient_state, setPatientState] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(BASE_URL + "/patients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        patient_firstname: patient_firstname,
        patient_lastname: patient_lastname,
        patient_phone: patient_phone,
        patient_email: patient_email,
        patient_address: patient_address,
        patient_city: patient_city,
        patient_state: patient_state,
      }),
    })
      .then((r) => r.json())
      .then(setUpdatedPatient);

    console.log("Created a patient");
    history.push("/patients");

  }

  function handlePatientFirstNameChange(e) {
    setPatientFirstName(e.target.value);
  }

  function handlePatientLastNameChange(e) {
    setPatientLastName(e.target.value);
  }

  function handlePatientPhoneChange(e) {
    setPatientPhone(e.target.value);
  }

  function handlePatientEmailChange(e) {
    setPatientEmail(e.target.value);
  }

  function handlePatientAddressChange(e) {
    setPatientAddress(e.target.value);
  }
  function handlePatientCityChange(e) {
    setPatientCity(e.target.value);
  }
  function handlePatientStateChange(e) {
    setPatientState(e.target.value);
  }

  return (
    <div>
      <h3 className="pad-left">Create A Patient</h3>
      <FormDiv>
        <form onSubmit={handleSubmit}>
          <div className="grid-container halves">
            <div>
              <label htmlFor="appdoc">First Name</label>
              <input
                id="appdoc"
                type="text"
                onChange={handlePatientFirstNameChange}
                value={patient_firstname}
                placeholder="First Name"
              />
            </div>

            <div>
              <label htmlFor="appdoc">Last Name</label>
              <input
                id="appdoc"
                type="text"
                onChange={handlePatientLastNameChange}
                value={patient_lastname}
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="grid-container halves">
            <div>
              <label htmlFor="appdoc">Phone</label>
              <input
                id="appdoc"
                type="text"
                onChange={handlePatientPhoneChange}
                value={patient_phone}
                placeholder="xxx-xxx-xxxx"
              />
            </div>

            <div>
              <label htmlFor="appdoc">Email</label>
              <input
                id="appdoc"
                type="text"
                onChange={handlePatientEmailChange}
                value={patient_email}
                placeholder="Email"
              />
            </div>
          </div>

          <div className="grid-container thirds">
            <div>
              <label htmlFor="appdoc">Address</label>
              <input
                id="appdoc"
                type="text"
                onChange={handlePatientAddressChange}
                value={patient_address}
                placeholder="Address"
                required
              />
            </div>

            <div>
              <label htmlFor="appdoc">City</label>
              <input
                id="appdoc"
                type="text"
                onChange={handlePatientCityChange}
                value={patient_city}
                placeholder="city"
                required
              />
            </div>

            <div>
              <label htmlFor="appdoc">State</label>
              <input
                id="appdoc"
                type="text"
                onChange={handlePatientStateChange}
                value={patient_state}
                placeholder="State"
                required
              />
            </div>
          </div>

          <div className="grid-container full">
            <button type="submit" className="button-primary">
              Submit
            </button>
          </div>
        </form>
      </FormDiv>
    </div>
  );
}

export default CreatePatient;
