import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Sidebar from "../../components/Sidebar";
import Contact from "../../components/Contact";

import about from "../../styles/About.module.css";

const airport_transfer = () => {
  const routes = {
    "Airport Transfer": "/services/airport_transfer",
    "Car Hire": "/services/car_hire",
    "Priority Pass": "/services/priority_pass",
    "Corporate Travel": "/services/corporate_travel",
    "Wedding Services": "/services/wedding_services",
  };
  return (
    <section className={about.container}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={11} sm={3} style={{ padding: "0px" }}>
          <Sidebar heading="Services" routes={routes} />
        </Grid>

        <Grid item xs={11} sm={7}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            Airport Transfer
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            We operate executive chauffeur services and corporate travels,
            undertake city tours, and handle airport transfers, plan weddings
            and need-base social engagements.
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            Comfort and safety are the key definitions of a memorably good trip,
            and this is something we are totally given to at Shuttlelane. We
            will take you from your point of touchdown at the airport to your
            destination in warmth and ease. We will do this because we have
            courteous and responsive luggage porter and chauffeur waiting to
            serve you.
          </Typography>
          <Typography variant="h5" gutterBottom color="textPrimary">
            Our Chauffeur
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            The standard at Shuttlelane cuts through all sections, including
            personnel. This is why we are stocked with some of the best
            chauffeurs around. Our professional and well-drilled chauffeurs
            complement the high standard of our services. They are licensed,
            tested and trusted. Our chauffeurs are also customer-friendly and
            boast of a wide range of shuttle service experience.
          </Typography>
          <Typography variant="h5" gutterBottom color="textPrimary">
            Meet and Greet
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            One exclusive service created for the good of our customers is our
            meet and greet activity. This idea is geared towards instilling
            confidence in you and making you acquainted with us as much as
            possible. One of our Chauffer shall await your arrival at the
            airport and offer you a helping hand with your baggage.
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            For airport transfer enquiries please send an email to:
            <a href="mailto:info@shuttlelane.com">info@shuttlelane.com</a>
          </Typography>
          <a href="/#header" className="btnGrad">
            Book Now
          </a>
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
      </Grid>
    </section>
  );
};

export default airport_transfer;
