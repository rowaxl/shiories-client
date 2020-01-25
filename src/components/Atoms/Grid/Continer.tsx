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

export default function Container(
  props: InferProps<typeof Container.propTypes>
) {
  const classes = useStyles();
  const { children, className, ...rest } = props;

  return (
    <Grid container {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  )
}

Container.defaultProps = {
  className: ''
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
