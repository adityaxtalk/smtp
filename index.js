function sendEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let finalmessage = `Name : ${name} <br>  Email : ${email} <br>  Message : ${message} <br>`;
	Email.send({
	Host: "smtp.sendgrid.net",
	Username : "apikey",
	Password : "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",
	To : 'adityamaxjee@gmail.com',
	From : "aditya.blueconch@gmail.com",
	Subject : "Hello",
	Body : finalmessage,
	}).then(
		message => alert("mail sent successfully")
	).catch(error=>{
		alert(error)
	});
}