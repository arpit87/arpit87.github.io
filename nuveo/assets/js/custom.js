function checkVote(key){
    const gob= localStorage.getItem(key);
    if (gob!=null){
        showSnackbar("You have already voted for" + gob + ". No second chances");
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
        gender = optionSel.value
        console.log("selected: " + optionSel);
        localStorage.setItem(key, optionSel.value);
        window.location = "Thankyou.html"
    }
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