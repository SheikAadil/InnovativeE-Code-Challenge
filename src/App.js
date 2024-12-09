import React, { useState } from "react";
import AppointmentFormComponent from "./Components/AppointmentFormComponent";
import SettingsFormComponent from "./Components/SettingsFormComponent";
import PatientListComponent from "./Components/PatientListComponent";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [appointments, setAppointments] = useState([]);
  const [settings, setSettings] = useState({
    startTime: "09:00",
    endTime: "17:00",
    duration: 30,
  });

  return (
    <div>
      <h1 className="text-center mt-4">OPD Appointment System</h1>
      <div className="container mt-4">
        <SettingsFormComponent settings={settings} setSettings={setSettings} />
        <AppointmentFormComponent
          appointments={appointments}
          setAppointments={setAppointments}
          settings={settings}
        />
        <PatientListComponent appointments={appointments} />
      </div>
    </div>
  );
};

export default App;
