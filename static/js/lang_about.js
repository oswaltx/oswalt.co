if (document.URL.includes("?lang=de")){
    document.getElementById("title").innerHTML="Über mich";
    document.getElementById("about_text").innerHTML="Hallo, Ich bin David Oswalt, 18 Jahre alt und komme aus Berlin. Das hier ist meine Webseite. Für weitere Fragen können Sie mir gerne eine Mail schreiben:";

    document.getElementById("navHome").setAttribute("href", "index.html?lang=de");
    document.getElementById("navHome").innerHTML="Startseite";


    document.getElementById("navPortfolio").setAttribute("href", "portfolio.html?lang=de");


    document.getElementById("navGallery").setAttribute("href", "gallery.html?lang=de");
    document.getElementById("navGallery").innerHTML="Galerie";

    document.getElementById("navAbout").setAttribute("href", "about.html?lang=de");
    document.getElementById("navAbout").innerHTML="Über mich";
    }

if (document.URL.includes("?lang=es")){
    document.getElementById("title").innerHTML="Sobre mí";
    document.getElementById("about_text").innerHTML="Hola, Soy David Oswalt, tengo 18 años y soy de Berlín. Esta es mi página web. Si tienes más preguntas, no dudes en enviarme un correo electrónico:";

    document.getElementById("navHome").setAttribute("href", "index.html?lang=es");
    document.getElementById("navHome").innerHTML="Página de inicio";


    document.getElementById("navPortfolio").setAttribute("href", "portfolio.html?lang=es");


    document.getElementById("navGallery").setAttribute("href", "gallery.html?lang=es");
    document.getElementById("navGallery").innerHTML="Galería";

    document.getElementById("navAbout").setAttribute("href", "about.html?lang=es");
    document.getElementById("navAbout").innerHTML="Sobre mí";
    }

