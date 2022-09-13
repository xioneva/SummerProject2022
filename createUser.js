//https://youtu.be/z5-9sN4i7xE
var users = [
    {
        username: "timmy@gmail.com",
        password: "Testuser"
    },
    {
        username: "angel@gmail.com",
        password: "Testuser2"
    }
];

function checkInput(){
    var username = document.getElementById("fname").value;
    var password = document.getElementById("password").value;

    for (var i =0; i < users.length; i++){
        if(username==users[i].username && password==users[i].password){
            //https://stackoverflow.com/questions/65007092/redirecting-to-another-html-page-after-successful-login-attempt
            // window.location.replace("google.com");     //direct to home page
            location.href = "homePage.html";
            return;
        }
    }
    alert("Wrong username or password. Please try again.");
}