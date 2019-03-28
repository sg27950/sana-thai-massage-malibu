import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default class Map extends Component {
  static defaultProps = {
    center: { lat: 34.037403, lng: -118.637744 },
    zoom: 11
  };
  render() {
    return (
      <div className="google-map">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={34.037403}
            lng={-118.637744}
            text={'Sana Thai Massage Malibu'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
