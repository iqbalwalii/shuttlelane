import {
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import ContactForm from "../components/ContactForm";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || " ";
const BlogAside = () => {
  return (
    <Grid item xs={3} style={{ padding: "0rem 1rem" }}>
      <Card>
        <CardMedia>
          <img
            src={`${prefix}/assets/images/shuttle.png`}
            alt="logo"
            style={{ width: "200px", marginTop: "10px" }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" color="secondary">
            About Shuttle lane
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica Lizards are
            a widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica
          </Typography>
          <ContactForm />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BlogAside;
