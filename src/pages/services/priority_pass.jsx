import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Sidebar from "../../components/Sidebar";
import Contact from "../../components/Contact";

import about from "../../styles/About.module.css";

const priority_pass = () => {
  const routes = {
    "Airport Transfer": "/services/airport_transfer",
    "Car Hire": "/services/car_hire",
    "Priority Pass": "/services/priority_pass",
    "Corporate Travel": "/services/corporate_travel",
    "Wedding Services": "/services/wedding_services",
  };

  return (
    <section className={about.container}>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={11} sm={3} style={{ padding: "0px" }}>
          <Sidebar heading="Services" routes={routes} />
        </Grid>

        <Grid item xs={12} sm={8}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            Priority Pass Service
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            Skip security and immigration queues. Getting through the airport
            can be rough, especially when you’re landing with bags and an
            imminent business meeting weighs heavily on your mind. For those
            business travellers seeking simplicity, comfort and an assurance
            that things will run smoothly, the Shuttlelane priority pass service
            provides customers with a truly VIP travel experience.
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            For Priority Pass Click Book now
            <a href="/#header" className="btnGrad">
              Book Now
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
      </Grid>
    </section>
  );
};

export default priority_pass;
