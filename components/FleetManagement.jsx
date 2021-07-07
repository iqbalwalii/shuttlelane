import React, { Component } from 'react';
import {Business, LocationOn, Explore, EmojiTransportation, Mail, Person, Phone, Dialpad } from '@material-ui/icons';

export default class FleetManagement extends Component {
    state={
        companyname:'',
        address:'',
        city:'',
        country:'',
        name:'',
        email:'',
        number:'',
        bookingmail:'',
        bookingnumber:'',
    }
    render() {
        return (
            <div style={{marginTop:'6rem'}}>
                <h2 style={{color:'#000080',textAlign:'center'}}>Fleet Management Solution</h2>
                <form className="checkoutForm" style={{width: '50vw', margin:'2rem auto'}}>

                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div className="inputControl">
                          <span> <Business/> </span>
                          <input type="text" name="" id=""  placeholder='Company Name' required value={this.state.companyname} onChange={e=> this.setState({companyname : e.target.value})}/>
                        </div>
                        <div className="inputControl">
                           <span> <Mail/> </span>
                          <input type="text" name="" id=""  placeholder='Booking Email' required value={this.state.bookingmail} onChange={e=> this.setState({bookingmail : e.target.value})}/>
                        
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div className="inputControl">
                          <span> <EmojiTransportation/> </span>
                          <input type="text" name="" id=""  placeholder='City' required value={this.state.city} onChange={e=> this.setState({city : e.target.value})}/>
                        </div>
                        <div className="inputControl">
                          <span> <Explore/> </span>
                          <input type="text" name="" id=""  placeholder='Country'required value={this.state.country} onChange={e=> this.setState({country : e.target.value})}/>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div className="inputControl">
                            <span> <Person/> </span>
                            <input type="text" name="" id=""  placeholder='Name' required value={this.state.name} onChange={e=> this.setState({name : e.target.value})}/>  
                        </div>

                        <div className="inputControl">
                            <span><Mail/></span>
                            <input type="text" name="" id=""  placeholder='Email' required value={this.state.email} onChange={e=> this.setState({email : e.target.value})}/>  
                        </div>
                    </div>

                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div className="inputControl">
                          <span> <Phone/> </span>
                          <input type="text" name="" id=""  placeholder='Telephone' required value={this.state.number} onChange={e=> this.setState({number : e.target.value})}/>
                        </div>
                        
                        <div className="inputControl">
                          <span> <Dialpad/> </span>
                          <input type="text" name="" id=""  placeholder='Booking Number' required value={this.state.bookingnumber} onChange={e=> this.setState({bookingnumber : e.target.value})}/>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div className="inputControl">
                          <span> <Phone/> </span>
                          <input type="text" name="" id=""  placeholder='Telephone' required value={this.state.number} onChange={e=> this.setState({number : e.target.value})}/>
                        </div>
                        
                        <div className="inputControl">
                          <span> <Dialpad/> </span>
                          <input type="text" name="" id=""  placeholder='Booking Number' required value={this.state.bookingnumber} onChange={e=> this.setState({bookingnumber : e.target.value})}/>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-around'}}>
                        <div className="inputControl" style={{width: '100%'}}>
                            <span> <LocationOn/> </span>
                            <input type="text" name="" id=""  placeholder='Address'required value={this.state.address} onChange={e=> this.setState({address : e.target.value})}/>
                        </div>
                    </div>
                    <button className='btnGrad'>Book Now</button>
                </form>     
            </div>
        )
    }
}
