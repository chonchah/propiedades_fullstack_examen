import React, { useEffect } from "react";
import { Col, Row, Container, Card, Form, FloatingLabel } from "react-bootstrap";
import NavigationBar from "../Components/Navbar";
import { connect } from "react-redux";
import PropertyCard from "../Components/Properties/PropertyCard";
import store from "../redux/store";
import { getAllProperties, getAmenities } from "../redux/actionCreators";
import PropertyModal from "../Components/Properties/PropertyModal";
import { useState } from "react";
import Mapa from "../Components/Mapa/SimpleMap";

const FormatCurrency = new Intl.NumberFormat('es-MX',{style:"currency", currency:"MXN"}).format 

const HomePage = ({ properties, amenities }) => {

  const [property, setProperty] = useState(undefined)
  const [filtro, setFiltro] = useState({amenity:undefined, price:0})
  const [properties_filtered, setPropertiesFiltered] = useState([])
  const [showAll, setShowAll] = useState(true)

  const handleShowAll = (e)=>{
    setShowAll(e.target.checked)
  }
  const handleFiltro = (e)=>{
    let {name, value} = e.target
    setFiltro({...filtro, [name]:value})
    
    let filtrados = properties.filter((property)=>property.price*1<=filtro.price*1)

    if(filtro.amenity){
      let amenity_selected = filtro.amenity.toLowerCase()
      filtrados = filtrados.filter(property=>{
        let found_amenity = property.amenities.find(amenity=>amenity.name.toLowerCase().localeCompare(amenity_selected)===0)
        return found_amenity!==undefined 
      })
    }
    setPropertiesFiltered(filtrados)

    console.log(filtro)
  }
  const showModal = (property) => {
    setProperty(property)
  }
  const closeModal = () => {
    setProperty(undefined)
  }

  useEffect(() => {
    store.dispatch(getAllProperties());
    store.dispatch(getAmenities());
  }, []);

  return (
    <div>
      <NavigationBar />
      {(property?<PropertyModal property={property} handleClose={closeModal} />:<></>)}
      <Container>
          <Container >
            {properties?(<Mapa properties={properties}/>):<></>}
          </Container>
          <Container className="mt-4">
            <Card>
              <Card.Body>
                <Card.Title>Filtro</Card.Title>
                <Form>
                    <Form.Group>
                      <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Mostrar todos"
                        checked={showAll}
                        onChange={handleShowAll}
                      />
                    </Form.Group>
                    <Form.Group as={Col} sm={12}>
                      <Form.Label>Precio {FormatCurrency(filtro.price)}</Form.Label>
                      <Form.Range disabled={showAll} name="price" onChange={handleFiltro} value={filtro.price}  min={0} max={1e7} step={500}   />
                    </Form.Group>
                    
                  
                  <Row className="mt-2 mb-4">
                      <Form.Label>Amenidades</Form.Label>
                      
                      {   amenities?
                          amenities.map(amenity=>
                              <Form.Group key={amenity.id} as={Col} xs={12} sm={6} md={3} controlId="amenities" >
                                  <Form.Check  disabled={showAll} name="amenity" value={amenity.name} onChange={handleFiltro}  type="radio" id={amenity.id} label={amenity.name} />
                              </Form.Group>
                              ):
                          <></>
                      }

                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Container>
          {
            showAll?
            <Container className="my-2">
            {properties ? (
              <Row md={3} sm={2} xs={1}>
                {properties.map((property) => (
                  <Col key={property.id}>
                    <PropertyCard property={property} verInfo={showModal} />
                  </Col>
                ))}
              </Row>
            ) : (
              <></>
            )}
          </Container>
          :
          <Container className="my-2">
            {properties_filtered ? (
              <Row md={3} sm={2} xs={1}>
                {properties_filtered.map((property) => (
                  <Col key={property.id}>
                    <PropertyCard property={property} verInfo={showModal} />
                  </Col>
                ))}
              </Row>
            ) : (
              <></>
            )}
          </Container>
          }
          
          

        
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  properties: state.propertyReducer.properties,
  amenities: state.propertyReducer.amenities,
});

export default connect(mapStateToProps, {})(HomePage);
