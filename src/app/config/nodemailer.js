
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org", // Mailgun SMTP host
  port: 465, // SSL/TLS port
  secure: true, // Use TLS
  auth: {
    user: "portal@mx5.gtcmail.com", // Mailgun SMTP username
    pass: "d31a2f69af2b795ef0a632f1b11c79d1-653fadca-a3eb0f11", // Mailgun SMTP password
  },
});

export const mailOptions = {
  from: "portal@mx5.gtcmail.com",
  to: "support@gtcfx.com, support@gtcup.com, marginbonus@gtcfx.com",
  bcc: "mohammad.zeeshan@gtcfx.com",
};

export const mailOptionsJobs = {
  from: "portal@mx5.gtcmail.com",
  to: "careers@gtcfx.com",
  bcc: "zeeshan@gtcfx.com",
};

export const mailOptionsSupports = {
  from: "portal@mx5.gtcmail.com",
  to: "support@gtcfx.com",
  bcc: "zeeshan@gtcfx.com",
};

// config/mailgun.js
import Mailgun from "mailgun.js";
import formData from "form-data";

const mg = new Mailgun(formData);

export const mailgunClient = mg.client({
  username: "api",
  key: "fefaa6885175faea6d180940d69e415a-02300200-60e6fa68",
  url: "https://api.mailgun.net" || "https://api.mailgun.net",
});

export const MAILGUN_DOMAIN = "mx5.gtcmail.com" || "mx5.gtcmail.com";

export const MAILGUN_FROM =
  "GTCFX <portal@mx5.gtcmail.com>" || `GTCFX <postmaster@${MAILGUN_DOMAIN}>`;    
