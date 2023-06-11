let firstName = prompt("What is your first name?");
firstName = firstName.trim();
if (firstName === "") {
  alert(" Too bad for you!! ");
} else {
  alert(" Welcome, " + firstName + " ! ");
}
