import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Sidebar from "../../components/Sidebar";
import Contact from "../../components/Contact";

import about from "../../styles/About.module.css";

const car_hire = () => {
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
        {/* 7889730654 
     
*/}

        <Grid item xs={11} sm={7}>
          <Typography variant="h5" color="textPrimary">
            Car Hire
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            You don’t need the world to make that holiday travels or family
            vacation come through because booking for your holiday car with
            Shuttlelane won’t cost you an arm. Our car hire service covers both
            short and long trips. We prioritize your satisfaction above other
            things and as such, we provide you with the most favourable car hire
            deals.
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            You only need to search through our collection, make a choice of
            car, reach us to book and you are on your way to fulfilling that
            family vacation.
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            Shuttlelane is a reality maker. We make vacation dreams become
            realities with functional safety guaranteed car hire service.
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            For car hire enquiries, please send an email to:
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

export default car_hire;
