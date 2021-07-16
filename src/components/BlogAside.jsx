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
import blog from "../styles/Blog.module.css";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || " ";
const BlogAside = () => {
  return (
    <Grid item xs={12} sm={5} className={blog.FormAside}>
      <Card>
        <CardMedia>
          <img
            src={`${prefix}/assets/images/shuttle.png`}
            alt="logo"
            style={{ width: "200px", marginTop: "10px", padding: "1rem" }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" color="secondary">
            About Shuttle lane
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            gutterBottom
            style={{ marginBottom: "1rem" }}
          >
            At Shuttlelane, we give you the best of executive airport services.
            Because we are committed to enriching your travel experiences, we
            always make sure that you get unique standard services from us.
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Registered in England and also under the Corporate Affairs
            Commission (CAC) laws of Nigeria, Shuttlelane operates from a
            vantage position of tailoring tastes and desires to suit
            individual’s demands which are delivered by the best-trained
            professionals in hospitality and logistics.
          </Typography>
          <ContactForm />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BlogAside;
