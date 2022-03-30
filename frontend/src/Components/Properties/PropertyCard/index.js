import React from "react";
import { Card, Carousel, CarouselItem } from "react-bootstrap";

const PropertyCard = ({property, verInfo})=>{
    const handleClick=()=>{verInfo(property)}
    return (
        <Card onClick={handleClick}>
            <Card.Body>
                <Carousel>
                    {property.images?property.images.map(image=>{
                        return (
                            <CarouselItem key={image.id}>
                                <img className="d-block w-100" alt={image.order} src={image.path}/>
                            </CarouselItem>
                        )
                    }):<div></div>}
                </Carousel>
                
            </Card.Body>
            <Card.Body>
                <Card.Title>{property.name}</Card.Title>
                <Card.Text>{property.description}</Card.Text>
                <Card.Text>
                    {property.amenities?property.amenities.map(amenity=>{
                        return (<span key={amenity.id}>{amenity.name}&nbsp;</span>)
                    }):<div></div>}
                </Card.Text>
            
                <Card.Link href="#">Ver</Card.Link>
                <Card.Link href="#">Editar</Card.Link>
                <Card.Link href="#">Eliminar</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default PropertyCard;
