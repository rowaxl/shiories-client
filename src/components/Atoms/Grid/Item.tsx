import React from "react";
import PropTypes, { InferProps } from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    flexBasis: "auto"
  }
})

export default function Item(
  props: InferProps<typeof Item.propTypes>
) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

Item.defaultProps = {
  className: ""
};

Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
