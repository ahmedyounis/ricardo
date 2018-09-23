import React, { Component } from 'react';
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
import TextField from '@material-ui/core/TextField';

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
  formControl: {
    minWidth: 150,
    paddingRight:100,
  },
  sizing: {
    width: '150px',
    paddingRight: 1
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});



export default class StepThree extends Component {
  render() {
    return (
      <div>
        <Typography variant="title" gutterBottom>
          Type of Agreement
        </Typography>

        <form className={styles.root} autoComplete="off">
          <FormControl >
            <InputLabel>Agreement Type</InputLabel>
            <Select style={{width:150}}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'premarital'}>Pre-marital agreement</MenuItem>
              <MenuItem value={'precivil'}>Pre-civil partnership agreement</MenuItem>
            </Select>
          </FormControl>
        </form> <br/><br/>


        <Typography variant="title" gutterBottom>
          Date of intended marriage
        </Typography>

        <br/>
        <form className={styles.container} noValidate>
          <TextField
            id="date"
            label="Marriage Date"
            type="date"
            defaultValue="2017-05-24"
            className={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <br/><br/>

        <Typography variant="title" gutterBottom>
          Assets of the first person
        </Typography>
        <form className={styles.container} noValidate autoComplete="off">
          <TextField
            id="filled-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Assets"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>

        <p>Enter all the property and finances of the first person. It is
        important that both parties reveal ALL their assets. Select "Add another"
        to list as many assets as you need.
        </p>
      </div>
    );
  }
}
