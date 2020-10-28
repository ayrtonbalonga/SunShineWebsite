

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public_html')));
app.get('/', (request, response) =>
	response.sendFile(`${__dirname}/public_html/Main.html`));

app.post('/public_html', (request, response) => {
	const postBody = request.body;
	console.log(postBody);

	response.sendFile(`${__dirname}/public_html`);
});


app.listen(port, () => console.info('Application running on port 3000'));


var mysql = require('mysql');
var con = mysql.createConnection({
	host: "db4free.net",
	user: "supermanweb11",
	password: "ayrton12",
	database: "booking"
});

con.connect(function (err) {
	if (err) throw err;
	console.log("server Connected!");
	var sql = "Use  Booking";
	con.query(mysql, function (err, result) {
		if (err) throw err;
		console.log("Database connected");
	});


	app.post('/process', (request, respond) => {
		const postBody= resquest.body;
		
		
		const firstName = request.body.Name;
		const Surname = request.body.Surname;
		const Email = request.body.Email;
		const Phone_Number = request.body.PhoneNumber;
		const Date = request.body.Date;
		const Venu = request.body.WeedingVenu;

		var sql = "INSERT INTO booking(cusName,cusSurname, cusEmail, cusEmailPhone, cusEmail) VALUES(" + firstName + ", " + Surname + ", " + Email + ", " + PhoneNumber + ", " + date + "," + Venu + ");";

		conn.query(sql, function (error, result) {
			if (err) throw err;
			console.log("Record inserted");
		});




	});







	//app.post('/public_html', (request, respond) => {

		var nodemailer = require('nodemailer');
		var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'supermanweb11',
				pass: 'ayrton12'
			}
		});
		var mailOptions = {
			from: 'supermanweb11@gmail.com',
			to: 'supermanweb11@gmail.com',
			subject: 'Sending Email using Node.js',
			html: '<h1>Welcome</h1><p>Thannk you for trusting us in the coverage of you weedding</p>'
		};
		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
			}
		});


//	});

});




