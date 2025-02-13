import React, { useState } from 'react';
import { Container, Form, Button, Image } from "react-bootstrap";
import axios from "axios";

const Create = () => {
    const [newItem, setNewItem] = useState({
        name: "",
        description: "",
        photo: "",
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
        console.log("hello");
        const formData = new FormData();
        Object.entries(newItem).forEach(([key, value]) => {
            formData.append(key, value);
        });

        await axios.post("http://localhost:5000/addItem", formData)
            .then(res => console.log(res))
            .catch(err => console.log("Not added:", err));
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#2c3e50" }}> 
            <Container style={{ padding: "30px", maxWidth: "600px", background: "#f8f9fa", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>  
                <h2 className="text-center" style={{ marginBottom: "20px" }}>Create a Component</h2>
                <p className="text-center" style={{ fontSize: "14px", color: "#555" }}>
                    Here you can write to us about anything, leave a review, or report a problem with a photo.
                </p>
                
                <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                    <Form.Group className="mb-3" controlId="nameItem">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={newItem.name} name="name" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="photoItem">
                        <Form.Label>Photo</Form.Label>
                        <Form.Control type="file" name="photo" onChange={handlePhoto} accept=".jpeg , .jpg , .png"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="descriptionItem">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" value={newItem.description} rows={3} name="description" onChange={handleChange}/>
                    </Form.Group>

                    <Button type="submit" variant="primary" className="w-100">Create</Button>
                </Form>

                {uploadedImage && (
                    <>
                        <h4 className="text-center mt-4">Preview</h4>
                        <Image src={uploadedImage} alt='Uploaded' rounded className='img-fluid d-block mx-auto' style={{ marginTop: "10px", maxWidth: "100%", height: "auto" }}/>
                    </>
                )}
            </Container>
        </div>
    );
};

export default Create;




