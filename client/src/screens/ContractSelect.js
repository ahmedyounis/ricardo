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
import ButtonBase from '@material-ui/core/ButtonBase';

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
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});


const images = [
  {
    url: 'breakfast.jpg',
    title: <Link to="/Wizard" style={{textDecoration: 'none', color:'white'}}>Marriage </Link>,
    width: '30%',
  },
  {
    url: 'nut.jpg',
    title: <Link to="/Wizard" style={{textDecoration: 'none', color:'white'}}>Wizard </Link>,
    width: '40%',
  },
  {
    url: '/gear.jpg',
    title: <Link to="/lkmn" style={{textDecoration: 'none', color:'white'}}>Marriage </Link>,
    width: '30%',
  },
];


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

                  {images.map(image => (
                    <ButtonBase
                      focusRipple
                      key={image.title}
                      className={styles.image}
                      focusVisibleClassName={styles.focusVisible}
                      style={{
                        width: image.width,
                      }}
                    >
                      <span
                        className={styles.imageSrc}
                        style={{
                          backgroundImage: `url(${image.url})`,
                        }}
                      />
                      <span className={styles.imageBackdrop} />
                      <span className={styles.imageButton}>
                        <Typography
                          component="span"
                          variant="subheading"
                          color="inherit"
                          className={styles.imageTitle}
                        >
                          {image.title}
                          <span className={styles.imageMarked} />
                        </Typography>
                      </span>
                    </ButtonBase>
                  ))}

                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>

        </div>
      </div>
    );
  }
}
