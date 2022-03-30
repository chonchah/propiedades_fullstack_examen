import React, { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import NavigationBar from "../Components/Navbar";
import { connect } from "react-redux";
import PropertyCard from "../Components/PropertyCard";
import store from "../redux/store";
import { getAllProperties } from "../redux/actionCreators";

const HomePage = ({ properties }) => {
  useEffect(() => {
    store.dispatch(getAllProperties());
  }, []);

  return (
    <div>
      <NavigationBar />
      <Container>
        <div>
          <div>
            <span>Mapa...</span>
          </div>
          <Container>
            {properties ? (
              <Row md={3} sm={2} xs={1}>
                {properties.map((property) => (
                  <Col key={property.id}>
                    <PropertyCard property={property}/>
                  </Col>
                ))}
              </Row>
            ) : (
             <div></div>
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
