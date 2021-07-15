import { Grid, Typography } from "@material-ui/core";
import Sidebar from "../../components/Sidebar";
import about from "../../styles/About.module.css";

const index = () => {
  const routes = {
    "About Shuttlelane": "/company/about",
    "Who We Are": "/company/whoweare",
    "Become a Partner": "/company/partner",
    "Get In Touch": "/customerservice/contact",
    "Terms of Use": "/company/terms",
    "Privacy Policy": "/company/policy",
  };
  return (
    <section
      className={about.container}
      style={{ width: "80vw", margin: "7rem auto" }}
    >
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={11} sm={3} style={{ padding: "0px" }}>
          <Sidebar heading="Company" routes={routes} />
        </Grid>
        <Grid item xs={8} className={about.content}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            About Shuttlelane
          </Typography>

          <Typography variant="body1" paragraph color="textSecondary">
            At Shuttlelane, we give you the best of executive airport services.
            Because we are committed to enriching your travel experiences, we
            always make sure that you get from us unique standard services. Take
            your time to enjoy our finest customer-centered services because you
            deserve only the best. Registered under the Corporate Affairs
            Commission (CAC) laws of Nigeria, Shuttlelane operates from a
            vantage position of tailoring tastes and desires to suit
            individual’s demands which are delivered by the best-trained
            professionals in hospitality and logistics. Our focus at Shuttlelane
            is simple – to give you comfortable, safe airport taxi. And, we do
            this by putting quality services and customer satisfaction first.
          </Typography>
          <Typography variant="h5" gutterBottom color="textPrimary">
            Our Experience
          </Typography>

          <Typography variant="body1" paragraph color="textSecondary">
            Our experience in what we do is impeccable. We remain a tested and
            trusted service provider in ground transportation in Nigeria’s
            commercial heartbeat – Lagos. We are set out to make travelling
            experience comfortable and memorable for our clients. We are always
            delighted to have them reach their intended destinations with
            satisfaction. This is what we do, this is our forte and we have made
            a good name of it.
          </Typography>
          <Typography variant="h5" gutterBottom color="textPrimary">
            Unique Selling Points (USP)
          </Typography>

          <Typography variant="h6" gutterBottom color="textPrimary">
            Dealing with us gives you:
          </Typography>

          <ul>
            <li>
              <Typography variant="body1" paragraph>
                Unparalleled safety and comfort.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Punctual and responsive service delivery.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Timely communication via email and text.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Empathetic and professional Chauffer.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                And indeed, a service provider committed to excellent service.
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
    </section>
  );
};

export default index;
