var pag_1, pag_2, pag_3, pag_4;

if (document.URL.includes("index.html")) {
    pag_1 = "pag_activa";
}else if(document.URL.includes("experiencia_laboral.html")){
    pag_2 = "pag_activa";
}else if(document.URL.includes("conocimientos.html")){
    pag_3 = "pag_activa";
}else{
    pag_4 = "pag_activa";
}

document.getElementById("header").innerHTML=
    `
    <nav class="nav_bar">
            <a id="logo" href="index.html"><h2>Alan Pirotta</h2></a>  <!--logo de mi nombre, más grande y a la izq-->
            <ul class="nav_menu">
            <li class="nav_item"> <a class="nav_link ${pag_1}" href="index.html">SOBRE MI</a></li>
            <li class="nav_item"> <a class="nav_link ${pag_2}" href="experiencia_laboral.html">EXPERIENCIA LABORAL</a></li>
            <li class="nav_item"> <a class="nav_link ${pag_3}" href="conocimientos.html">CONOCIMIENTOS</a></li>
            <li class="nav_item"> <a class="nav_link ${pag_4}" href="contacto.html">CONTACTO</a></li>
            </ul>
            <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        
        </nav>
    `

document.getElementById("footer").innerHTML = `
        <h3 class="footer_logo footer_start" id="name">
            Alan Pirotta
        </h3>
        <h4 class="footer_title">
            Whatsapp
        </h4>
        <h4 class="footer_title">
            Escríbeme
        </h4>
        <h4 class="footer_title footer_end">
            Sígueme
        </h4>
        <h4 class="footer_title footer_start" id="date">
            Octubre 2021
        </h4>
        <a class="footer_link" href="https://wa.me/541159659368" target="_blank">(54)11 5965-9368</a>
        <a class="footer_link" href="mailto:alanupirotta@gmail.com">alanupirotta@gmail.com</a>
        <div class="footer_link footer_end">
            <a href="https://www.linkedin.com/in/alan-uriel-pirotta/" class="fa fa-linkedin"  target="_blank"></a>
            <a href="https://github.com/alanpirotta" class="fa fa-github"  target="_blank"></a>
        </div>
        `

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))