async function sendSMS(message, number) {
  const accountSid = "AC3319551d170c34d5e479c10b28e5ffef";
  const authToken = "b5b94b01354d84f1c55bae3315cb28df";
  const client = require("twilio")(accountSid, authToken);
  console.log("Client TWILO", client);
  client.messages
    .create({
      body: { message },
      from: "+447429738615",
      to: { number },
    })
    .then((message) => {
      console.log("Sent");
      console.log(message.sid);
      return 'success SMS';
    });
}

module.exports = sendSMS;
