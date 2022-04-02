import React from "react";
import { Card, Form, Row, Col, Container, FloatingLabel, Button, Image } from "react-bootstrap";
import NavigationBar from "../../Navbar";
import { useEffect } from "react";
import { getPexelsImages, getAmenities } from "../../../redux/actionCreators";
import store from "../../../redux/store";
import { connect } from "react-redux";
import { useState } from "react";
const PropertyForm = ({amenities, images})=>{
    const [picturesSelected, setPictures] = useState({})
    const [amenitySelected, setAmenities] = useState({})
    const [amenity, setAmenity] = useState({})

    const [validated,setValidity] = useState(false)
    const handleSubmit=(e)=>{
        let form = e.currentTarget
        setValidity(form.checkValidity())
        console.log(form.checkValidity(), amenity, amenitySelected, picturesSelected)
        e.preventDefault()
        e.stopPropagation()
    }

    const handleInput=(e)=>{
        const {name, value} = e.target
        setAmenity({...amenity, [name]:value})
        console.log(amenity,e)
    }

    const handleImageCheck=(photo)=>{
        if (picturesSelected[photo.id]===undefined)
        picturesSelected[photo.id]=photo
        else  delete(picturesSelected[photo.id])
        setPictures(picturesSelected)
        console.log(picturesSelected)
    }

    const handleAmenityCheck=(amenity)=>{
        if (amenitySelected[amenity.id]===undefined)
        amenitySelected[amenity.id]=amenity
        else  delete(amenitySelected[amenity.id])
        setAmenities(amenitySelected)
        console.log(amenitySelected)
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
                    <Card.Body>
                        <Card.Title>Nueva propiedad</Card.Title>
                        <Form  validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-2">
                                <Form.Group as={Col} sm={12} md={6} controlId="name">
                                    <FloatingLabel  label="Nombre de propiedad" className="mb-3">
                                        <Form.Control name="name" required type="text" onChange={handleInput} placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={12} md={6} controlId="desc-c">
                                    <FloatingLabel label="Descripción de propiedad" className="mb-3">
                                        <Form.Control required name="description" as="textarea"  onChange={handleInput} placeholder=""/>
                                        
                                    </FloatingLabel>
                                </Form.Group>
                                
                                <Form.Group as={Col} sm={6} controlId="street">
                                    <FloatingLabel controlId="street" label="Calle y número" className="mb-3">
                                        <Form.Control name="street" required type="text"  onChange={handleInput} placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={6} controlId="neighborhood">
                                    <FloatingLabel label="Colonia" className="mb-3">
                                        <Form.Control name="neighborhood" required type="text"  onChange={handleInput} placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={6} controlId="city">
                                    <FloatingLabel  label="Ciudad" className="mb-3">
                                        <Form.Control name="city" required type="text"  onChange={handleInput} placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={6} controlId="state">
                                    <FloatingLabel  label="Estado" className="mb-3">
                                        <Form.Control name="state" required type="text"  onChange={handleInput} placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={6} controlId="operation">
                                    <FloatingLabel  label="Operacion" className="mb-3">
                                        <Form.Control list="operations-list" name="operation" required type="text" onChange={handleInput} placeholder=""/>
                                        <datalist id="operations-list">
                                            <option value="RENT">En renta</option>
                                            <option value="SALE">En venta</option>
                                        </datalist>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={6} controlId="property_type">
                                    <FloatingLabel  label="Tipo de propiedad" className="mb-3">
                                        <Form.Control list="property_types-list" name="property_type" required type="text"  onChange={handleInput} placeholder=""/>
                                        <datalist id="property_types-list">
                                            <option value="APARTMENT">Apartamento</option>
                                            <option value="HOUSE">Casa</option>
                                        </datalist>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="cp">
                                    <FloatingLabel label="C.P." className="mb-3">
                                        <Form.Control name="cp" required type="number"  onChange={handleInput} min={1} step={1} placeholder=""/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="price">
                                    <FloatingLabel  label="Precio" className="mb-3">
                                        <Form.Control required name="price" type="number"  onChange={handleInput} min={1} step={0.01}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="bedrooms">
                                    <FloatingLabel  label="Habitaciones" className="mb-3">
                                        <Form.Control required name="bedrooms" type="number"  onChange={handleInput} min={0} step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="num_bathrooms">
                                    <FloatingLabel  label="Baños" className="mb-3">
                                        <Form.Control required name="num_bathrooms" type="number"  onChange={handleInput} min={0} step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="m2_construction">
                                    <FloatingLabel  label="Superficie &#13217;" className="mb-3">
                                        <Form.Control required name="m2_construction" type="number"  onChange={handleInput} min={1} step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="age">
                                    <FloatingLabel  label="Edad (años)" className="mb-3">
                                        <Form.Control required name="age" type="number"  onChange={handleInput} min={1} step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="floor">
                                    <FloatingLabel  label="Pisos" className="mb-3">
                                        <Form.Control defaultValue={1} required name="floor" type="number"  onChange={handleInput} min={1} step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="parking">
                                    <FloatingLabel  label="Estacionamientos" className="mb-3">
                                        <Form.Control required defaultValue={0} name="parking" type="number"  onChange={handleInput} min={0} step={1}/>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} sm={4} controlId="departments">
                                    <FloatingLabel  label="Departamentos" className="mb-3">
                                        <Form.Control required name="departments" type="number" defaultValue={0}  onChange={handleInput} step={1}/>
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
                            <Button type="submit">GUARDAR</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
const mapStateToProps = (state) => ({images:state.propertyReducer.images,amenities: state.propertyReducer.amenities})
export default connect(mapStateToProps,{})(PropertyForm)