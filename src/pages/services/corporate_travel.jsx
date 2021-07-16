import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Sidebar from "../../components/Sidebar";
import Contact from "../../components/Contact";

import about from "../../styles/About.module.css";

const corporate_travel = () => {
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
          <Typography variant="h5" gutterBottom color="textPrimary">
            Corporate Travel
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            Shuttlelane takes pleasure in enhancing business meetings and
            transactions. We will keep our clients up-to-date with their
            individual businesses travels and engagements because we fully
            understand the demands of business dealings. Our intention is to
            relieve executives of the burden of travel logistics and making it
            easy for companies to earn productive business meetings and
            engagements at any destinations of their choice.
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            So, basically, we drive you to meetings; help navigate your business
            partners and customers from airports to locations across the
            country. All you need to do is just make a request and we will act
            on your request fast.
          </Typography>

          <Typography variant="body1" paragraph color="textSecondary">
            For corporate travels enquiries, please send an email to:
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

export default corporate_travel;
