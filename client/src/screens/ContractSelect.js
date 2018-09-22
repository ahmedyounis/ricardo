import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import 'EOSIOClient' from '../utils/eosio';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

export default class ContractSelect extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          Contracts
        </div>
        <div className="content">
          <strong>Select a contract</strong>

          <div className={styles.root}>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={styles.heading}>Choose a Contract Type</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <Link to="/Wizard">Marriage</Link><br/>
                  <Link to="/Wizard">Auto Loan</Link><br/>
                  <Link to="/Wizard">Mortgage</Link><br/>
                  <Link to="/Wizard">Separation Agreement</Link><br/>
                  <Link to="/Wizard">Last Will</Link>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>

        </div>
      </div>
    );
  }
}
