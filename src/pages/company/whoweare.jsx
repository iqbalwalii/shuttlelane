import Sidebar from "../../components/Sidebar";
import Contact from "../../components/Contact";
import about from "../../styles/About.module.css";
import { Grid, Typography } from "@material-ui/core";
const whoweare = () => {
  const routes = {
    "About Shuttlelane": "/company/about",
    "Who We Are": "/company/whoweare",
    "Become a Partner": "/company/partner",
    "Get In Touch": "/customerservice/contact",
    "Terms of Use": "/company/terms",
    "Privacy Policy": "/company/policy",
  };
  return (
    <section className={about.container}>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={11} sm={3} style={{ padding: "0px" }}>
          <Sidebar heading="Company" routes={routes} />
        </Grid>
        <Grid item item xs={11} sm={7}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            Our Unique Value System (UVS)
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            At Shuttlelane, our thought rests on satisfaction for our clients,
            and to meet this, we prioritise:
          </Typography>
          <div>
            <Typography variant="h5" gutterBottom color="textPrimary">
              Customer Service
            </Typography>
            <Typography variant="body1" paragraph color="textSecondary">
              Shuttlelane is a customer-oriented company. We have ingrained in
              our chauffeurs the skills necessary to make every ride with us
              worth it. Our service can be personalized towards your individual
              needs and you shall be attended to anyhow you want. The chauffeur
              also assists you with your baggage and takes you to your intended
              destination safely.
            </Typography>
            <Typography variant="h5" gutterBottom color="textPrimary">
              Communication
            </Typography>
            <Typography variant="body1" paragraph color="textSecondary">
              Our team is ready to talk to you every time. We can provide
              answers to all your inquiries. Do not hesitate to ask questions as
              we will be there to reply you eagerly.
            </Typography>
            <Typography variant="h5" gutterBottom color="textPrimary">
              Reliability
            </Typography>
            <Typography variant="body1" paragraph color="textSecondary">
              You can always bank on us at Shuttlelane. We have a positive
              reputation of dishing out nothing short of quality to our clients.
              Our track record speaks volumes about our reliability and
              trustworthiness.
            </Typography>
            <Typography variant="h5" gutterBottom color="textPrimary">
              Passenger Safety
            </Typography>
            <Typography variant="body1" paragraph color="textSecondary">
              You don't need to fret anymore. You are guaranteed the utmost
              safety by dealing with us. We can take transport you from anywhere
              to the airport on time and with no hassles.
            </Typography>
            <Typography variant="h5" gutterBottom color="textPrimary">
              Punctuality{" "}
            </Typography>
            <Typography variant="body1" paragraph color="textSecondary">
              Shuttlelane doesn't do African time. We understand the value of
              time so we like to keep to it in all our dealings with you. We
              never disappoint.
            </Typography>
            <Typography variant="h5" gutterBottom color="textPrimary">
              Luxury
            </Typography>
            <Typography variant="body1" paragraph color="textSecondary">
              What do you want? Style? Elegance? Class? Our cars are embodiments
              of luxury and glamour. They are of good standard and shall give
              you a positive atmosphere unrivalled by none other.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
      </Grid>
    </section>
  );
};

export default whoweare;
