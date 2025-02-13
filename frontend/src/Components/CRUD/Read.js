import React, { useState, useEffect } from 'react';
import { Container, Table, Image, Button } from 'react-bootstrap';
import axios from 'axios';

const Read = () => {
  const [rezervime, setRezervime] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/readItems');
        console.log(res);
        setRezervime(res.data);
      } catch (err) {
        console.log('Data not read: ' + err);
      }
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deleteItem/${id}`);
      console.log("Item deleted successfully");
      setRezervime(rezervime.filter(item => item._id !== id));
    } catch (err) {
      console.log('Data not deleted: ' + err);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", padding: "20px", backgroundColor: "#2c3e50" }}>
      <Container style={{ padding: "20px", maxWidth: "900px", background: "#f8f9fa", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
        <h2 className="text-center mb-4">List of Reservations</h2>

        <Table striped bordered hover responsive className="text-center">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rezervime.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <Image
                    src={`http://localhost:5000/images/${item.photo}`}
                    alt="Uploaded"
                    rounded
                    className="img-fluid"
                    style={{ maxWidth: "100px", height: "auto" }}
                  />
                </td>
                <td>
                  <Button variant="danger" className="m-1" onClick={() => handleDelete(item._id)}>Delete</Button>
                  <Button variant="primary" className="m-1" href={`/ReadOne/${item._id}`}>Read</Button>
                  <Button variant="warning" className="m-1" href={`/Update/${item._id}`}>Update</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Read;



