import React from "react";
import { Card, Form, Row, Col, Container, FloatingLabel, Button, Image, Spinner, Toast} from "react-bootstrap";
import NavigationBar from "../../Navbar";
import { useEffect } from "react";
import { getPexelsImages, getAmenities } from "../../../redux/actionCreators";
import store from "../../../redux/store";
import { connect } from "react-redux";
import { useState } from "react";

const newProperty = {
    age: 0,
    bedrooms: 0,
    city: "",
    cp: 0,
    departments: 0,
    description: "",
    floor: 0,
    latitude: 0,
    longitude: 0,
    m2_construction: 0,
    name: "",
    neighborhood: "",
    num_bathrooms: 0,
    operation: "RENT",
    parking: 0,
    price: 0,
    property_type: "HOUSE",
    state: "",
    street: "",
    
}

const postProperty=(property)=>{
    let options = {
        method: 'POST',
        headers: new Headers({'Content-Type':'application/json'}),
        body: JSON.stringify(property)
    }, 
    req = new Request(`${process.env.REACT_APP_API_URL}/property`,options)
    return fetch(req)
}

const Notify=({bg, title,text, onClose})=>{
    return (
        <Toast onClose={onClose} className="d-inline-block m-1" bg={bg} delay={3000} autohide>
            <Toast.Header>
                
                <strong className="me-auto">{title}</strong>
                
            </Toast.Header>
            <Toast.Body className="text-white">
                {text}
            </Toast.Body>
        </Toast>
    )
}

