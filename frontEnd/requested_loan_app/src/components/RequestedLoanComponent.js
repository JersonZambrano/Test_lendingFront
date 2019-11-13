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
        axios.post('https://smooth-helper-258818.appspot.com/loan_api/register', this.state).then(result => {
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
            <div className="container ">
                <div className="col-md-12">
                    <h5 className="text-left"> Company information</h5>
                    <form>
                        <div className="col-md-12 row">
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">Tax Id</label>
                                <input type="number" value={this.state.business_tax_id} ref={this.firsInput} name="business_tax_id" onChange={this.onChange.bind(this)} placeholder="Tax ID" className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">Business Name</label>
                                <input type="text" value={this.state.business_name} name="business_name" onChange={this.onChange.bind(this)} placeholder="Business Name" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-12 row">
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">Business Address</label>
                                <input type="text" value={this.state.business_address} name="business_address" placeholder="Business Address" onChange={this.onChange.bind(this)} className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">City</label>
                                <input type="text" value={this.state.business_city} name="business_city" placeholder="City" onChange={this.onChange.bind(this)} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-12 row">
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">State</label>
                                <input type="text" value={this.state.business_state} name="business_state" placeholder="State" onChange={this.onChange.bind(this)} className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">Postal Code</label>
                                <input type="text" value={this.state.business_postal_code} name="business_postal_code" placeholder="Postal Code" onChange={this.onChange.bind(this)} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-12 row">
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">Requested amount</label>
                                <input type="text" value={this.state.business_requested_amount} name="business_requested_amount" placeholder="Requested amount" onChange={this.onChange.bind(this)} className="form-control" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-12">
                    <h5 className="text-left">Owner information</h5>
                    <form>
                        <div className="col-md-12 row">
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">Social Security Number</label>
                                <input type="number" value={this.state.owner_social_security_number} name="owner_social_security_number" onChange={this.onChange.bind(this)} placeholder="Social Security Number" className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">Name</label>
                                <input type="text" value={this.state.owner_name} name="owner_name" onChange={this.onChange.bind(this)} placeholder="Name" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-12 row">
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">Email</label>
                                <input type="text" value={this.state.owner_email} name="owner_email" placeholder="Email" onChange={this.onChange.bind(this)} className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">Address</label>
                                <input type="text" value={this.state.owner_address} name="owner_address" placeholder="Address" onChange={this.onChange.bind(this)} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-12 row">
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">City</label>
                                <input type="text" value={this.state.owner_city} name="owner_city" placeholder="City" onChange={this.onChange.bind(this)} className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">State</label>
                                <input type="text" value={this.state.owner_state} name="owner_state" placeholder="State" onChange={this.onChange.bind(this)} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-12 row">
                            <div className="form-group col-md-6">
                                <label htmlFor="formGroupExampleInput">Postal Code</label>
                                <input type="text" value={this.state.owner_postal_code} name="owner_postal_code" placeholder="Postal Code" onChange={this.onChange.bind(this)} className="form-control" />
                            </div>
                        </div>
                    </form>
                </div>
                <br/>
                <div className=" col-12 text-center">
                    <button className="btn btn-info" onClick={this.enviarFormulario.bind(this)} >Requested Loan</button>
                </div>
                <br/>
            </div>
        );
    }
}

export default BusinessInfo
