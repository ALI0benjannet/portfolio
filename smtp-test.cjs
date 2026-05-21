const nm = require("nodemailer");
console.log("HOST:", process.env.SMTP_HOST);
console.log("PORT:", process.env.SMTP_PORT);
console.log("SECURE:", process.env.SMTP_SECURE);
console.log("USER:", process.env.SMTP_USER);
console.log("PASS_LEN:", (process.env.SMTP_PASS || "").length);
console.log("FROM:", JSON.stringify(process.env.SMTP_FROM));
console.log("TO:", process.env.TO_EMAIL);

const t = nm.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

t.verify()
  .then(() => {
    console.log("VERIFY OK");
    return t.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      subject: "[Portfolio Test] SMTP check",
      text: "If you see this, SMTP works.",
    });
  })
  .then((info) => console.log("SENT:", info.messageId, info.response))
  .catch((e) => {
    console.error("FAIL CODE:", e.code);
    console.error("FAIL MSG:", e.message);
    console.error("FAIL RESPONSE:", e.response);
  });
