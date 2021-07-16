import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Sidebar from "../../components/Sidebar";
import Contact from "../../components/Contact";

import about from "../../styles/About.module.css";

const wedding_services = () => {
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

        <Grid item xs={11} sm={7}>
          <Typography variant="h5" color="textPrimary" gutterBottom>
            Wedding Services
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            Shuttlelane prides itself in making wedding ceremonies and
            need-based social engagements the best they can be through its
            professional chauffeur business. We are ready to give you impeccable
            chauffeur service on your special day through our beautiful and
            elegant wedding rides. This unique service gives couples
            immeasurable happiness and style. With our service, we make sure to
            enhance the quality of your wedding, giving you a memorable and
            lovely moment of ride through your ceremonies.
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            Depending on your choice, our wedding package comes with options.
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            For wedding enquiries, please send an email to:
            <a style={{ color: "blue" }} href="mailto:info@shuttlelane.com">
              info@shuttlelane.com
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

export default wedding_services;
