
(function(){
  emailjs.init("PmrBcSA2c0k8MzzOz"); 
})();

document.getElementById("contact-form")
.addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm(
    "service_n01kz32",
    "template_7y7df3j",
    this
  ).then(function() {
      alert("Message Sent Successfully ✅");
    }, function(error) {
      alert("Failed to send ❌");
      console.log(error);
    });
});
