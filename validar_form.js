var form = document.getElementById('contact_form'), 
    elements = form.elements, 
    button = document.getElementById('contact_form_button');

var validateName = function (e) {
    if (form.name.value == 0) {
        alert("Complete el campo nombre");
        e.preventDefault();
    }
};
    
var validateMessage = function (e){
    if(form.message.value == 0){
        alert("Escriba un mensaje");
        e.preventDefault();          
    }
};

function validateRadio (e){
    //si fuera más opciones, se haría con un for
    if(form.subject_type[0].checked == true || form.subject_type[1].checked == true ){
    }else{
        alert("Selecciona el tema del mensaje");
        e.preventDefault();
    };
};

function validateMail (e){
    if(form.mail.value == 0){
        alert("Esciba un mail existente")
        e.preventDefault();
    }
};

var validate = function (e) {
    validateName(e);
    validateMessage(e);
    validateRadio(e);
    validateMail(e);

};

form.addEventListener("submit", validate);
