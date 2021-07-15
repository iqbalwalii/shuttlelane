import Sidebar from "../../components/Sidebar";
import Contact from "../../components/Contact";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { Typography, Grid } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "../../styles/Questions.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  const routes = {
    "How It Works": "/#how-it-works",
    "Frequently Asked Questions": "/customerservice/faq",
    "Report a Problem": "/customerservice/contact",
  };
  return (
    <Grid container justifyContent="center" spacing={2} className={styles.faq}>
      <Grid item item xs={11} sm={3}>
        <Sidebar heading="Customer Service" routes={routes} />
      </Grid>

      <Grid item item xs={11} sm={7} className={styles.content}>
        <div className={classes.root}>
          {/* 1 */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3>How do I find my chauffeur ?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body11">
                Your chauffeur will await you at the arrival hall of the
                airport. You can easily locate him by spotting a personalized
                pickup sign which will be held by him.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* 2  */}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h3>How will he know I am the right passenger?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                He will ask for your Booking Ref Number and trip details, which
                you are expected to provide
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* 3 */}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <h3>
                If he arrives earlier, do I get charged for additional wait
                time?
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Shuttlelane does not charge clients for additional wait time
                when the wait time hasn't been exceeded. The complimentary wait
                time for airport pickups is 1 hour and 20 minutes for other
                cases. Once you have given us your flight details during
                booking, tracking your arrival time and adjusting your pickup
                time becomes an easy thing to do.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* 4 */}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <h3>How do I make a booking?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Bookings can be made through our official website:
                www.shuttlelane.com
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* 5 */}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <h3>How do I get back what I forgot in your car?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                If you misplace or forget any item in any of our vehicles, just
                send us an email, describing the item in question. Just make
                sure to give us your contact details as well. Once you get in
                contact with us, you will be replied to accordingly.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* 6 */}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6a-content"
              id="panel6a-header"
            >
              <h3>
                What are the vehicle types and how many passengers can they
                carry?
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                We have a large variety of cars at Shuttlelane. You can get
                information about them and their carrying capacities on our
                FLEET page. If you have any special requirement, do well to
                communicate it to us.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* 7 */}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel7a-content"
              id="panel7a-header"
            >
              <h3>Can I book on behalf of a third party?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                You are allowed to book with us on behalf of a third party. Just
                be sure to fill in the contact details and the mobile number of
                such third party so that the Chauffeur can get in touch at the
                time of pick-up if necessary
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* 8 */}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel8a-content"
              id="panel8a-header"
            >
              <h3>Can I take animals on my journey?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                As much awesome as pets are, we do not carry them. Sorry about
                that.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* 9 */}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel9a-content"
              id="panel9a-header"
            >
              <h3>What happens after I make a booking?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Once you have booked with us, we send an email and a text
                message for confirmation. Make sure you go through the
                confirmation mail to ascertain the correctness of your journey
                details.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* 10 */}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel10a-content"
              id="panel10a-header"
            >
              <h3>Are prices shown per person or vehicle?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Our prices at Shuttlelane are often listed per vehicle. The
                price will cover all taxes, gratuities as well as fees. You can
                check for the maximum number of passengers and Luggage that a
                car can covey under each car class. Bear in mind however that
                the number of passengers doesn't affect the price.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* 11 */}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel11a-content"
              id="panel11a-header"
            >
              <h3>What is Shuttlelane cancellation policy?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                In case of transfer/one-way bookings, you can cancel the
                arrangement for free provided we have more than 24 hour before
                the agreed pickup time. But, the total price must be paid when
                time left is 4hour or below to the agreed pick-up time.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* 12 */}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel12a-content"
              id="panel12a-header"
            >
              <h3>What can I do if I can't locate my chauffeur?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Give our office a call ASAP and try not to leave the arrival
                hall as we try to find him.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* 13 */}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel13a-content"
              id="panel13a-header"
            >
              <h3>Does Shuttlelane cater for Weddings?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Yes, we cater for weddings. We have exotic cars suitable for
                wedding ceremonies. You can also get additional vehicles for
                your guests if you so wish.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* 14 */}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel14a-content"
              id="panel14a-header"
            >
              <h3>What if my Question is not covered here?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                You can forward any question not covered here to our email. We
                promise to give you a swift and favourable response.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Grid>
      <Grid item sm={12}>
        <Contact />
      </Grid>
    </Grid>
  );
}
