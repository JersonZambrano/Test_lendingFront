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
            <div >
                <div  className="container">
                    <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
                        <h4>Loan Application</h4>
                    </nav>
                </div>
                <main role="main" className="container">
                    <div className="jumbotron">
                        <BusinessInfo />
                    </div>
                </main>
            </div>
        );
    }
}

export default Navigation
