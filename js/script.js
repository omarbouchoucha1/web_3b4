window.addEventListener('load', function () {
    document.getElementById("inscription").addEventListener("submit", function(e) {
        nameValidation();
        lastNameValidation();
        emailValidation();
        e.preventDefault();
    });
    function nameValidation() {
        let name = document.getElementById("nom");
        let par = document.getElementById("p_nom");
    
        par.innerHTML = "";
    
        if (name.value.length < 3) {
            par.innerHTML = "Le nom doit avoir au moins 3 caractères";
        }
    
        if (!name.value.match(/^[A-Za-z]+$/)) {
            par.innerHTML = "Le nom doit contenir uniquement des lettres";
        }
    }
    
    function lastNameValidation() {
        let lastName = document.getElementById("prenom");
        let par = document.getElementById("p_prenom");
    
        par.innerHTML = ""; 
    
        if (lastName.value.length < 3) {
            par.innerHTML = "Le prénom doit avoir au moins 3 caractères";
        }
    
        if (!lastName.value.match(/^[A-Za-z]+$/)) {
            par.innerHTML = "Le prénom doit contenir uniquement des lettres";
        }
    }
    
    function emailValidation() {
        let email = document.getElementById("email");
        let par = document.getElementById("p_email");
    
        par.innerHTML = "";
    
        if (email.value.length < 3) {
            par.innerHTML = "L'email doit avoir au moins 3 caractères";
        }
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
        if (!emailRegex.test(email.value)) {
            par.innerHTML = "Veuillez entrer une adresse email valide";
        }
    }
});


