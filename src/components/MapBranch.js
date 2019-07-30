import React, { Component } from 'react'
import GoogoleMapReact from 'google-map-react';
import BranchModel from '../models/branchModel';

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

        BranchModel.branches.forEach(branch => {
            new maps.Marker({
                position: branch.position,
                map,
                title: branch.name
            });
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
                            key: 'AIzaSyCAIzxNZLF4W1WbuC09goXutCgyycGSLOU'
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
