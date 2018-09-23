import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const products = [

];
const addresses = [];
const payments = [

];



const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
});


function StepThree(props) {
    
    
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography variant="title" gutterBottom>
        Type of Agreement
      </Typography>
       

    <select class="form-control" id="exampleFormControlSelect1">
      <option>Pre-marital agreement</option>
      <option>Pre-civil partnership agreement</option>
    </select>


    <Typography variant="title" gutterBottom>
        Date of intended marriage
      </Typography>

      <Typography variant="title" gutterBottom>
      Assets of the first person
      </Typography>
      <p>Enter all the property and finances of the first person. It is important that both parties reveal ALL their assets. Select "Add another" to list as many assets as you need.
</p>


    </React.Fragment>
  );
}


StepThree.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepThree);