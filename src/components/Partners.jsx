import { Card, Grid, Typography } from "@material-ui/core";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Partners = () => {
  return (
    <section style={{ marginTop: "4rem", paddingBottom: "3rem" }}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item xs={10}>
          <Typography variant="h4" gutterBottom align="center">
            Our Payment Partners
          </Typography>
        </Grid>
        <Grid item xs={10} align="center">
          <Typography variant="body1" align="center" paragraph>
            Globally tested and trusted online payment processors.
          </Typography>
        </Grid>

        <Grid item xs={8} align="center" className="homePay">
          <img
            src={`${prefix}/assets/images/flutter.png`}
            alt="Flutter wave"
            style={{ width: "300px" }}
          />
          <img
            src={`${prefix}/assets/images/paypal.png`}
            alt="Paypal"
            style={{
              width: "200px",
              margin: "0px 30px",
            }}
          />
          <img
            src={`${prefix}/assets/images/stripe.png`}
            alt="Stripe"
            style={{ width: "150px" }}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default Partners;
