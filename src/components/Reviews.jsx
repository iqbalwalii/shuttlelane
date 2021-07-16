import { Card, Grid, CardContent, Typography } from "@material-ui/core";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

const Reviews = () => {
  return (
    <section>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Typography
          variant="h4"
          data-aos="zoom-in"
          align="center"
          xs={10}
          style={{
            marginTop: "1.1rem",
            padding: "0 1.4rem",
            paddingTop: "1rem",
          }}
        >
          What our Clients are saying
        </Typography>
        <Grid item>
          <Typography
            variant="body1"
            data-aos="zoom-in"
            align="center"
            paragraph
            xs={10}
            style={{ fontSize: "1.1rem", padding: "0 1.4rem" }}
          >
            Our clients are saying great things about us. Here are a few:
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          spacing={2}
          style={{ width: "85%" }}
        >
          <Grid item xs={10} sm={4}>
            <Card
              data-aos="fade-left"
              className=""
              style={{
                background: "#212121",
                padding: "1rem 1.8rem",
                color: "#fff",
                position: "relative",
              }}
            >
              <Typography variant="body2" paragraph style={{ color: "#fff" }}>
                <FormatQuoteIcon
                  style={{
                    transform: "rotate(180deg)",
                    marginLeft: "-25px",
                  }}
                />
                This chauffeur service is deserving of five stars. The staff is
                so attentive and caring towards customers. The attended to me
                well and listened to my needs. The manager saw to it that my
                visit to Lagos was very comfortable. Their service is beyond
                chauffeuring alone. The manager got me a SIM card to make sure I
                wasn’t stranded. He tracked my flight online so that even when
                my flight was delayed, the taxi was still available waiting for
                me. I can’t thank you enough for making my life easier. You
                deserve more than five stars.
                {/* <FormatQuoteIcon style={{ color: "#fff" }} /> */}
              </Typography>
              <Typography variant="subtitle2" color="primary">
                Ms ifunanya
              </Typography>
              <Typography variant="caption" style={{ color: "#fff" }}>
                Lagos, Nigeria
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={10} sm={4}>
            <Card
              data-aos="fade-left"
              className=""
              style={{
                background: "#212121",
                padding: "1rem 1.8rem",
                color: "#fff",
                position: "relative",
              }}
            >
              <Typography variant="body2" paragraph style={{ color: "#fff" }}>
                <FormatQuoteIcon
                  style={{
                    transform: "rotate(180deg)",
                    marginLeft: "-25px",
                  }}
                />
                I haven't been to Lagos for years and was really skeptical of my
                next decision. Before now, I have tried all kinds of travel
                agents and companies until a friend told me about @shuttlelane
                He spoke highly of them so I gave it a try. I must confess to
                you all that @shuttlelane is the right link to Africa 🌍 A
                smooth drive from the airport to the hotel, tour guide to the
                beautiful locations, car services and great services. I had so
                much fun on trips. The only thing that was missing on this trip,
                was to stay for a few more days
                {/* <FormatQuoteIcon style={{ color: "#fff" }} /> */}
              </Typography>
              <Typography variant="subtitle2" color="primary">
                C.L.A.P
              </Typography>
              <Typography variant="caption" style={{ color: "#fff" }}>
                Lagos, Nigeria
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Reviews;
