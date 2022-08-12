import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ChatIcon from "@material-ui/icons/Chat";
import Schedule from "@material-ui/icons/Schedule";
import Business from "@material-ui/icons/Business";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";

const useStyles = makeStyles((theme) => ({
  // Increase <Container> padding so it's
  // at least half of <Grid> spacing to
  // avoid horizontal scroll on mobile.
  // See https://material-ui.com/components/grid/#negative-margin
  container: {
    padding: `0 ${theme.spacing(4)}px`,
  },
  imageWrapper: {
    margin: "0 auto",
    maxWidth: 570,
    width: "100%",
    "& > img": {
      width: "100%",
    },
  },
  row: {
    // Spacing between rows
    "&:not(:last-child)": {
      marginBottom: `${theme.spacing(2)}px`,
    },
  },
}));

function FeaturesSection2(props) {
  const classes = useStyles();

  const items = [
    {
      title: "Chat",
      description:
        "Get in touch with some of the best coffe mentors in the world (World Barista Champions, World Brewers Cup Champions, Q Graders, Coffee Specialists, etc.).",
      icon: ChatIcon,
      iconColor: "primary.main",
    },
    {
      title: "Schedule",
      description:
        "1:1 live mentorship from the best coffe experts in the world.",
      icon: Schedule,
      iconColor: "secondary.main",
    },
    {
      title: "Grow",
      description: "Create/Grow your business and/or professional career.",
      icon: Business,
      iconColor: "#00d1b2",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className={classes.container}>
        <Grid container={true} alignItems="center" spacing={8}>
          <Grid container={true} item={true} direction="column" xs={12} md={6}>
            <figure className={classes.imageWrapper}>
              <img src={props.image} alt="" />
            </figure>
          </Grid>
          <Grid item={true} xs={12} md={6}>
            {items.map((item, index) => (
              <Grid
                className={classes.row}
                item={true}
                container={true}
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
                key={index}
              >
                <Grid item={true} xs="auto">
                  <Box
                    color={item.iconColor}
                    display="flex"
                    justifyContent="center"
                    fontSize={70}
                    width={70}
                    height={70}
                  >
                    <item.icon fontSize="inherit" />
                  </Box>
                </Grid>
                <Grid item={true} xs={true}>
                  <Typography variant="h5" gutterBottom={true}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {item.description}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default FeaturesSection2;
