import React, { Component } from 'react'
import GoogoleMapReact from 'google-map-react';

export default class MapBranch extends Component {

    static defaultProps = {
        // Kerry Siam Seaport Location
        center: {
            lat: 13.7200452,
            lng: 100.5135078
        },
        zoom: 15
    };

    handleApiLoaded(map, maps) {
        let marker = new maps.Marker({
            position: this.props.center,
            map,
            title: 'Kerry'
        });
      }

    render() {
        return (            
            <div style={{
                height: '100vh',
                width: '100%'
              }}>
                <GoogoleMapReact
                    bootstrapURLKeys={
                        {
                            key: 'AIzaSyBDqlW1EIlePcA48oLVV_kYQJXm9dQ75uw'
                        }
                    }
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
                >
                </GoogoleMapReact>
            </div>
        )
    }
}
