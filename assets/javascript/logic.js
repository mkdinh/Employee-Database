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
var date;
var rate;
var monthsWorked;
var totalBilled;

var database = firebase.database();

updateList();

// Capture Button Click
$("#submit").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text boxes
    name = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    date  = $("#date-input").val().trim();
    console.log(date)
    rate = $("#rate-input").val().trim();

    // Code for handling the push
    database.ref().push({
        name: name,
        role: role,
        date: date,
        rate: rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    var markup = "<tr><td>" + name + "</td><td>" + role + "</td><td>" + date + "</td><td>" + monthsWorked + "</td><td>" + rate + "</td><td>" + totalBilled + "</td></tr>";
    $("table tbody").append(markup);
    updateList()
});

function updateList(){
    $(".tbody").empty();
    firebase.database().ref().on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            // key
            var key = childSnapshot.getKey();
            // value, could be object
            var childData = childSnapshot.val();
            monthsWorked = moment().diff(childData.date,"months") ;     
            totalBilled = parseInt(monthsWorked) * childData.rate;
            var markup = "<tr><td>" + childData.name + "</td><td>" + childData.role + "</td><td>" + childData.date + "</td><td>" + monthsWorked + "</td><td>" + childData.rate + "</td><td>" + totalBilled + "</td></tr>";
            $(".tbody").append(markup);
        });
    });
}
