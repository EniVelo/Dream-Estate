import React, { useState } from 'react';
import { Container, Form, Button, Image } from "react-bootstrap";
import axios from "axios";

const Create = () => {
    const [newItem, setNewItem] = useState({
        title:"",
        description: "",
        photo: "",
        squareMeters: "",  
        price: "",
        bedroom:"",
    });
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleChange = (e) => {
        setNewItem({ ...newItem, [e.target.name]: e.target.value });
    };

    const handlePhoto = (e) => {
        setNewItem({ ...newItem, photo: e.target.files[0] });
        setUploadedImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(newItem).forEach(([key, value]) => {
            formData.append(key, value);
        });

        await axios.post("http://localhost:5000/addItem", formData)
            .then(res => console.log(res))
            .catch(err => console.log("Not added:", err));
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#2c3e50", paddingTop: "100px", paddingBottom: "100px" }}>
            <Container style={{ padding: "30px", maxWidth: "600px", background: "#f8f9fa", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <h2 className="text-center" style={{ marginBottom: "20px" }}>Create a Component</h2>
                <p className="text-center" style={{ fontSize: "14px", color: "#555" }}>
                    Here you can write to us about anything, leave a review, or report a problem with a photo.
                </p>

                <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                    <Form.Group className="mb-3" controlId="nameItem">
                        <Form.Label>Property</Form.Label>
                        <Form.Control
                            type="text"
                            value={newItem.title}
                            name="title"  
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="photoItem">
                        <Form.Label>Photo</Form.Label>
                        <Form.Control
                            type="file"
                            name="photo"
                            onChange={handlePhoto}
                            accept=".jpeg,.jpg,.png"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="priceItem">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            value={newItem.price}
                            name="price"
                            onChange={handleChange}
                            min="0"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="squareMetersItem">
                        <Form.Label>Square Meters</Form.Label>
                        <Form.Control
                            type="number"
                            value={newItem.squareMeters}  
                            name="squareMeters"
                            onChange={handleChange}
                            min="0"
                        />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            value={newItem.description}  
                            name="description"
                            onChange={handleChange}
                            min="0"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="bedroom">
                        <Form.Label>Bedroom</Form.Label>
                        <Form.Control
                            type="number"
                            value={newItem.bedroom}  
                            name="bedroom"
                            onChange={handleChange}
                            min="0"
                        />
                    </Form.Group>

                    <Button type="submit" variant="primary" className="w-100">Create</Button>
                </Form>

                {uploadedImage && (
                    <>
                        <h4 className="text-center mt-4">Preview</h4>
                        <Image
                            src={uploadedImage}
                            alt='Uploaded'
                            rounded
                            className='img-fluid d-block mx-auto'
                            style={{ marginTop: "10px", maxWidth: "100%", height: "auto" }}
                        />
                    </>
                )}
            </Container>
        </div>
    );
};

export default Create;

