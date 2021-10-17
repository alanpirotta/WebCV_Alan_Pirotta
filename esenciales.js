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
    <div>
        <a id="logo" href="index.html"><h2>Alan Pirotta</h2></a>  <!--logo de mi nombre, más grande y a la izq-->
    </div>
        <nav>
            <a class="nav ${pag_1}" href="index.html">SOBRE MI</a>
            <a class="nav ${pag_2}" href="experiencia_laboral.html">EXPERIENCIA LABORAL</a>
            <a class="nav ${pag_3}" href="conocimientos.html">CONOCIMIENTOS</a>
            <a class="nav ${pag_4}" href="contacto.html">CONTACTO</a>
        </nav>
    `

document.getElementById("footer").innerHTML = `
        <h3 class="footer_logo footer_start">
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
        <h4 class="footer_title footer_start">
            Octubre 2021
        </h4>
        <a class="footer_link" href="https://wa.me/541159659368" target="_blank">(54)11 5965-9368</a>
        <a class="footer_link" href="mailto:alanupirotta@gmail.com">alanupirotta@gmail.com</a>
        <div class="footer_link footer_end">
            <a href="https://www.linkedin.com/in/alan-uriel-pirotta/" class="fa fa-linkedin"  target="_blank"></a>
            <a href="https://github.com/alanpirotta" class="fa fa-github"  target="_blank"></a>
        </div>
        `