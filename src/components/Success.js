import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        // Proess form //
        this.props.nextStep();
    }
    back = e => {
      e.preventDefault();
      this.props.prevStep();
  }

    render() {
        
        return (
            <MuiThemeProvider>
              <React.Fragment>
                  <AppBar title="Success"/>
                  <h1>Thanks for your submission</h1>
                  <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam praesentium quo beatae dolores vitae illo nemo animi, omnis minus architecto recusandae perspiciatis voluptatibus est aliquid non illum, iste laudantium mollitia!
                  </p>
              </React.Fragment>  
            </MuiThemeProvider>
        )
    }
}

export default Success
