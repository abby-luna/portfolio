
// form validation, we use the captcha object here
// i dont like how much its passed around tho, 
// if i was to redo this project i would definetly use a Validate Object 
// i would also look into inheritence in js, this is a great opertunity to inherit captchas stuff!

function validateName()
{
    let nameElement = document.getElementById("name");
    let error = document.getElementById("error1");

    if(nameElement.value.length == 0 || nameElement.value == "")
    {
        error.innerHTML = "*Name is required"
        return false;
    }

    error.innerHTML ="";
    return true;
}

function validateEmail()
{
    let emailElement = document.getElementById("email1");
    let error = document.getElementById("error4");
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 


    if(emailElement.value.length == 0 || emailElement.value == "")
    {
        error.innerHTML = "*Email is required"
        return false;
    }

    if(!regex.test(emailElement.value))
    {
        error.innerHTML ="*Invalid Format";
        return false;
    }

    error.innerHTML ="";
    return true;
}


function validateEmail2()
{
    let firstEmailElement = document.getElementById("email1");
    let emailElement = document.getElementById("email2");
    let error = document.getElementById("error5");

    if(firstEmailElement.value != emailElement.value)
    {
        error.innerHTML ="*Emails must match";
        return false;
    }
    error.innerHTML ="";
    return true;
}

function validateUrl()
{
    let urlElement = document.getElementById("website");
    let error = document.getElementById("error3");
    const regex = /^[-a-zA-Z0-9@:%._\+~#=\/]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/; 


    if(urlElement.value.length == 0 || urlElement.value == "")
    {
        return true;
    }

    if(!regex.test(urlElement.value))
    {
        error.innerHTML ="*Invalid Format";
        return false;
    }

    error.innerHTML = "";
    return true;
}


function validateQuery()
{
    let qElement = document.getElementById("query");
    let error = document.getElementById("error6");

    if(qElement.value.length == 0 || qElement.value == "")
    {
        error.innerHTML = "*Query is required"
        return false;
    }

    error.innerHTML = "";
    return true;
}

function validateCaptcha(cap)
{
    let capElement = document.getElementById("captcha");
    let error = document.getElementById("error7");

    if(capElement.value != cap.getAnswer())
    {
        error.innerHTML = "*Not a match";
        return false;
    }
    return true;
}


function validateForm(cap) 
{


    return validateName() && 
           validateUrl() &&
           validateEmail() &&
           validateEmail2() &&
           validateQuery() &&
           validateCaptcha(cap);

    
}

function processForm(event, cap)
{
    if(!validateForm(cap))
    {
        event.preventDefault();
    }
}