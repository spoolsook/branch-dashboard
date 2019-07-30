import React, { Component } from 'react'
import {} from 

export default class MapBranch extends Component {

    static defaultProps = {
        // Kerry Siam Seaport Location
        center: {
          lat: 13.7200452,
          lng: 100.5135078
        },
        zoom: 15
      };

    render() {
        return (
            <div>
                <GoogoleMapReact
                    bootstrapURLKeys={
                        {
                            key:'AIzaSyBDqlW1EIlePcA48oLVV_kYQJXm9dQ75uw'
                        }
                    }
                    defaultCenter={this.defaultProps.center}
                    defaultZoom={this.defaultProps.zoom}
                >                    
                </GoogoleMapReact>
            </div>
        )
    }
}
