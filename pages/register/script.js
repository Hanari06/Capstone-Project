function register() {
    let registrationRequest = {
        "fname" : $("#fname").val(),
        "lname" : $("#lname").val(),
        "username" : $("#username").val(),
        "password" : $("#password").val(),
        "confirmPassword" : $("#confirmPassword").val()
    }

    $.ajax({
        "url" : REGISTER_API, //URL of the API
        "type" : "POST", //GET and POST 
        "data" : "register=" + JSON.stringify(registrationRequest), //auth will be our php variable $_POST['auth']
        //JS JSON.stringify -> PHP json_decode
        //PHP json_encode -> JSON.parse
        //5. Check your API and do the process
        "success" : function (response) { //success yung response
            console.log(response)
            /**
             * 6. Check the response and parse it thru JSON.parse
             */

            // let parseResponse = JSON.parse(response);
            // $("#container").html("<h1>" + parseResponse.title + "</h1>" + "<h2>" + parseResponse.description + "</h2>");

            let parseResponse = JSON.parse(response);
            let description = '';
            let bgcolor = '';

            
            
            if(parseResponse.description == "Successfully Saved")
            {
                description = "Ang iyong account ay nasa talaan na. Maaaring mag-sign in.";
                bgcolor = "alert alert-success";

            }
            if(parseResponse.description == "Error while saving user")
            {
                description = "Nagkaproblema habang nagtitipon ng account. Maaaring ulitin muli.";
                bgcolor = "alert alert-danger";
                
            }
            if(parseResponse.description == "Username already exist")
            {
                description = "Ang username ay gamit na. Maaaring gumawa muli ng panibago.";
                bgcolor = "alert alert-warning";
                
            }
            if(parseResponse.description == "Password does not match")
            {
                description = "Ang password ay hindi tugma. Maaaring ulitin muli.";
                bgcolor = "alert alert-warning";
                
            }

            let alerts='<div class="'+ bgcolor +'" role="alert">'+
            description + '</div>';

            $("#container").html(alerts);


            
            /**
             * If successful yung login
             */
            if (parseResponse.status == 200) {
                window.location.href = "pages/dashboard";
            }

        },
        "error" : function (xhr, status, error) { //error yung response
            alert("Error")
        }
    });
}

// $response = createResponse(200, "Matagumpay", "Ang iyong account ay nasa talaan na. Maaaring mag-sign in.");
// $response = createResponse(300, "Error", "Nagkaproblema habang nagtitipon ng account. Maaaring ulitin muli.");
// $response = createResponse(300, "Error", "Ang username ay gamit na. Maaaring gumawa muli ng panibago.");