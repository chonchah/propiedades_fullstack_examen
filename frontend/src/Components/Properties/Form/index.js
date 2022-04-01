import React from "react";
import { Card, Form, Row, Col, Container, FloatingLabel, Button, Image } from "react-bootstrap";
import NavigationBar from "../../Navbar";
import { useEffect } from "react";
import { getPexelsImages } from "../../../redux/actionCreators";
import store from "../../../redux/store";
import { connect } from "react-redux";
import { useState } from "react";
const PropertyForm = (images)=>{
    const [picturesSelected, setPictures] = useState({})
    const [validated,setValidity] = useState(false)
    const handleSubmit=(e)=>{
        let form = e.currentTarget
        e.preventDefault()
        e.stopPropagation()
        setValidity(form.checkValidity())
        console.log(form.checkValidity())
    }

    const handleImageCheck=(photo)=>{
        if (picturesSelected[photo.id]===undefined)
        picturesSelected[photo.id]=photo
        else  delete(picturesSelected[photo.id])
        setPictures(picturesSelected)
        console.log(picturesSelected)
    }
    useEffect(()=>{
        store.dispatch(getPexelsImages())
    },[])
    return (
        <>
            <NavigationBar />
            
            <Container className="mt-4">
                <Card>
                    <Card.Body>
                        <Card.Title>Nueva propiedad</Card.Title>
                        
                        <Form validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-2">
                                <Form.Group as={Col} sm={12} md={6} controlId="name">
                                    <FloatingLabel controlId="name" label="Nombre de propiedad" className="mb-3">
                                        <Form.Control name="name" required type="text" placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={12} md={6} controlId="desc">
                                    <FloatingLabel controlId="desc" label="Descripción de propiedad" className="mb-3">
                                        <Form.Control required name="description" as="textarea" placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={6} controlId="operation">
                                    <FloatingLabel controlId="operation" label="Operacion" className="mb-3">
                                        <Form.Control list="operations-list" name="operation" required type="text" placeholder=""/>
                                        <datalist id="operations-list">
                                            <option value="RENT">En renta</option>
                                            <option value="SALE">En venta</option>
                                        </datalist>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={6} controlId="property_type">
                                    <FloatingLabel controlId="property_type" label="Tipo de propiedad" className="mb-3">
                                        <Form.Control list="property_types-list" name="property_type" required type="text" placeholder=""/>
                                        <datalist id="property_types-list">
                                            <option value="APARTMENT">Apartamento</option>
                                            <option value="HOUSE">Casa</option>
                                        </datalist>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={6} controlId="street">
                                    <FloatingLabel controlId="street" label="Calle y número" className="mb-3">
                                        <Form.Control name="street" required type="text" placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={6} controlId="neighborhood">
                                    <FloatingLabel controlId="neighborhood" label="Colonia" className="mb-3">
                                        <Form.Control name="neighborhood" required type="text" placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={6} controlId="city">
                                    <FloatingLabel controlId="city" label="Ciudad" className="mb-3">
                                        <Form.Control name="city" required type="text" placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={6} controlId="state">
                                    <FloatingLabel controlId="state" label="Estado" className="mb-3">
                                        <Form.Control name="state" required type="text" placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="cp">
                                    <FloatingLabel controlId="cp" label="C.P." className="mb-3">
                                        <Form.Control name="cp" required type="text" placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="price">
                                    <FloatingLabel controlId="price" label="Precio" className="mb-3">
                                        <Form.Control required name="price" type="number" min={1} step={0.01}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="bedrooms">
                                    <FloatingLabel controlId="bedrooms" label="Habitaciones" className="mb-3">
                                        <Form.Control required name="bedrooms" type="number" min={0} step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="num_bathrooms">
                                    <FloatingLabel controlId="num_bathrooms" label="Baños" className="mb-3">
                                        <Form.Control required name="num_bathrooms" type="number" min={0} step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="m2_construction">
                                    <FloatingLabel controlId="m2_construction" label="Superficie &#13217;" className="mb-3">
                                        <Form.Control required name="m2_construction" type="number" min={1} step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="age">
                                    <FloatingLabel controlId="age" label="Edad (años)" className="mb-3">
                                        <Form.Control required name="age" type="number" min={1} step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="floor">
                                    <FloatingLabel controlId="floor" label="Pisos" className="mb-3">
                                        <Form.Control defaultValue={1} required name="floor" type="number" min={1} step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="parking">
                                    <FloatingLabel controlId="parking" label="Estacionamientos" className="mb-3">
                                        <Form.Control required defaultValue={0} name="parking" type="number" min={1} step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="departments">
                                    <FloatingLabel controlId="departments" label="Departamentos" className="mb-3">
                                        <Form.Control required name="departments" type="number" defaultValue={0} min={1} step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                
                            </Row>
                            <Row className="mb-2">
                                    {images.photos? images.photos.map(photo=>(
                                        <Form.Group key={photo.id} as={Col} sm={12} md={4} lg={3} >
                                            <Form.Check type="checkbox" id={photo.id}
                                                onChange={()=>{handleImageCheck(photo)}}
                                                label={<Image src={photo.src.small} fluid="true"/>}
                                            />
                                            
                                        </Form.Group>
                                    )):<></>}
                            </Row>
                            <Button type="submit">GUARDAR</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
const mapStateToProps = (state) => ({...state.propertyReducer.images})
export default connect(mapStateToProps,{})(PropertyForm)