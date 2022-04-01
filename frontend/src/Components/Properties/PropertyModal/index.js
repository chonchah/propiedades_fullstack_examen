import React from "react"
import { useState } from "react"
import { Button, Modal, Badge, Card, Carousel, CarouselItem } from "react-bootstrap"
import Icon from '@mdi/react'
import { mdiBed, mdiToilet, mdiRulerSquare, mdiParking, mdiHomeCity } from '@mdi/js'
const PropertyModal = ({ property, handleClose }) => {
    const [show] = useState(property ? true : false)

    return (
        <>
            <Modal  show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{property.name} <Badge bg="primary">{property.operation} ${property.price}</Badge></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Card>
                        <Card.Body>
                            <Card.Title>Descripción</Card.Title>
                            <Card.Text>{property.description}  </Card.Text>
                            <Card.Text>
                                <Badge className="mx-1" bg="light" text="dark">
                                    <span >
                                        <Icon className="m-2" title="User Profile" size={1} path={mdiBed}></Icon>
                                        {property.bedrooms} recámaras
                                    </span>
                                </Badge>
                                <Badge className="mx-1" bg="light" text="dark">
                                    <span >
                                        <Icon className="m-2" title="User Profile" size={1} path={mdiToilet}></Icon>
                                        {property.num_bathrooms} baños
                                    </span>
                                </Badge>
                                <Badge className="mx-1" bg="light" text="dark">
                                    <span >
                                        <Icon className="m-2" title="User Profile" size={1} path={mdiRulerSquare}></Icon>
                                        {property.m2_construction} m²
                                    </span>
                                </Badge>
                                <Badge className="mx-1" bg="light" text="dark">
                                    <span >
                                        <Icon className="m-2" title="User Profile" size={1} path={mdiParking}></Icon>
                                        {property.parking} cochera(s)
                                    </span>
                                </Badge>
                                <Badge className="mx-1" bg="light" text="dark">
                                    <span >
                                        <Icon className="m-2" title="User Profile" size={1} path={mdiHomeCity}></Icon>
                                        {property.age} años
                                    </span>
                                </Badge>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Amenidades</Card.Title>
                            <Card.Text>
                                {
                                    property.amenities.map(amenity => {
                                        return (
                                            <Badge key={amenity.id} className="mx-1" bg="dark" text="" >
                                                <span style={{fontSize:'0.85rem'}}>{amenity.name}</span>
                                            </Badge>
                                           )
                                    })
                                }
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Galería</Card.Title>
                            <Carousel>
                                {property.images ? property.images.map(image => {
                                    return (
                                        <CarouselItem key={image.id}>
                                            <img className="d-block w-100" alt={image.order} src={image.path} />
                                            <Carousel.Caption>
                                                <h4>Foto {image.order}/{property.images.length}</h4>
                                            </Carousel.Caption>
                                        </CarouselItem>
                                    )
                                }) : <div></div>}
                            </Carousel>
                        </Card.Body>

                        <Card.Body>
                            <Card.Title>Ubicación</Card.Title>
                            
                            <Card.Text>Calle {property.street} Col. {property.neighborhood} C.P. {property.cp}, {property.city}, {property.state} </Card.Text>
                            <Card.Link target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${property.latitude},${property.longitude}`}>Ver mapa</Card.Link>

                        </Card.Body>
                        
                    </Card>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default PropertyModal