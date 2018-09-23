import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StepOne from './stepone';
import StepTwo from './steptwo';
import StepThree from './stepthree';
import { Link } from 'react-router-dom';

const styles = theme => ({
  appBar: {
    position: 'relative',
    color: '#474747',
    backgroundColor: '#ededed',
    fontWeight: 300,
    height: 90,
    paddingTop: 10,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    }

  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 6,
    [theme.breakpoints.up(600 + theme.spacing.unit * 6 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 12,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ['First Person ', 'Second Person', 'Agreement Variables'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <StepOne />;
    case 1:
      return <StepTwo />;
    case 2:
      return <StepThree />;
    default:
      throw new Error('Unknown step');
  }
}

class Checkout extends React.Component {
  state = {
    activeStep: 0,
  };



  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1,
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <div className = "backcolor">
          <CssBaseline />

          <main className={classes.layout}>
            <Paper className={classes.paper}>

              
              <Typography variant="display1" align="center">
                Agreement <br/><br/>
              </Typography>



              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <br/><br/>
              <React.Fragment>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography variant="headline" gutterBottom>
                      Your Contract has been uploaded to the EOS public blockchain.
                    </Typography>
                    <Typography variant="subheading">
                      Your transaction was recorded on block #23523 with transaction #0x24534kgdnt56456456456. An email has been sent to required parties.
                      Awaiting signatures to finalize the contract.
                    </Typography>
                    <Link to="/contracts"><Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    > My Contracts
                    </Button></Link>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={this.handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Create Contract' : 'Next'}
                      </Button>
                    </div>
                  </React.Fragment>
                )}
              </React.Fragment>
            </Paper>
          </main>
        </div>
      </React.Fragment>


    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);
