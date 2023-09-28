window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Validate phone number and email format
        const fname = document.getElementById('user_fname').value;
        const lname = document.getElementById('user_lname').value;
        const message = document.getElementById('user_message').value;
        const phone = document.getElementById("user_phone").value;
        const email = document.getElementById("user_email").value;

        if (fname.trim() === '' || lname.trim() === '' || message.trim() === '' || phone.trim() === '' || email.trim() === ''){
            alert('Please fill out all parts of the form.');
            return
        } else if (!phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
            alert("Please enter a valid phone number of the format xxx-xxx-xxxx.");
            return;
        } else if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/)){
            alert("Please enter a valid email address of the format username@domain.tld");
            return;
        }
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_4b10mse', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
        alert('Email sent!')
    });
}