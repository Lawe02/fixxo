const validateEmail = (event) => 
{
    const regEx = /^[^@\s]+@[^@\s]+$/;
    if(!regEx.test(event.target.value))
    {
        document.getElementById("error-email").innerText = "Ange en giltig e-post address";
    }
    else{
        document.getElementById("error-email").innerText = "";
    }
}
const validateName = (event) => 
{
    const regEx = /^[a-zA-Z -]+$/;
    
    if(!regEx.test(event.target.value))
    {
        document.getElementById("error-name").innerText = "Ange ett riktigt namn";
    }
    else{
        document.getElementById("error-name").innerText = "";
    }
}
