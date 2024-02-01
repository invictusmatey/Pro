function validateForm() {
    var username = document.forms["loginForm"]["uname"].value;
    var password = document.forms["loginForm"]["pass"].value;

    if (username == "") {
        alert("Please enter your username.");
        return false;
    }
    if (password == "") {
        alert("Please enter your password.");
        return false;
    }
    // You can add more validations if needed
}