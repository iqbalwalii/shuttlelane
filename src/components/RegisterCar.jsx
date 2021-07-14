import React, { Component } from 'react'

export default class RegisterCar extends Component {
    render() {
        return (
            <div>
                    <form className={modal.modalForm}>
                <div className={modal.name}>
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                </div>
                <div className={modal.input}>
                    <input type="email" placeholder="Email "  required/>
                    <input type="tel" placeholder="Mobile" required/>
                </div>
                <div className={modal.disabled}>
                    <label htmlFor='cost'>Price Total</label><input type="text" id='cost' placeholder="5243254" disabled />
                    <label htmlFor='vat'>VAT</label><input type="text" id='vat' placeholder="87235" disabled />
                    <label htmlFor='total'>Total</label><input id='total' type="text" disabled placeholder="3500000" />
                </div>
                    <button className={modal.btnGrad}type="submit">Book Now</button>
                </form>
            </div>
        )
    }
}
