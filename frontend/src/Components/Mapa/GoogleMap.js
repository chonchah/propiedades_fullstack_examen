import React from 'react';

import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const GoogleMap = ({ children, ...props }) => {
    console.log(props)
    return (
        <Wrapper>
            <GoogleMapReact
                zoom={13}
                {...props}
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_API_KEY_GOOGLE_MAPS,
                }}
                
                
            >
                {children}
            </GoogleMapReact>
        </Wrapper>
    )
}
    



export default GoogleMap;