import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "./UpdateUser.css";

function UpdateUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/employee/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch employee data");
        }
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/employee/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update employee");
      }

      const data = await response.json();
      console.log("User updated:", data);
      navigate("/");
    } catch (error) {
      console.error("Error updating user:", error.message);
    }
  };

  return (
    <div className="center-form">
      <h1>Update Employee Data</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Control
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formDepartment">
          <Form.Control
            type="text"
            name="department"
            placeholder="Enter department"
            value={formData.department}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button type="submit" variant="success" className="w-100 mt-3">
          Update
        </Button>
      </Form>
    </div>
  );
}

export default UpdateUser;
