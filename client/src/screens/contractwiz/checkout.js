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
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';


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
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
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
          <AppBar color="#800000" position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant="title" color="inherit" noWrap>

              </Typography>
              <div className={classes.grow} />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <Input
                  placeholder="Search…"
                  disableUnderline
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>

              <div>
                <IconButton

                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
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
