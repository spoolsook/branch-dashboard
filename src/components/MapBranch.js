import React, { Component } from 'react'
import GoogoleMapReact from 'google-map-react';
// import BranchModel from '../models/branchModel'; --> remove

import { connect } from 'react-redux'
import Actions from '../redux/action'


class MapBranch extends Component {

    static defaultProps = {
        // Kerry Siam Seaport Location
        center: {
            lat: 13.7200452,
            lng: 100.5135078
        },
        zoom: 15
    };

    markerClick = (marker) =>{
        console.log('เลือกสาขา ' + marker.get('branchId') +' '+ marker.get('title'));
        
        this.props.showBranchDataInChart(marker.get('branchId'));
    }

    handleApiLoaded(map, maps) {

        let bounds = new maps.LatLngBounds();
        let branches = this.props.branches;

        // BranchModel.  --> remove
        branches.forEach(branch => {
            let marker = new maps.Marker({
                position: branch.position,
                map,
                title: branch.name,
                // กำหนด id ของสาขา
                branchId: branch.id
            });

            // กำหนด event listenter สำหรับการคลิกเลือก
            marker.addListener('click', () => { this.markerClick(marker) })

            bounds.extend(branch.position);
        });

        map.fitBounds(bounds);
    }


    render() {
        return (
            <div style={{
                height: '100vh',
                width: '100%'
            }}>
                <div>{this.props.label}</div>
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


// snippet 'reduxmap'
const mapStateToProps = (state) => {
    //console.log('mapStateToProps: ', state);   //--> send from reducer initialState()
    return {
        label: state.welcomeText,
        branches: state.branches
    };
}

const mapDispatchToProps = dispatch => {
    return {
        showBranchDataInChart: (branchId) =>  dispatch(Actions.showBranchData(branchId))//{console.log('กำลังส่ง ' + branchId +' เข้า redux')}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MapBranch)