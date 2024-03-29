import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
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
        const {values : {firstName,lastName,email,occupation,city,bio}} = this.props;
        return (
            <MuiThemeProvider>
              <React.Fragment>
                  <AppBar title="Confirm User data !"/>
                  <List>
                    <ListItem
                      primaryText = "First Name"
                      secondaryText = {firstName} 
                    />
                  </List>
                  <List>
                    <ListItem
                      primaryText = "Last Name"
                      secondaryText = {lastName} 
                    />
                  </List>
                  <List>
                    <ListItem
                      primaryText = "Email"
                      secondaryText = {email} 
                    />
                  </List>
                  <List>
                    <ListItem
                      primaryText = "Occupation"
                      secondaryText = {occupation} 
                    />
                  </List>
                  <List>
                    <ListItem
                      primaryText = "City"
                      secondaryText = {city} 
                    />
                  </List>
                  <List>
                    <ListItem
                      primaryText = "bio"
                      secondaryText = {bio} 
                    />
                  </List>
                  <RaisedButton label="Confirm & continue"
                  primary={true}
                  style={styles.button}
                  onClick={this.continue}/>
                  <RaisedButton label="Back"
                  style={styles.button}
                  onClick={this.back}/>
              </React.Fragment>  
            </MuiThemeProvider>
        )
    }
}

const styles={
    button: {
        margin : 15
    }
}

export default Confirm
