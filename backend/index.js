var express = require("express");
var next = require("next");
var { json, urlencoded } = require("body-parser");
var cors = require("cors");
const dbConnect = require("./utils/db");
const postRouter = require("./resources/post/post.router");
const bookingRouter = require("./resources/booking/booking.router");
const hotelRouter = require("./resources/hotel/hotel.router");
// const driveRouter = require('./resources/drive/drive.router');
const fleetRouter = require("./resources/fleet/fleet.router");
const userRouter = require("./resources/user/user.router");
const auth = require("./utils/auth");
const port = process.env.PORT || 3001;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

function sign(req, res, next) {
  console.log("In Middleware");
  next();
}
app.prepare().then(() => {
  const server = express();
  dbConnect();

  // middleware
  server.use(cors());
  server.use(json());
  server.use(urlencoded({ extended: true }));
  server.use(express.static("./src/public"));
  server.use("/api/booking/pickup", bookingRouter);
  server.use("/api/fleet", fleetRouter);
  server.use("/api/hotel", hotelRouter);
  // server.use('/api/drive', driveRouter);
  server.use("/api/posts", postRouter);
  server.use("/api/users", sign, userRouter);

  server.post("/api/signin", auth.signIn);
  server.post("/api/signup", auth.signUp);

  // next handler
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Ready on http://localhost:${port}`);
  });
});
