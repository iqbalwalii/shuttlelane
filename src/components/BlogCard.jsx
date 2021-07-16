import Link from "next/link";
import { PersonSharp } from "@material-ui/icons";
import blog from "../styles/Blog.module.css";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function MediaCard({ post }) {
  return (
    <div className={blog.Card}>
      <img src={`${prefix}/assets/images/car.jpg`} alt="" />
      <div className={blog.cardBody}>
        <div className={blog.author}>
          <p>
            <PersonSharp />
            Batman
          </p>
          <p>01:54:12</p>
        </div>
        <h3>{post.heading}</h3>
        <p>{post.postDescription}</p>
        <button>
          <Link href="/blog/single">
            <a>Read More..</a>
          </Link>
        </button>
      </div>
    </div>
  );
}
