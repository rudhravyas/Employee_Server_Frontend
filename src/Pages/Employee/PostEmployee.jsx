import React, { useState } from "react";
import { Form } from "react-bootstrap"; 
import Button from "react-bootstrap/Button";
import './PostEmployee.css';
import { useNavigate } from "react-router-dom";

function PostEmployee() {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    phone: "",
    department: "",
  });

  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:8080/api/employee",{
            method: "post",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(formData)

        })

        const data = await response.json();
        console.log("employee created" , data)
        navigate("/");
    } catch (error) {
        console.log("Error creating employee " , error.message)
    }
  }

  return (
    <div className="center-form">
      <h1>Post New Employee</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Control
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Control
            type="text"
            name="department"
            placeholder="Enter department"
            value={formData.department}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button type="submit" variant="success" className="w-100">
            Post Employee
        </Button>
      </Form>
    </div>
  );
}

export default PostEmployee;