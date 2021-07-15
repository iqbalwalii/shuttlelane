import { Grid, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

import Contact from "../../components/Contact";
import Sidebar from "../../components/Sidebar";
import about from "../../styles/About.module.css";

const policy = () => {
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
            Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            Shuttlelane is committed to protecting your privacy and takes the
            responsibility regarding the security of our customers' information
            very seriously.
          </Typography>

          <ul>
            <li>
              <Typography variant="body1" paragraph>
                Shuttlelane collates your information solely for the purpose of
                making your booking. Information “Phone Number Only” is
                necessarily passed on to the chauffeur or service partner
                responsible for fulfilling your journey.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Shuttlelane does not share, sell, trade or rent your personal
                information with any other parties.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Shuttlelane is committed to protecting your privacy and takes
                the responsibility regarding the security of our customers'
                information very seriously.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Shuttlelane collects information required to manage your airport
                transfer booking and for improving the service provided to
                customers. The information includes the name, email, mobile
                phone number, pick up and drop off information, times and dates
                of the journeys carried out and flight information.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Payment card details are not retained by Shuttlelane as payments
                are processed directly by our payment partners (Stripe, PayPal
                and Flutterwave) via the payment portal.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                The user must provide a valid and correct passenger name,
                telephone number and email address when placing a booking.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Shuttlelane does not accept any responsibility for any errors
                and subsequent miscommunication as a result.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                You will not be sent marketing messages or e-mails from third
                parties.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Shuttlelane needs the email address and phone number in other to
                send confirmation of the booking. Shuttlelane may send updates
                regarding any changes to Shuttlelane services in the future.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Shuttlelane needs the email address and phone number in other to
                send confirmation of the booking. Shuttlelane may send updates
                regarding any changes to Shuttlelane services in the future.
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
      </Grid>
    </section>
  );
};

export default policy;