const PropertyForm = ({amenities, images})=>{
    const [picturesSelected, setPictures] = useState({})
    const [amenitiesSelected, setAmenities] = useState({})
    const [property, setProperty] = useState(newProperty)
    const [loading, setLoading] = useState(false)
    const [notify, setNotify] = useState({
        show:false,
    })

    const resetForm=()=>{
        setPictures({})
        setAmenities({})
        setProperty(newProperty)
    }

    const [validated,setValidity] = useState(false)
    const handleSubmit=(e)=>{
        let form = e.currentTarget, validity=form.checkValidity()
        setValidity(validity)
        e.preventDefault()
        e.stopPropagation()
        if (validity){
            setLoading(true)
            let promise = postProperty({property,amenities:amenitiesSelected, images: picturesSelected})
            promise
                .then(res=>res.json())
                .then(response_data=>{
                    console.log(response_data)
                    resetForm()
                    setNotify({
                        show:true,
                        bg:'success',
                        title:'Completado',
                        text:'Propiedad guardada'
                    })
                })
                .catch(err=>{
                    console.log(err)
                    setNotify({
                        show:true,
                        bg:'danger',
                        title:'Error',
                        text: "En este momento no se tiene acceso al servidor."
                    })
                })
                .finally(()=>setLoading(false))
        }
    }

    const handleInput=(e)=>{
        const {name, value} = e.target
        setProperty({...property, [name]:value})
        
    }

    const handleImageCheck=(photo)=>{
        if (picturesSelected[photo.id]===undefined)
        picturesSelected[photo.id]=photo.src.small
        else  delete(picturesSelected[photo.id])
        setPictures(picturesSelected)
        
    }

    const handleAmenityCheck=(amenity)=>{
        if (amenitiesSelected[amenity.id]===undefined)
        amenitiesSelected[amenity.id]=true
        else  delete(amenitiesSelected[amenity.id])
        setAmenities(amenitiesSelected)
        console.log(amenitiesSelected)
    }

    
    
    useEffect(()=>{
        store.dispatch(getAmenities())
        store.dispatch(getPexelsImages())
    },[])
    return (
        <>
            <NavigationBar />
            
            <Container className="mt-4">
                <Card>
                {notify.show?
                    <Card.Body>
                        <Notify onClose={()=>{setNotify({...notify, show:false})}} bg={notify.bg} title={notify.title} text={notify.text}/>
                    </Card.Body>
                    :
                    <Card.Body>
                        <Card.Title>Nueva propiedad</Card.Title>
                        <Form  validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-2">
                                <Form.Group as={Col} sm={12} md={6} controlId="name">
                                    <FloatingLabel  label="Nombre de propiedad" className="mb-3">
                                        <Form.Control value={property.name} name="name" required type="text" onChange={handleInput} placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={12} md={6} controlId="desc-c">
                                    <FloatingLabel label="Descripción de propiedad" className="mb-3">
                                        <Form.Control value={property.description} required name="description" as="textarea"  onChange={handleInput} placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                
                                <Form.Group as={Col} sm={6} controlId="street">
                                    <FloatingLabel controlId="street" label="Calle y número" className="mb-3">
                                        <Form.Control value={property.street} name="street" required type="text"  onChange={handleInput} placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={6} controlId="neighborhood">
                                    <FloatingLabel label="Colonia" className="mb-3">
                                        <Form.Control value={property.neighborhood} name="neighborhood" required type="text"  onChange={handleInput} placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={6} controlId="city">
                                    <FloatingLabel  label="Ciudad" className="mb-3">
                                        <Form.Control value={property.city} name="city" required type="text"  onChange={handleInput} placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={6} controlId="state">
                                    <FloatingLabel  label="Estado" className="mb-3">
                                        <Form.Control value={property.state} name="state" required type="text"  onChange={handleInput} placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={6} controlId="operation">
                                    <FloatingLabel  label="Operacion" className="mb-3">
                                        <Form.Select  defaultValue={property.operation}  name="operation" required type="text" onChange={handleInput}>
                                            <option value="RENT">En renta</option>
                                            <option value="SALE">En venta</option>
                                            <option value="TRANSFER">Traspaso</option>
                                        </Form.Select>
                                        
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={6} controlId="property_type">
                                    <FloatingLabel  label="Tipo de propiedad" className="mb-3">
                                        
                                        <Form.Select defaultValue={property.property_type} name="property_type" required onChange={handleInput}>
                                            <option value="APARTAMENT">Apartamento</option>
                                            <option value="HOUSE">Casa</option>
                                            <option value="TERRAIN">Terreno</option>
                                            <option value="OFFICE">Oficina</option>
                                            <option value="LOCAL">Local</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={6} controlId="latitude">
                                    <FloatingLabel  label="&deg; Latitud" className="mb-3">
                                        <Form.Control value={property.latitude} name="latitude" required type="number"  onChange={handleInput} placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={6} controlId="longitude">
                                    <FloatingLabel  label="&deg; Longitud" className="mb-3">
                                        <Form.Control value={property.longitude} name="longitude" required type="number"  onChange={handleInput} placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="cp">
                                    <FloatingLabel label="C.P." className="mb-3">
                                        <Form.Control value={property.cp} name="cp" required type="number"  onChange={handleInput}  step={1} placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="price">
                                    <FloatingLabel  label="Precio" className="mb-3">
                                        <Form.Control value={property.price} required name="price" type="number"  onChange={handleInput} min={1} step={0.01}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="bedrooms">
                                    <FloatingLabel  label="Habitaciones" className="mb-3">
                                        <Form.Control value={property.bedrooms} required name="bedrooms" type="number"  onChange={handleInput} min={0}  step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="num_bathrooms">
                                    <FloatingLabel  label="Baños" className="mb-3">
                                        <Form.Control value={property.num_bathrooms} required name="num_bathrooms" type="number"  onChange={handleInput} min={0} step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="m2_construction">
                                    <FloatingLabel  label="Superficie &#13217;" className="mb-3">
                                        <Form.Control value={property.m2_construction} required name="m2_construction" type="number"  onChange={handleInput} min={1} step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="age">
                                    <FloatingLabel  label="Edad (años)" className="mb-3">
                                        <Form.Control value={property.age} required name="age" type="number"  onChange={handleInput} min={0}  step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="floor">
                                    <FloatingLabel  label="Pisos" className="mb-3">
                                        <Form.Control value={property.floor}required name="floor" type="number"  onChange={handleInput} min={0} step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="parking">
                                    <FloatingLabel  label="Estacionamientos" className="mb-3">
                                        <Form.Control value={property.parking} required name="parking" type="number"  onChange={handleInput} min={0} step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="departments">
                                    <FloatingLabel  label="Departamentos" className="mb-3">
                                        <Form.Control value={property.departments} required name="departments" type="number"  onChange={handleInput} step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                
                            </Row>
                            <Row className="mt-2 mb-4">
                                <Form.Label>Amenidades</Form.Label>
                                
                                {   amenities?
                                    amenities.map(amenity=>
                                        <Form.Group key={amenity.id} as={Col} xs={12} sm={6} md={3} controlId="amenities" >
                                            <Form.Check onChange={()=>handleAmenityCheck(amenity)} type="checkbox" id={amenity.id} label={amenity.name} />
                                        </Form.Group>
                                        ):
                                    <></>
                                }
                                
                            </Row>
                            <Row className="mb-2">
                                <Form.Label>Imágenes</Form.Label>
                                    {images? images.photos.map(photo=>(
                                        <Form.Group key={photo.id} as={Col} sm={6} md={4} lg={3} controlId="pictures" >
                                            <Form.Check type="checkbox" id={photo.id}
                                                onChange={()=>{handleImageCheck(photo)}}
                                                label={<Image src={photo.src.small} fluid="true"/>}
                                            />
                                            
                                        </Form.Group>
                                    )):<></>}
                            </Row>
                            {
                                loading?
                                    (<Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>)
                                    :
                                    (<Button type="submit">GUARDAR</Button>)
                            }
                            
                        </Form>
                    </Card.Body>
                }
                   
                </Card>
            </Container>
        </>
    )
}
const mapStateToProps = (state) => ({images:state.propertyReducer.images,amenities: state.propertyReducer.amenities})
export default connect(mapStateToProps,{})(PropertyForm)