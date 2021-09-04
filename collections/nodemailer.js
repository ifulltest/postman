// moment module which can get current time for later email title to use.
const moment = require('moment')

let currentTime =  moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')

// file systme module which can operate the file
const fs = require("fs");

const path_fn = "D:/Software/postman/data/fn.txt"; // file path

const isExist_fn = fs.existsSync(path_fn); // check whether file exist

const filedata_fn = isExist_fn ? fs.readFileSync(path_fn, "utf-8") : "";

const fs_neg = require("fs");

const path_negfn = "D:/Software/postman/data/negfn.txt";

const isExist_negfn = fs_neg.existsSync(path_negfn);

const filedata_negfn = isExist_negfn ? fs_neg.readFileSync(path_negfn, "utf-8") : "";

console.log("Positive cases report name: "+filedata_fn);

console.log("Negative cases report name: "+filedata_negfn);

// Concatenate the email content
var arr=new Array();
arr.push("<p><font size='5'>Positive cases HTML report: </font></p>");

arr.push("<p><a href=https://ifulltest.github.io/postman/reports/"+filedata_fn+".html><b><font size='4'>https://ifulltest.github.io/postman/reports/"+filedata_fn+".html</font></b></a></p>");

arr.push("<p><font size='5'>Positive cases TXT report: </font></p>");

arr.push("<p><a href=https://ifulltest.github.io/postman/reports/"+filedata_fn+".txt><b><font size='4'>https://ifulltest.github.io/postman/reports/"+filedata_fn+".txt</font></b></a></p>");

arr.push("<p><font size='5'>Negative cases HTML report: </font></p>");

arr.push("<p><a href=https://ifulltest.github.io/postman/reports/"+filedata_negfn+".html><b><font size='4'>https://ifulltest.github.io/postman/reports/"+filedata_negfn+".html</font></b></a></p>");

arr.push("<p><font size='5'>Negative cases TXT report: </font></p>");

arr.push("<p><a href=https://ifulltest.github.io/postman/reports/"+filedata_negfn+".txt><b><font size='4'>https://ifulltest.github.io/postman/reports/"+filedata_negfn+".txt</font></b></a></p>");

var htmltxt = arr.join("");

console.log("htmltxt: "+htmltxt);

// Delay a specific time to ensure stakeholders can access the GitHub report details after receiving the email.
sleep(60000);
console.log("Delay a specific time to ensure stakeholders can access the GitHub report details after receiving the email.");
	
// nodemailer module which can operate email
var nodemailer = require("nodemailer")

var transport = nodemailer.createTransport({
	
    host: "smtp.gmail.com",
	
    secureConnection: true,
	
    port: 465,
	
    auth:{
		
        user: "sender email",
		
        pass: "your token"
		
    }
	
})

var mailOptions = {
	
    from: "sender email",
	
    to: "receiver email",
	
    subject: "Daily env check: "+currentTime,
	
    text: "Hello-text",
	
    html: htmltxt,
	
}

transport.sendMail(mailOptions, function(err, response) {
	
	if(err) console.log(err)
		
    else console.log(response)
	
})

// sleep time: mm
function sleep(delay) {
  for (var t = Date.now(); Date.now() - t <= delay;);
  return sleep;
}
