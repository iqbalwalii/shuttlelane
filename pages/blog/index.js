import BlogCard from "../../components/BlogCard";
import BlogHeader from "../../components/BlogHeader";
import BlogAside from "../../components/BlogAside";
import blog from "../../styles/Blog.module.css";
// import fetch from 'isomorphic-fetch';
import { useRouter } from "next/router";

import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";

const BlogList = ({ posts }) => {
  const router = useRouter();
  console.log(posts);
  return (
    <>
      <section
        style={{
          padding: "1rem 2rem 0 7rem",
          background: "#f8f8f8",
          width: "100vw",
        }}
        className={blog.blogMain}
      >
        <Grid container spacing={5} className={blog.cards}>
          {[
            {
              heading: "title goes here",
              postDescription: "title goes here also your description ",
            },
            {
              heading: "title goes here",
              postDescription: "title goes here also your description ",
            },
          ]?.map((post) => {
            return (
              <Grid key={post._id} item xs={12} sm={4}>
                <BlogCard post={post} />
              </Grid>
            );
          })}
        </Grid>
        <BlogAside />
      </section>
    </>
  );
};

export default BlogList;
