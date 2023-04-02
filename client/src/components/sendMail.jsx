import { useState, useEffect } from "react";
import { sendEmail } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";





const sendEmail=()=>{
    
    const [data, setData] = useState(null);

    const navigate = useNavigate();
    const {id}= useParams();

    useEffect(()=>{
        loadDataDetails();
    },[])

    const loadDataDetails = async() =>{
        const response = await sendEmail(id);
        // console.log(response.data);
        setData(response.data);
        // console.log(response.data);
    }

const nodemailer = require('nodemailer');

// Retrieve the data
// /const data = [{id: 1, name: 'John', age: 30}, {id: 2, name: 'Jane', age: 25}];

// Format the data
const table = "<table><thead><tr><th>Field 1</th><th>Field 2</th></tr></thead><tbody>";
    for (let i = 0; i < data.length; i++) {
      table += `<tr><td>${data[i].field1}</td><td>${data[i].field2}</td></tr>`;
    }
    table += "</tbody></table>";

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sender@gmail.com',
    pass: 'Peeyush@123'
  }
});

// Create an email
const mailOptions = {
  from: 'sender@gmail.com',
  to: 'receiver@gmail.com',
  subject: 'CRUD Data',
  html: table
};

// Send the email
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    
  }
});

}
export default sendEmail;