getProfile()

let userID = "";
let userFirstName = "";
let userLastName = "";
let userName ="";


function getProfile() {
    $.ajax({
        "url" : PROFILE_API,
        "type" : "POST", 
        "data" : "getLoggedUser",
        "success" : function (response) {
            let parseResponse = JSON.parse(response);
            userID =parseResponse['data']['id'];
            userFirstName =parseResponse['data']['fname'];
            userLastName =parseResponse['data']['lname'];
            userName = userFirstName + " " + userLastName;


            if (parseResponse.status == 401) {
                window.location.href = "../../index.html";
            } 

        },
        "error" : function (xhr, status, error) {
            alert("Error")
        }
    });
 }

 function logout() {
    if (!confirm("Maraming salamat! Hanggang sa muli!")) {
        return;
    }

    $.ajax({
        "url" : PROFILE_API,
        "type" : "POST", 
        "data" : "logout",
        "success" : function (response) { 

            let parseResponse = JSON.parse(response);

            if (parseResponse.status == 200) {
                window.location.href = "../../index.html";
            }
            
        },
        "error" : function (xhr, status, error) { 
            alert("Error")
        }
    });

 }