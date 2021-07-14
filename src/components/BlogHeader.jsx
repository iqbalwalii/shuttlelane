import blog from "../styles/Blog.module.css";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const BlogHeader = () => {
  return (
    <header className={blog.header}>
      <img
        src={`${prefix}/assets/images/car-1.gif`}
        alt="cars slide show carousel"
      />
    </header>
  );
};

export default BlogHeader;
