// This function runs when the "Show Message" button is clicked.
function showMessage() {
  // Find the paragraph in the page whose id is "profile-message".
  var message = document.getElementById("profile-message");

  // Replace the text inside that paragraph with a new message.
  message.textContent = "Thank you for viewing my resume!";
}
