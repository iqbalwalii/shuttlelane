import { Grid, Typography } from "@material-ui/core";
import Sidebar from "../../components/Sidebar";
import Contact from "../../components/Contact";
import about from "../../styles/About.module.css";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const contact = () => {
  const routes = {
    "How It Works": "/#how-it-works",
    "Frequently Asked Questions": "/customerservice/faq",
    "Report a Problem": "/customerservice/contact",
  };
  return (
    <section className={about.container}>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item item xs={11} sm={3}>
          <Sidebar heading="Customer Service" routes={routes} />
        </Grid>
        <Grid item xs={11} sm={7}>
          <Typography variant="h5" color="textPrimary" gutterBottom>
            Get in Touch
          </Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0972831293307!2d3.3670999!3d6.5093691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c448e2f97c3%3A0xc95f24c00955aecc!2sShuttlelane!5e0!3m2!1sen!2sin!4v1625484619532!5m2!1sen!2sin"
            className="map"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <Typography variant="body1" paragraph color="textSecondary">
            Our office is located at No. 2, Martins Street, Off Ojuelegba Road,
            Yaba, Lagos, Nigeria.
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            If you wish to get in touch with us, kindly use the contact
            information below:
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            For General Enquiries:
            <a style={{ color: "blue" }} href="mailto:info@shuttlelane.com">
              info@shuttlelane.com
            </a>
            ,
            <a style={{ color: "blue" }} href="tel:+2349030009452">
              +234 903 000 9452
            </a>
            or
            <a style={{ color: "blue" }} href="tel:+2349030009486">
              +234 903 000 9486
            </a>
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            Booking:
            <a style={{ color: "blue" }} href="mailto:booking@shuttlelane.com">
              booking@shuttlelane.com
            </a>
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            WhatsApp:
            <a
              style={{ color: "blue" }}
              href="https://api.whatsapp.com/send?phone=2349030009108&text=Hello, Shuttlelane"
            >
              +234 903 000 9108
            </a>
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            For general enquiries, please allow up to 24 hours to receive a
            response.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
      </Grid>
    </section>
  );
};

export default contact;
