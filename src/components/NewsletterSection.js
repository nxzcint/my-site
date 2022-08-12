import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Newsletter from "./Newsletter";

const useStyles = makeStyles((theme) => ({
  image: {
    margin: "0 auto",
    maxWidth: 400,
    display: "block",
    height: "auto",
    width: "100%",
  },
  spacer: {
    height: 48,
  },
}));

function NewsletterSection(props) {
  const classes = useStyles();

  const [subscribed, setSubscribed] = useState(false);
  const image =
    subscribed && props.imageSuccess ? props.imageSuccess : props.image;

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Grid container={true} alignItems="center" justifyContent="center">
          <Grid
            container={true}
            item={true}
            direction="column"
            xs={12}
            sm={9}
            md={6}
          >
            <Box
              textAlign={{
                xs: "center",
                md: "left",
              }}
            >
              <SectionHeader
                title={props.title}
                subtitle={props.subtitle}
                size={4}
              />
              <Newsletter
                buttonText={props.buttonText}
                buttonColor={props.buttonColor}
                inputPlaceholder={props.inputPlaceholder}
                subscribedMessage={props.subscribedMessage}
                onSubscribed={() => setSubscribed(true)}
              />
            </Box>
          </Grid>
          <Grid item={true} xs={12} md={1} className={classes.spacer} />
          <Grid item={true} xs={12} md={true}>
            <figure>
              <img src={image} alt="Illustration" className={classes.image} />
            </figure>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default NewsletterSection;
