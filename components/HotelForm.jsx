import React, { Component } from 'react';
import {LocationCity, LocationOn, Person, Phone} from '@material-ui/icons';

export default class HotelForm extends Component {
    state={
        firstname:'',
        lastname:'',
        position:'',
        number:'',
        hotel:'',
        location:'',
    }
    render() {
        return (
            <div style={{marginTop:'6rem'}}>
                <h2 style={{color:'#000080',textAlign:'center'}}>Hotel Transfer Solution</h2>
                <form className="checkoutForm" style={{width: '50vw', margin:'2rem auto'}}>

                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div className="inputControl">
                          <span> <Person/> </span>
                          <input type="text" name="" id=""  placeholder='First Name' required value={this.state.firstname} onChange={e=> this.setState({firstname : e.target.value})}/>
                        </div>
                        <div className="inputControl">
                          <span> <Person/> </span>
                          <input type="text" name="" id=""  placeholder='Last Name'required value={this.state.lastname} onChange={e=> this.setState({lastname : e.target.value})}/>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div className="inputControl">
                            <span> <Person/> </span>
                            <input type="text" name="" id=""  placeholder='Position' required value={this.state.position} onChange={e=> this.setState({position : e.target.value})}/>  
                        </div>

                        <div className="inputControl">
                            <span><Phone/></span>
                            <input type="tel" name="" id=""  placeholder='Contact' required value={this.state.number} onChange={e=> this.setState({number : e.target.value})}/>  
                        </div>
                    </div>

                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div className="inputControl">
                          <span> <LocationCity/> </span>
                          <input type="text" name="" id=""  placeholder='Hotel Name' required value={this.state.hotel} onChange={e=> this.setState({hotel : e.target.value})}/>
                        </div>
                        <div className="inputControl">
                          <span> <LocationOn/> </span>
                          <input type="text" name="" id=""  placeholder='Location' required value={this.state.location} onChange={e=> this.setState({location : e.target.value})}/>
                        </div>
                    </div>
                    <button className='btnGrad'>Book Now</button>
                </form>     
            </div>
        )
    }
}
