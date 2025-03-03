import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/employees");

        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }

        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error.message);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (employeeId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/employee/${employeeId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== employeeId)
        );
      }

      console.log(`Employee with ID ${employeeId} deleted successfully`);
    } catch (error) {
      console.error("Error deleting employee:", error.message);
    }
  };

  const handleUpdate = (employeeId)=>{
    navigate(`/employee/${employeeId}`)
  }

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className="text-center">Employees</h1>

            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Department</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.department}</td>
                    <td>
                      <button className="btn btn-outline-danger m-1 p-auto"
                        onClick={()=>handleUpdate(employee.id)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => handleDelete(employee.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
