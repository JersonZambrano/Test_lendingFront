import React, { Component } from 'react';

import BusinessInfo from './RequestedLoanComponent'

class Navigation extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }
    render() {

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                    <h1>Loan Application</h1>
                </nav>
                <BusinessInfo />
            </div>
        );
    }
}

export default Navigation
