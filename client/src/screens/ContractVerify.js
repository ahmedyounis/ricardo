import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import Button from '@material-ui/core/Button';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>AGREEMENT BETWEEN OWNER AND CONTRACTOR
for use when a stipulated price forms the
basis of payment and to be used only
with the General Conditions of the Contract</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>THIS AGREEMENT made on the 23rd day of September, 2018 by and between</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Zane Sheikh hereinafter called the "Owner"
</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Basha Nehal hereinafter called the "Contractor"</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>WITNESSETH:  that the Owner and Contractor undertake and agree as follows:
</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>ARTICLE A-1 THE WORK
          The Contractor shall:

(a)	perform all the Work required by the Contract Documents. (See Tender Form for Description) which have been signed in triplicate by both the parties,

(b)	do and fulfil everything indicated by this Agreement, and

(c)	commence the Work by the 24th day of September, 2018 and substantially perform the Work of this Contract as certified by the Engineer/Architect by the 23rd day of September 2018.

(d)	The "Engineer/Architect" is the person designated as such from time to time by the Owner.


</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>(a)	Subject to applicable legislation and, where such legislation does not exist or apply, in accordance with such prescribed regulations or industry practice respecting holdback percentages and in accordance with the provisions of the General Conditions of the Contract, the Owner shall:

(1)  make monthly payments to the Contractor on account of the Contract Price.  The amounts of such payments shall be as certified by the Engineer/Architect; and 
(2)  upon Substantial Performance of the work as certified by the Engineer/Architect pay to the contractor any unpaid balance of holdback monies then due; and 
(3)  upon Total Performance of the Work as certified by the Engineer/Architect pay to the contractor any unpaid balance of the Contract Price then due.

</Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
        <Link to="/contracts"> <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
        View
        </Button> </Link>
        </Grid>

      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);