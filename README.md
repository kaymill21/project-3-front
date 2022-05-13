# Doctor's appointment


## As a user(the doctors' assistant) I should be able to:

- See all the appointments I have on the main page
  - See the name of the patient, location of the appointment, date and start time, and the **Details** button.
    - When clicking the "Details", I should be able to see more details for the appointment.
      - See the Patient's Name (and Phone, Email, Address), Doctor's Name (and Phone, email), Location, Appointment Date, Appointment Reason, Appointment Duration
  - See only 10 appointments per page and a page navigation button on the bottom right.
- See list of profiles for doctors and patients in a separate page.
- See the "Create Appointment" button on the bottom center, beneath the appointment list
  - Create Appointment by clicking the button navigating to Create Appointment page.
    - Fill in the forms with relevant info.
    - Click Submit button to save.
    - See the updated appointment list on the main page.


## Directory:

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── wireframes
│       ├── AppointmentDetails.png
│       ├── CreateAppointmentForm.png
│       ├── MainPage.png
│       ├── appointment_detail_list.png
│       ├── create_appointment_form.png
│       ├── doctor_profile_list.png
│       ├── main_page.png
│       └── patient_profile_list.png
└── src
    ├── components
    │   ├── App.js
    │   ├── AppointmentList.js
    │   ├── AppointmentRow.js
    │   ├── DoctorList.js
    │   ├── DoctorRow.js
    │   ├── Logo.js
    │   ├── NavBar.js
    │   ├── PatientList.js
    │   ├── PatientRow.js
    │   ├── Routes.js
    │   └── logo.png
    ├── index.css
    ├── index.js
    ├── pages
    │   ├── AppointmentDetails.js
    │   ├── CreateAppointment.js
    │   ├── CreateDoctor.js
    │   ├── CreatePatient.js
    │   ├── Doctors.js
    │   ├── Home.js
    │   ├── Patients.js
    │   ├── UpdateAppointment.js
    │   ├── UpdateDoctor.js
    │   └── UpdatePatient.js
    └── styles
        ├── barebones.css
        ├── normalize.css
        └── skeleton-legacy.css

6 directories, 43 files
```

## Wireframe

#### Main Page

![Main Page](./public/wireframes/main_page.png)

#### Appointment Detail Page

![Details Page](./public/wireframes/appointment_detail_list.png)

#### Doctor Profile Page

![Doctor Page](./public/wireframes/doctor_profile_list.png)

#### Patient Profile Page

![Patient Page](./public/wireframes/patient_profile_list.png)

#### Create Appointment Page

![Create Appointment Page](./public/wireframes/create_appointment_form.png)

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

### `npm run eject`


