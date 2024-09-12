import { mailtrapClient ,sender} from "./mailtrap.config.js";
import {PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE} from './emailTemplates.js';
import { response } from "express";

export const sendVerificationEmail=async(email,verificationToken)=>{
    const recipient=[{email}];
   try {
    const response=await mailtrapClient.send({
        from:sender,
        to:recipient,
        subject:"Verify your email",
        html:VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
        category:"Email Verification"
    })
    console.log("Email sent successfully",response)
   } catch (error) {
    console.log(`Error sending verification` ,error);
    throw new Error(`Error sending verification email:${error}`)
   }
}

export const sendWelcomeEmail=async(email,name)=>{
    const recipient=[{email}];
  try {
    const reponse=await mailtrapClient.send({
        from:sender,
        to:recipient,
        template_uuid:"441483d5-e6c4-49fd-af37-c9d4847b0d66",
        template_variables:{
            "company_info_name": "Auth Company",
      "name": name,
        },
    });

    console.log("Email sent successfully",response);
  } catch (error) {
    console.error(`Error sending email`,error);
    throw new Error(`Error sending welcome email:${error}`);
  }
};

export const sendPasswordResetEmail =async(email,resetURL)=>{
  const recipient=[{email}];

  try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "Reset your password",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
			category: "Password Reset",
		});
   console.log("Password ",response);
	} catch (error) {
		console.error(`Error sending password reset email`, error);

		throw new Error(`Error sending password reset email: ${error}`);
	}
};

export const sendResetSuccessEmail=async(email)=>{
  const recipient=[{email}];
  try {
    const response=await mailtrapClient.send({
      from:sender,
      to:recipient,
      subject:"Password Reset Successful",
      html:PASSWORD_RESET_SUCCESS_TEMPLATE,
      Category:"Password Reset",
    });

    console.log("Password reset email sent successfully",response);
  } catch (error) {
    console.log("Error sending password reset success email",error);
    throw new Error(`Error sending password reset success email: ${error}`);
  }
}