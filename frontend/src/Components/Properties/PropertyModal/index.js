import React, { useEffect } from "react"
import { useState } from "react"
import { Button, Modal, Tabs, Tab, Badge, Card, Row, Col, Carousel, CarouselItem } from "react-bootstrap"


const PropertyModal = ({ property, handleClose }) => {
    const [show] = useState(property ? true : false)

    return (
        <>
            <Modal fullscreen={true} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{property.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Card>
                        <Card.Body>
                            <Card.Title>Descripción</Card.Title>
                            <Card.Text>{property.description}</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Amenidades</Card.Title>
                            <Card.Text>
                                {
                                    property.amenities.map(amenity => {
                                        return (
                                            <span sm={1} key={amenity.id} className="ml-2">
                                                <Badge pill className="mx-2" bg="secondary" text="light">
                                                    {amenity.name}
                                                </Badge>
                                            </span>
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
                            <Card.Text>Calle: {property.street} C.P. {property.cp}, {property.city}, {property.state} </Card.Text>

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