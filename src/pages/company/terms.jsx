import Sidebar from "../../components/Sidebar";
import Contact from "../../components/Contact";
import { Grid, Typography } from "@material-ui/core";

import about from "../../styles/About.module.css";

const Terms = () => {
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
        <Grid item xs={11} sm={7}>
          <Typography variant="h5" gutterBottom color="textPrimary">
            Terms and Conditions
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            Shuttlelane is a limited company registered in Nigeria, whose
            registered Address is at 2 Martins Street, Yaba, Lagos, Nigeria.
          </Typography>

          <Typography variant="body1" paragraph color="textSecondary">
            The terms and conditions regard Shuttlelane, the Customer and the
            Passenger. The Customer is a party who makes the booking. The
            Passenger is a party who travels with Shuttlelane. A pick-up shall
            be understood as a moment of entering a pre-booked taxi of
            Shuttlelane. A drop off shall be considered as a time of leaving
            pre-booked vehicle by the Passenger. Journey is a trip between pick
            up and drop off.
          </Typography>

          <Typography variant="body1" paragraph color="textSecondary">
            Shuttlelane reserves its rights to amend the Terms and Conditions at
            any time. All Customers and Passengers are advised to read the Terms
            and Conditions. It is a Customer’s/ Passenger’s responsibility to
            inquire about the most recent version of the document.
          </Typography>

          <ul>
            <li>
              <Typography variant="body1" paragraph>
                Shuttlelane reserves its exclusive right to amend Passenger’s
                booking if the situation requires. If the trip cannot happen,
                Shuttlelane shall inform its Passengers.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Pre-booking shall be required from all Customers wishing to
                travel with Shuttlelane. The pre-booking shall always include
                following information: Passenger’s name, Flight Number, time and
                place of pick-up and drop off, a valid telephone number of head
                Passenger.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                A confirmation shall be received by the Customer in a form of
                text message and email as soon as you book. If you have not
                received your email confirmation, please check SPAM in your
                email box before requesting a new confirmation
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                The time presented on the route’s map is to inform about average
                time required to reach the destination. Please bear in mind that
                the journey can be longer due to external factors such as
                weather and traffic. All Customers are advised to wisely plan
                their journeys by adding spare time to their trips.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                You must allow sufficient time when booking your taxi to allow
                for the check-in times required by your airline and for any
                delays caused by traffic or weather conditions.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Shuttlelane shall not be responsible for any delay caused by
                your failure to allow enough time to reach your destination or
                if the passengers are not ready.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                You must order a suitable car size for the number of passengers
                and luggage. Shuttlelane cannot guarantee to carry excessive
                amounts of luggage. Please note that a child, no matter what
                age, counts as one passenger.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Booking fare shall be the only fare for the booked journey,
                unless the Customer makes changes in his/ her booking. There are
                no hidden or additional costs to the booking alone. Shuttlelane
                bears operational costs of all finalized journeys.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Shuttlelane only offers e-payment as a payment method. This
                means that you can use all major cards to pay for your
                reservation or Bank Transfer.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                The charge on your Credit/Debit card statement will be shown as
                Shuttlelane Limited.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Prices for Services are calculated automatically using the
                detail that you provide to us for the pick-up and destination
                addresses.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Amendments to bookings should be reported to Shuttlelane
                Customer Service by phone or by email. In case of email
                amendments, the Customer shall receive response and confirmation
                emails in next 24 hours.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                A cancellation fee shall apply in cases of cancellation. For
                early cancellations (minimum 24 hours prior to the trip) you
                will be credited back in Full. Any cancellation made within less
                than 4 hours of the journey’s start time will not be refunded.
                If you requested your refund and your request has been accepted,
                you would receive a confirmation email that the refund has been
                made. Each refund query shall take 3 working days to be
                processed. The time when the refund shall be credited to your
                card depends on your card provider.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                In these terms and conditions amendment does not concern
                changing both pick up and drop off locations. If you want to
                change both pick up and drop off locations you will have to
                cancel your booking.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Shuttlelane offers pre-booked taxi services and with moment of
                booking arranges the trip. Individual Customers are informed
                that after the booking has been made only basic amendments or
                cancellations are possible.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Shuttlelane shall reserve its rights to reject its service to
                Passengers under influence of alcohol, drugs or who are
                offensive and violent towards their chauffeurs or Customer
                Service. Shuttlelane Customer Service will contact the Passenger
                and Customer to announce it. A simultaneous email will be send
                to the email address that was provided during the booking.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Shuttlelane chauffeurs shall drive according to the speed
                requirements, safety measures and weather conditions.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Shuttlelane chauffeurs shall not follow Passengers’ instructions
                regarding the speed of driving and route.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Shuttlelane chauffeurs willingly offer a helpful hand to
                Passengers with heavy luggage or mobility problems. All
                Passengers willing to travel with us, and who request more help
                and attention, shall inform us about it prior to their journey.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Running late? We will wait for you! Your booking includes 20
                minutes of waiting time - or 60 minutes if your pick-up point is
                at an airport. As long as we know your flight details, we will
                adjust your pick-up time to factor in any delays.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Shuttlelane shall apply a non-smoking policy in all its
                vehicles.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Shuttlelane shall reassure a guarantee of timely, safe and
                comfortable delivery of goods and persons.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Passengers’ belongings found in vehicles shall remain in
                Shuttlelane office for 12 months. After this time, if there is
                no claim from the side of Passenger or Customer, the property
                shall be destroyed. Shuttlelane drivers are not obliged to
                deliver any found goods to their owners.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Shuttlelane chauffeurs are to deliver safe and on time service
                to their Passengers. Thus, it is forbidden to misbehave towards
                them or disturb them during the journey. A legal action shall be
                taken against any action of violence or unjustified misbehaviour
                towards our drivers. In case of concerns related to our
                chauffeurs, the Passenger is obliged to inform our Customer
                Service as soon as possible.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                In the event that a larger vehicle is required to transport the
                excess/oversize luggage the passenger will be required to cover
                the additional cost.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                The company accepts no responsibility for any adverse weather
                conditions (i.e.Flooding) or traffic accidents which may
                inconvenience, delay and/or cancellation of a booking by the
                company.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                The Customer shall be liable for any damage caused by Passengers
                to any Passenger Vehicle.
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

export default Terms;
