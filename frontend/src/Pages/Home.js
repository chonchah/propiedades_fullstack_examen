import React, { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import NavigationBar from "../Components/Navbar";
import { connect } from "react-redux";
import PropertyCard from "../Components/Properties/PropertyCard";
import store from "../redux/store";
import { getAllProperties } from "../redux/actionCreators";
import PropertyModal from "../Components/Properties/PropertyModal";
import { useState } from "react";
import Mapa from "../Components/Mapa/SimpleMap";

const HomePage = ({ properties }) => {

  const [property, setProperty] = useState(undefined)

  const showModal = (property) => {
    setProperty(property)
  }
  const closeModal = () => {
    setProperty(undefined)
  }

  useEffect(() => {
    store.dispatch(getAllProperties());
  }, []);

  return (
    <div>
      <NavigationBar />
      <Container>
        <div>
          {property ? <PropertyModal property={property} handleClose={closeModal} /> : <></>}
          <div>
            <Mapa properties={properties} />
          </div>
          <Container>
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
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  properties: state.propertyReducer.properties,
});

export default connect(mapStateToProps, {})(HomePage);
