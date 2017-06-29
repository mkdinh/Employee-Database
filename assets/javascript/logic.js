// Initialize Firebase
var config = {
apiKey: "AIzaSyCphFsW5p1yJTDGTDSMpNmHtIjjUdIiyp4",
authDomain: "employee-database-6a817.firebaseapp.com",
databaseURL: "https://employee-database-6a817.firebaseio.com",
projectId: "employee-database-6a817",
storageBucket: "employee-database-6a817.appspot.com",
messagingSenderId: "886032862159"
};

firebase.initializeApp(config);

var name = " ";
var role = " ";
var date  = $("#startdate-input").val().trim();
var rate = $("#monthlyrate-input").val().trim();

var database = firebase.database();

// Capture Button Click
$("#submit").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text boxes
    name = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    date  = $("#date-input").val().trim();
    rate = $("#rate-input").val().trim();

    // Code for handling the push
    database.ref().push({
    name: name,
    role: role,
    date: date,
    rate: rate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

});