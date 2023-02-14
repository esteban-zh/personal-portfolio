const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const mailchimp = require("@mailchimp/mailchimp_marketing");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("SERVER RUNNING...."));

mailchimp.setConfig({
  apiKey: "c2ff2f2c9177035a44294c1dea5aeb10-us21",
  server: "us21",
});

async function getInformationMembers() {
    // const response = await mailchimp.lists.getAllLists();
    // console.log(response);

      const response = await mailchimp.lists.getList("f23c3ed00b");
    //   console.log(response);
}
getInformationMembers();


const getListInformationMembers = async () => {
    const response = await mailchimp.lists.getListMembersInfo("f23c3ed00b");
    // console.log(response);
};

getListInformationMembers();

const addMemberList = async () => {
  const response = await mailchimp.lists.addListMember("f23c3ed00b", {
    email_address: "joselito@gmail.com",
    status: "subscribed",
  });
//   console.log(response);
};
addMemberList();


const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "eszahe302@gmail.com",
        pass: "lrjhnqpzcxtldctm"
    },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + ' ' + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "eszahe302@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

