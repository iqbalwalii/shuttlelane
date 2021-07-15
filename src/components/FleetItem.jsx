import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function MediaCard({ title, description }) {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <img
          src={`${prefix}/assets/images/${title}.png`}
          alt={title}
          style={{
            width: "400px",
            height: "300px",
          }}
          data-aos="fade-top"
        />
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" component="p" color="primary" paragraph>
          Mercedes Benz E350, BMW Grancoupe 428i, BMW 523i, Toyota Camry 2018,
          Jagua XF, Mercedez Benz E200, Mercedez Benz E300, etc.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" color="textSecondary" component="p">
          A step closer to luxury. Comfort and convenience is guaranteed. Can
          accommodate up to 4 passengers and 2 luggages.
        </Typography>
        <Grid item>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PeopleIcon fontSize="20" /> 4
            <LocalMallIcon fontSize="20" /> 2
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
