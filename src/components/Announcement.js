import React from "react";
import Alert from "@material-ui/lab/Alert";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import { Link } from "./../util/router";

const useStyles = makeStyles((theme) => ({
  alert: {
    // Let <Section> handle colors
    backgroundColor: "transparent",
    color: "inherit",
  },
  message: {
    width: "100%",
    textAlign: "center",
  },
}));

function Announcement(props) {
  const classes = useStyles();

  const {
    onClose,
    bgColor,
    textColor,
    text,
    buttonColor,
    buttonPath,
    buttonText,
    ...otherProps
  } = props;

  return (
    <Section bgColor={bgColor} size="auto" {...otherProps}>
      <Alert
        icon={false}
        onClose={onClose}
        classes={{
          root: classes.alert,
          message: classes.message,
        }}
      >
        {text}
        <Box component="span" ml={2}>
          <Button
            component={Link}
            to={buttonPath}
            variant="contained"
            color={buttonColor}
            size="medium"
          >
            {buttonText}
          </Button>
        </Box>
      </Alert>
    </Section>
  );
}

export default Announcement;
