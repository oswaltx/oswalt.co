if (document.URL.includes("?lang=de")){
    document.getElementById("title").innerHTML="Galerie";


    document.getElementById("navHome").setAttribute("href", "index.html?lang=de");
    document.getElementById("navHome").innerHTML="Startseite";


    document.getElementById("navPortfolio").setAttribute("href", "portfolio.html?lang=de");
    

    document.getElementById("navGallery").setAttribute("href", "gallery.html?lang=de");
    document.getElementById("navGallery").innerHTML="Galerie";

    document.getElementById("navAbout").setAttribute("href", "about.html?lang=de");
    document.getElementById("navAbout").innerHTML="Über mich";
}

if (document.URL.includes("?lang=es")){
    document.getElementById("title").innerHTML="Galería";


    document.getElementById("navHome").setAttribute("href", "index.html?lang=es");
    document.getElementById("navHome").innerHTML="Página de inicio";


    document.getElementById("navPortfolio").setAttribute("href", "portfolio.html?lang=es");
    

    document.getElementById("navGallery").setAttribute("href", "gallery.html?lang=es");
    document.getElementById("navGallery").innerHTML="Galería";

    document.getElementById("navAbout").setAttribute("href", "about.html?lang=es");
    document.getElementById("navAbout").innerHTML="Sobre mí";
}