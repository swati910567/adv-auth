import {MailtrapClient} from "mailtrap";
import dotenv from "dotenv";

dotenv.config();


//const TOKEN = process.env.MAILTRAP_TOKEN;
//const ENDPOINT=process.env.MAILTRAP_ENDPOINT;

export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
  //endpoint:ENDPOINT
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Swati",
};
