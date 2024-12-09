import React from "react";
import { Form, Button } from "react-bootstrap";

const SettingsFormComponent = ({ settings, setSettings }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  return (
    <div className="mb-5">
      <h2>Set Appointment Timings</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Starting Time</Form.Label>
          <Form.Control
            type="time"
            name="startTime"
            value={settings.startTime}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Duration Per Appointment (Minutes)</Form.Label>
          <Form.Control
            type="number"
            name="duration"
            value={settings.duration}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Ending Time</Form.Label>
          <Form.Control
            type="time"
            name="endTime"
            value={settings.endTime}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default SettingsFormComponent;
