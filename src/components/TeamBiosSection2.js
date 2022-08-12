import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  avatarWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

function TeamBiosSection2(props) {
  const classes = useStyles();

  const items = [
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
      name: "John Smith",
      role: "CEO",
    },
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-35.jpeg",
      name: "Lisa Zinn",
      role: "CTO",
    },
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
      name: "Diana Low",
      role: "Designer",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=5",
      name: "Niomi Clay",
      role: "Software Engineer",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=6",
      name: "Tim Wesley",
      role: "Software Engineer",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=7",
      name: "Shawn David",
      role: "Marketing",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=8",
      name: "Ian Gold",
      role: "Marketing",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=10",
      name: "Ali Pine",
      role: "Software Engineer",
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
            <Grid item={true} xs={12} sm={4} md={3} key={index}>
              <Box className={classes.avatarWrapper}>
                <Avatar
                  src={item.avatar}
                  alt={item.name}
                  className={classes.avatar}
                />
              </Box>
              <Box textAlign="center" pt={3}>
                <Typography variant="body2" component="p">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.role}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default TeamBiosSection2;
