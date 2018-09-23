import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import Button from '@material-ui/core/Button';


import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  chip: {
    margin: theme.spacing.unit,
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


function handleDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
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
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Prenuptual Agreement</Typography>
            <Typography className={classes.secondaryHeading}>Awaiting Signatures</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Prenuptual Agreement to be executed with
              <Chip
        label="Koush Bah"
        className={classes.chip}
        color="secondary"
        clickable
      />
      <Chip
        label="Zane Shaikh"
        onDelete={handleDelete}
        className={classes.chip}
        clickable
        color="primary"
        deleteIcon={<DoneIcon />}
      />
<Link to="/verify"> <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
View
</Button> </Link>
            </Typography>


          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Sale Purchase Agreement</Typography>
            <Typography className={classes.secondaryHeading}>
            Awaiting Signatures
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>

              John Worthley argrees to buy Zane Sheikh Honda Civic
              <Chip
              label="John Worthley"
        className={classes.chip}
        color="secondary"
        clickable
      />
      <Chip
        label="Zane Shaikh"
        onDelete={handleDelete}
        className={classes.chip}
        clickable
        color="primary"
        deleteIcon={<DoneIcon />}
      />
<Link to="/verify"> <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
View
</Button> </Link>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Subcontractor Agreement</Typography>
            <Typography className={classes.secondaryHeading}>
               Executed - In Progress
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Andrew Brown will mow the lawn of 412 Caimbridge Ave UK 234213 every 1 week for 2018
            <Chip
        label="Andrew Brown"
        onDelete={handleDelete}
        className={classes.chip}
        clickable
        color="primary"
        deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Zane Sheikh"
        onDelete={handleDelete}
        className={classes.chip}
        clickable
        color="primary"
        deleteIcon={<DoneIcon />}
      />
<Link to="/verify"> <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
View
</Button> </Link>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Mortgage</Typography>
            <Typography className={classes.secondaryHeading}>
               Complete
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                Purchase of  412 Caimbridge Ave UK 234213 Home
                <Chip
        label="Andrew Brown"
        onDelete={handleDelete}
        className={classes.chip}
        clickable
        color="primary"
        deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Zane Sheikh"
        onDelete={handleDelete}
        className={classes.chip}
        clickable
        color="primary"
        deleteIcon={<DoneIcon />}
      />
<Link to="/verify"> <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
View
</Button> </Link>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);
