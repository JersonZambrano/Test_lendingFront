import React, { Component } from 'react';
import axios from 'axios';


class BusinessInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            business_tax_id: '',
            business_name: '',
            business_address: '',
            business_city: '',
            business_state: '',
            business_postal_code: '',
            business_requested_amount: '',
            owner_social_security_number: '',
            owner_name: '',
            owner_email: '',
            owner_address: '',
            owner_city: '',
            owner_state: '',
            owner_postal_code: '',
        }
        this.firsInput = React.createRef();
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    enviarFormulario(formulario) {
        axios.post('/register', this.state).then(result => {
            if (result.data != null && result.data['loan_decision'] != null) {
                alert("Result of the request is:" + result.data['loan_decision'])
                this.setState({
                    business_tax_id: '',
                    business_name: '',
                    business_address: '',
                    business_city: '',
                    business_state: '',
                    business_postal_code: '',
                    business_requested_amount: '',
                    owner_social_security_number: '',
                    owner_name: '',
                    owner_email: '',
                    owner_address: '',
                    owner_city: '',
                    owner_state: '',
                    owner_postal_code: '',
                })
                this.firsInput.current.focus();
            }
        }).catch(console.log);
    }

    render() {
        return (
            <div className="container form-group">

                <h4 className="text-left"> Company informatio</h4>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Tax ID</span>
                    </div>
                    <input type="number" value={this.state.business_tax_id} ref={this.firsInput} name="business_tax_id" onChange={this.onChange.bind(this)} aria-label="Tax ID" className="form-control" />
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Business Name</span>
                    </div>
                    <input type="text" value={this.state.business_name} name="business_name" onChange={this.onChange.bind(this)} aria-label="Business Name" className="form-control" />
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Business Address</span>
                    </div>
                    <input type="text" value={this.state.business_address} name="business_address" onChange={this.onChange.bind(this)} aria-label="Business Address" className="form-control" />
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">City</span>
                    </div>
                    <input type="text" value={this.state.business_city} name="business_city" onChange={this.onChange.bind(this)} aria-label="City" className="form-control" />
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">State</span>
                    </div>
                    <input type="text" value={this.state.business_state} name="business_state" onChange={this.onChange.bind(this)} aria-label="State" className="form-control" />
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Postal Code</span>
                    </div>
                    <input type="number" value={this.state.business_postal_code} name="business_postal_code" onChange={this.onChange.bind(this)} aria-label="Postal Code" className="form-control" />
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Requested amount </span>
                    </div>
                    <input type="number" value={this.state.business_requested_amount} name="business_requested_amount" onChange={this.onChange.bind(this)} aria-label="Requested amount " className="form-control" />
                </div>

                <br></br>
                <h4 className="text-left"> Owner information</h4>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Social Security Number</span>
                    </div>
                    <input type="number" value={this.state.owner_social_security_number} name="owner_social_security_number" onChange={this.onChange.bind(this)} aria-label="Social Security Number" className="form-control" />
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Name</span>
                    </div>
                    <input type="text" value={this.state.owner_name} name="owner_name" onChange={this.onChange.bind(this)} aria-label="Name" className="form-control" />
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Email</span>
                    </div>
                    <input type="email" value={this.state.owner_email} name="owner_email" onChange={this.onChange.bind(this)} aria-label="Email" className="form-control" />
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Address</span>
                    </div>
                    <input type="text" value={this.state.owner_address} name="owner_address" onChange={this.onChange.bind(this)} aria-label="Address" className="form-control" />
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">City</span>
                    </div>
                    <input type="text" value={this.state.owner_city} name="owner_city" onChange={this.onChange.bind(this)} aria-label="City" className="form-control" />
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">State</span>
                    </div>
                    <input type="text" value={this.state.owner_state} name="owner_state" onChange={this.onChange.bind(this)} aria-label="State" className="form-control" />
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Postal Code</span>
                    </div>
                    <input type="number" value={this.state.owner_postal_code} name="owner_postal_code" onChange={this.onChange.bind(this)} aria-label="Postal Code" className="form-control" />
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Postal Code</span>
                    </div>
                    <input type="number" value={this.state.owner_postal_code} name="owner_postal_code" onChange={this.onChange.bind(this)} aria-label="Postal Code" className="form-control" />
                </div>
                <br></br>
                <button className="btn btn-success" onClick={this.enviarFormulario.bind(this)} >Requested Loan</button>

            </div>
        );
    }
}

export default BusinessInfo
