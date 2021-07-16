import React from "react";
import { Card, Grid, CardContent, Typography } from "@material-ui/core";
import NavigationSharpIcon from "@material-ui/icons/NavigationSharp";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import RoomIcon from "@material-ui/icons/Room";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  card: {
    padding: "0.5rem",
    maxWidth: "300px",
  },
  weightLight: {
    fontWeight: 300,
  },
});

const Works = () => {
  const classes = useStyles();

  return (
    <section
      style={{ padding: "1rem", width: "96%", margin: "auto" }}
      data-aos="fade-right"
      data-aos-delay="400"
    >
      <Grid container spacing={5} justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography
            align="center"
            gutterBottom
            variant="h4"
            style={{ color: "#fff" }}
          >
            How It Works
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{
              color: "#fff",
              fontSize: "1.1rem",
              padding: ".6rem 1rem",
            }}
            paragraph
          >
            Accessing our services is as simple as illustrated below.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Card className={classes.card} data-aos="zoom-in">
            <CardContent align="center">
              <NavigationSharpIcon
                style={{ fontSize: "60px" }}
                color="primary"
                align="center"
              />
              <Typography
                color="secondary"
                gutterBottom
                variant="h6"
                align="center"
              >
                Book
              </Typography>
              <Typography
                paragraph
                color="secondary"
                align="center"
                variant="body1"
                style={{
                  fontSize: "1.1rem",
                  padding: ".6rem 1rem",
                }}
              >
                Make a booking by specifying your travel date, pickup location,
                destination and desired vehicle class.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card
            className={classes.card}
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <CardContent align="center">
              <CreditCardIcon
                style={{ fontSize: "60px" }}
                color="primary"
                align="center"
              />
              <Typography
                gutterBottom
                color="secondary"
                variant="h6"
                align="center"
              >
                Pay
              </Typography>
              <Typography
                paragraph
                color="secondary"
                align="center"
                variant="body1"
                style={{
                  fontSize: "1.1rem",
                  padding: ".6rem 1rem",
                }}
              >
                Confirm your booking by securely making instant online payment,
                either using a credit card or debit card.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card
            className={classes.card}
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <CardContent align="center">
              <RoomIcon
                style={{ fontSize: "60px" }}
                color="primary"
                align="center"
              />
              <Typography
                gutterBottom
                color="secondary"
                variant="h6"
                align="center"
              >
                Travel
              </Typography>
              <Typography
                paragraph
                color="secondary"
                align="center"
                variant="body1"
                style={{
                  fontSize: "1.1rem",
                  padding: ".6rem 1rem",
                }}
              >
                Driver will arrive on schedule for pickup at pickup location and
                proceed to your destination in style and comfort.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};
export default Works;
