const user = document.getElementById("user");
const pass = document.getElementById("pass");
const form = document.getElementById("form");


const expresiones = {
     validacion : /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
}

form.addEventListener("submit", e =>{
    e.preventDefault();
    
    if( expresiones.validacion.test(pass.value)){
        $("#msg-2").addClass("message-2");
        $("#msg-2").removeClass("par-2");
        $("#chec").addClass("check-1");
        $("#chec").removeClass("check-condition-1");

        $("#msg").removeClass("message");
        $("#msg").addClass("par");
        $("#cross").removeClass("mistake-1");
        $("#cross").addClass("mistake-condition-1");
        
         window.location="index.html";

    }
    else{
        $("#msg").addClass("message");
        $("#msg").removeClass("par");
        $("#cross").addClass("mistake-1");
        $("#cross").removeClass("mistake-condition-1");

        $("#msg-2").removeClass("message-2");
        $("#msg-2").addClass("par-2");
        $("#chec").removeClass("check-1");
        $("#chec").addClass("check-condition-1");
    }
})
