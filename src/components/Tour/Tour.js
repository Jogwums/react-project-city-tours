import React, { Component } from 'react'

import './tour.scss';

export default class Tour extends Component {
    //use state
    state = {
        showInfo: false
    }
    //create a method to toggle the info. The arrow function will then be attached to the button 
    handleInfo = () => {
        this.setState({
            //toggle the show info 
            showInfo: !this.state.showInfo
        })
    }
    render() {
        
        // console.log(this.props)

        const { id, city, img, name, info } = this.props.tour;
        const { removeTour } = this.props;
        return (
            <article className="tour">
               <div className="img-container">
                   <img src={img} alt="city tour" />
                   <span className="close-btn" onClick={() => removeTour(id)}><i className="icono-cross"></i></span>
               </div>
               <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>more info 
                        <span onClick={this.handleInfo}>
                            <i className="icono-caretDown"> </i></span>
                    </h5>
                    {
                        //this is a conditional statement 
                        //checks the value of showInfo from the state and then !display(s) what is after the && 
                        this.state.showInfo && <p>{info}</p>
                    }
                    
               </div>
            </article >
        )
    }
}
