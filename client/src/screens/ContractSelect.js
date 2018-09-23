import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

import EOSIOClient from '../utils/eosio';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  }
});

export default class ContractSelect extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <div className = "center">
            <h1>Contracts</h1>
          </div>
        </div>
        <div className="content">
          <h2>Select a contract</h2>

          <div className={styles.root}>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={styles.heading}>Choose a Contract Type</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <Link to="/create">
                    <Button variant="contained" href="#contained-buttons" className={styles.button}>
                      Marriage
                    </Button>
                  </Link><br/><br/>
                  <Link to="/create">
                    <Button variant="contained" href="#contained-buttons" className={styles.button}>
                      Auto Loan
                    </Button>
                  </Link><br/><br/>
                  <Link to="/create">
                    <Button variant="contained" href="#contained-buttons" className={styles.button}>
                      Mortgage
                    </Button>
                  </Link><br/><br/>
                  <Link to="/create">
                    <Button variant="contained" href="#contained-buttons" className={styles.button}>
                      Separation
                    </Button>
                  </Link><br/><br/>
                  <Link to="/create">
                    <Button variant="contained" href="#contained-buttons" className={styles.button}>
                      Last Will
                    </Button>
                  </Link>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>

        </div>
      </div>
    );
  }
}
