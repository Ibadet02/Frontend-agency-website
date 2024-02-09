// import * as functions from "firebase-functions";
// import * as admin from "firebase-admin";
// import * as nodemailer from "nodemailer";

// const gmailEmail = functions.config().gmail.email;
// const gmailPassword = functions.config().gmail.password;

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: gmailEmail,
//     pass: gmailPassword,
//   },
// });

// admin.initializeApp();

// export const sendEmail = functions.firestore
//   .document("formData/{docId}")
//   .onCreate(async (snapshot: { data: () => any }, context: any) => {
//     const formData = snapshot.data();
//     const { name, email, otherData } = formData;

//     try {
//       await transporter.sendMail({
//         from: gmailEmail,
//         to: "ibadetismayilov20@gmail.com",
//         subject: "New Form Submission",
//         text: `Name: ${name}\nEmail: ${email}\nOther Data: ${otherData}`,
//       });
//       console.log("Email sent successfully");
//     } catch (error) {
//       console.error("Error sending email:", error);
//     }
//   });
