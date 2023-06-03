if (document.URL.includes("?lang=de")){
    document.getElementById("selection_gallery").innerHTML="Galerie";
    document.getElementById("selection_about").innerHTML="Über mich";
    document.getElementById("back_button").innerHTML="[ Zurück ]";
    document.getElementById("selection_portfolio").setAttribute("href","portfolio.html?lang=de");
    document.getElementById("selection_gallery").setAttribute("href","gallery.html?lang=de");
    document.getElementById("selection_about").setAttribute("href","about.html?lang=de");
}

else if(document.URL.includes("?lang=es")){
    document.getElementById("selection_gallery").innerHTML="Garería";
    document.getElementById("selection_about").innerHTML="Sobre mí";
    document.getElementById("back_button").innerHTML="[ Volver ]";
    document.getElementById("selection_portfolio").setAttribute("href","portfolio.html?lang=es");
    document.getElementById("selection_gallery").setAttribute("href","gallery.html?lang=es");
    document.getElementById("selection_about").setAttribute("href","about.html?lang=es");
}
else{
    console.log("Eng/Nichts")
}


