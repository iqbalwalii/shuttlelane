import { Divider, Grid, Typography } from "@material-ui/core";
import postStyles from "../styles/SinglePost.module.css";
import { Twitter, Facebook, Telegram } from "@material-ui/icons";

import BlogCard from "./BlogCard";
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
const Singlepost = () => {
  return (
    <Grid item xs={8} container justifyContent="center">
      <Grid item xs={10} className={postStyles.postHeader}>
        <Typography variant="h3" align="center" gutterBottom>
          This is the title of this blog post
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={`https://wallpaperaccess.com/full/2213424.jpg`}
            alt="Writer profile"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              padding: ".4rem",
            }}
          />
          <Typography variant="body2" gutterBottom>
            Written by <br /> Javellian Curry
          </Typography>
        </div>
        <Divider />
      </Grid>
      <Grid item xs={12} className={postStyles.postImage}>
        <img
          src="https://media.istockphoto.com/videos/telephoto-city-traffic-with-people-video-id114773416?b=1&k=6&m=114773416&s=640x640&h=PI89a2dfRCizRT-RlEWmP1Zu9lZ5mmcBFZon5lSSLZk="
          alt="blog post headert"
        />
      </Grid>
      <Grid container item xs={10} className={postStyles.content}>
        <Grid item xs={1}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: "1rem",
              padding: "12px",
            }}
          >
            <Twitter />
            <Telegram />
            <Facebook />
          </div>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body" gutterBottom paragraph>
            how are you xjfjf skjhouf skjhfgiuf Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Reprehenderit numquam minus facilis
            aut atque reiciendis deleniti perspiciatis necessitatibus, eum,
            optio aperiam dicta ipsam totam magnam exercitationem dolorum nobis
            quis qui. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit numquam minus facilis aut atque reiciendis deleniti
            perspiciatis necessitatibus, eum, optio aperiam dicta ipsam totam
            magnam exercitationem dolorum nobis quis qui. Ho how are you xjfjf
            skjhouf skjhfgiuf Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Reprehenderit numquam minus facilis aut atque
            reiciendis deleniti perspiciatis necessitatibus, eum, optio aperiam
            dicta ipsam totam magnam exercitationem dolorum nobis quis qui.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit numquam minus facilis aut atque reiciendis deleniti
            perspiciatis necessitatibus, eum, optio aperiam dicta ipsam totam
            magnam exercitationem dolorum nobis quis qui. Ho how are you xjfjf
            skjhouf skjhfgiuf Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Reprehenderit numquam minus facilis aut atque
            reiciendis deleniti perspiciatis necessitatibus, eum, optio aperiam
            dicta ipsam totam magnam exercitationem dolorum nobis quis qui.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit numquam minus facilis aut atque reiciendis deleniti
            perspiciatis necessitatibus, eum, optio aperiam dicta ipsam totam
            magnam exercitationem dolorum nobis quis qui. Ho how are you xjfjf
            skjhouf skjhfgiuf Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Reprehenderit numquam minus facilis aut atque
            reiciendis deleniti perspiciatis necessitatibus, eum, optio aperiam
            dicta ipsam totam magnam exercitationem dolorum nobis quis qui.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit numquam minus facilis aut atque reiciendis deleniti
            perspiciatis necessitatibus, eum, optio aperiam dicta ipsam totam
            magnam exercitationem dolorum nobis quis qui.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <Typography
          gutterBottom
          variant="h4"
          paragraph
          style={{ color: "#000080", textAlign: "center", margin: "3rem auto" }}
        >
          Keep Reading
        </Typography>
      </Grid>
      <Grid item container xs={12} spacing={2} style={{ marginBottom: "3rem" }}>
        <Grid item xs={4}>
          <BlogCard />
        </Grid>
        <Grid item xs={4}>
          <BlogCard />
        </Grid>
        <Grid item xs={4}>
          <BlogCard />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Singlepost;
