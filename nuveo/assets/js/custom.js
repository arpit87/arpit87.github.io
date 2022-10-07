class EasyHTTP {

    // Make an HTTP GET Request
    async get(url) {

        // Awaiting for fetch response
        const response = await fetch(url);

        // Awaiting for response.json()
        const resData = await response.json();

        // Returning result data
        return resData;
    }

    // Make an HTTP POST Request
    async post(url, data) {

        // Awaiting for fetch response and
        // defining method, headers and body
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Awaiting response.json()
        const resData = await response.json();

        // Returning result data
        return resData;
    }
}


function checkVote(key){
    const gob= localStorage.getItem(key);
    if (gob!=null){
        showSnackbar("You have already voted for " + gob + ". No second chances");
        return true;
    }
}

function onclickradio(key){
    console.log("gender selected");
    const optionSel=document.querySelector("input[name="+key+"]:checked");
    if(optionSel == null)
    {
        showSnackbar("Please select an option...");
    } else if (!checkVote(key))
    {
        var selection = optionSel.value
        console.log("selected: " + selection);

        callapi(key,selection);

    }
}

function  callapi(key, selection){
    var launchcode;
    const initAns = parseInt(selection);
    const id = 11540755;
    var url = "https://survey.freeonlinesurveys.com/formApi/saveFormdata";
    const http = new EasyHTTP;
    var returnVal = false
    switch (key){
        case "girlorboy":
            launchcode = "pNxCNFeM";
            break;
        case "girlsname":
            launchcode = "b2IhYEpm";
            break;
        case "boysname":
            launchcode = "ESiczFGn";
            break;
    }
    const jsonVal =
    {
        "launchCode": launchcode,
        "responses": [
        {
            "id": id,
            "subQuestions": [
                {
                    "subId": 1,
                    "answers": [
                        {
                            "intAns": initAns,
                            "text": ""
                        }
                    ]
                }
            ]
        }
    ],
        "sessionInformation": {
        "completed": true,
            "timeTaken": 0,
            "startTime": "06/10/2022 08:36:22",
            "domain": "",
            "countryCode": "IN",
            "trackedResponse": false,
            "anon": true,
            "responseStatus": 5
    }
    }

    document.getElementById("loader").style.display = "block";
    document.getElementById("vote").style.display = "none";
    // Post prototype method
    http.post(url,jsonVal)
        // resolving promise for response data
        .then(data => {console.log(data);
            document.getElementById("loader").style.display = "none";
            document.getElementById("vote").style.display = "block";
            localStorage.setItem(key, selection);
            window.location = "Thankyou.html"
        })

        // resolving promise for error
        .catch(err => {console.log(err);
            document.getElementById("loader").style.display = "none";
            document.getElementById("vote").style.display = "block";
        window.location="error.html";});
}

function showSnackbar(text) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    x.innerHTML = text;
    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}