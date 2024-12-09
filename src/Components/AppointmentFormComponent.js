import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const AppointmentFormComponent = ({ appointments, setAppointments, settings }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    email: "",
    mobile: "",
  });
  const [confirmation, setConfirmation] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointmentNo = appointments.length + 1;
    const startTime = new Date(`${formData.date}T${settings.startTime}`);
    const appointmentTime = new Date(
      startTime.getTime() + settings.duration * appointments.length * 60000
    );

    const appointment = {
      appointmentNo,
      ...formData,
      time: appointmentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setAppointments([...appointments, appointment]);
    setConfirmation(appointment);
    setFormData({ name: "", date: "", email: "", mobile: "" });
  };

  return (
    <div className="mb-5">
      <h2>Book an Appointment</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Patient Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mobile No</Form.Label>
          <Form.Control
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Book Appointment
        </Button>
      </Form>

      {confirmation && (
        <Modal show onHide={() => setConfirmation(null)}>
          <Modal.Header closeButton>
            <Modal.Title>Appointment Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Thank you, {confirmation.name}!</p>
            <p>Appointment No: {confirmation.appointmentNo}</p>
            <p>Date: {confirmation.date}</p>
            <p>Time: {confirmation.time}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setConfirmation(null)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default AppointmentFormComponent;
