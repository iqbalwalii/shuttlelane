async function sendSMS(obj) {
  // console.log("obj", obj);
  const accountSid = "AC3319551d170c34d5e479c10b28e5ffef";
  const authToken = "b5b94b01354d84f1c55bae3315cb28df";
  const client = require("twilio")(accountSid, authToken);
  client.messages
    .create({
      body: "YoYO",
      from: "+447429738615",
      to: +917006078236,
    })
    .then((message) => {
      console.log("Sent");
      console.log(message.sid);
    });
}

module.exports = sendSMS;
