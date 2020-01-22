import React from 'react'
import PropTypes, { InferProps } from 'prop-types';

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = {
  grid: {
    width: 'auto'
  }
}

const useStyles = makeStyles(styles)

export default function GridContainer(
  props: InferProps<typeof GridContainer.propTypes>
) {
  const classes = useStyles();
  const { children, className, ...rest } = props;

  return (
    <Grid container {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  )
}

GridContainer.defaultProps = {
  className: ''
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
