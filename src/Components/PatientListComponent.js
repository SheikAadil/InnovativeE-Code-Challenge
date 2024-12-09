import React from "react";
import { Table } from "react-bootstrap";

const PatientListComponent = ({ appointments }) => {
  return (
    <div>
      <h2>Patient List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Appointment No</th>
            <th>Date</th>
            <th>Time</th>
            <th>Patient Name</th>
            <th>Mobile No</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.appointmentNo}>
              <td>{appointment.appointmentNo}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.name}</td>
              <td>{appointment.mobile}</td>
              <td>{appointment.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PatientListComponent;
