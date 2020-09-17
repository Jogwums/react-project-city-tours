import React, { Component } from 'react'
import {tourData} from '../../tourData';

import './tourlist.scss';

import Tour from '../Tour';

export default class TourList extends Component {
    state = {
        tours: tourData
    };
    removeTour = id => {
        console.log(id)
        // use the state
        const { tours } = this.state;
        const sortedTours = tours.filter( tour => tour.id !== id);

        this.setState({
            tours: sortedTours
        })
    };

    render() {

        const { tours } = this.state;

        return (
            <section className="tourlist">
                {
                    tours.map( tour => (<Tour key={tour.id} tour={tour} removeTour={this.removeTour}>

                    </Tour>))
                }
            </section>
            
        )
    }
}
