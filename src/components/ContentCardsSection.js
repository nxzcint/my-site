import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { Link } from "./../util/router";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 160,
  },
}));

function ContentCardsSection(props) {
  const classes = useStyles();

  const items = [
    {
      image: "https://source.unsplash.com/aHrxrT1q2h0/800x600",
      title: "Faucibus turpis in",
      body: "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/golden-gate",
    },
    {
      image: "https://source.unsplash.com/BkmdKnuAZtw/800x600",
      title: "Faucibus turpis in",
      body: "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/beach",
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      title: "Faucibus turpis in",
      body: "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/road",
    },
    {
      image: "https://source.unsplash.com/eOcyhe5-9sQ/800x600",
      title: "Faucibus turpis in",
      body: "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/ballons",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Grid container={true} justifyContent="center" spacing={4}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} md={6} lg={3} key={index}>
              <Card>
                <CardActionArea component={Link} to={item.url}>
                  <CardMedia
                    image={item.image}
                    title={item.name}
                    className={classes.media}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom={true}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default ContentCardsSection;
