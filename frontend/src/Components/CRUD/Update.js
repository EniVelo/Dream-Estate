import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom';
import { Container,Form, Button, Image } from 'react-bootstrap';

const Update = () => {
    const {id}=useParams(); // Per te marre elementin me id perkatese
    const nav= useNavigate(); // Metode navigimi (nga njeri komponent tek tjetri)
    const [item, setItem]= useState({
        name: '', 
        description: '',
         photo: '',
    });
    const [uploadedImage, setUploadedImage] = useState(null);
    useEffect(()=>{
        const getInfo=async()=>{
        await axios.get ("http://localhost:5000/readItem/"+id) // Therritja e app => Leximi i te dhenave te elementit
        .then(res =>{
            
                const { name, description, photo } = res.data; // Marrja e informacionit
                setItem((prevItem) => ({ ...prevItem,
                    name: name || '', description: description || '', photo: photo || '',
                    }));
           
        }).catch(err=>console.log(err))
        };
        getInfo()
            },[id])
            const handleChange = (e) => { const { name, value } = e.target; setItem((prevItem) => ({  // Marrja e informacionir nga input-et
                ...prevItem,
                [name]: value, }));
                };

                const handlePhoto =(e) =>{   // Ndryshimi i imazhit
                    setItem({ ...item, photo: e.target.files[0] })
                    setUploadedImage(URL.createObjectURL(e.target.files[0]));
                }

                const handleSubmit=async(e)=>{   // Funksioni i update
                    e.preventDefault()
                    const formData = new FormData(); Object.entries(item).forEach(([key, value]) => {   // Marrja e informacioneve te reja
                        if (key !== 'photo') { formData.append(key, value);
                        } });
                        if (item.photo instanceof File) { formData.append('photo', item.photo);
                        }
                        await axios.patch ("http://localhost:5000/updateItem/"+id, formData) // Therritja e apit - update
                        .then(res =>{
                            setItem((prevItem =>({...prevItem,...res.data})));
                            nav('/read');  // Kalimi tek home pas update
                            
                        }).catch(err=>console.log(err))
                         }
  return (
    <Container>
    <h1>CUpdate Component</h1>
    <Form onSubmit={handleSubmit} encType='multipart/form-data'>
      <Form.Group className="mb-3" controlId="nameItem">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={item.name} name="name" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="photoItem">
        <Form.Label>Foto</Form.Label>
        <Form.Control type="file" name="photo" onChange={handlePhoto} accept=".jpeg , .jpg , .png"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="descriptionItem">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" value={item.description} rows={3} name="description" onChange={handleChange}/>
      </Form.Group>

      <Button type="submit" variant="warning">"Uploaded"</Button>
    </Form>

   
<h1>Preview Image</h1> 
 {uploadedImage && (
<Image src={uploadedImage} alt='Uploaded' rounded className='img-fluid'/>
)} 
  </Container>
  )
}

export default Update