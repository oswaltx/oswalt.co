
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

var lang_cookie = getCookie("lang")
console.log("cookie: " + lang_cookie)

if(lang_cookie == "" || lang_cookie == NaN){
    document.getElementById("lang_de").onclick = function () {
        console.log("Deutsch")
        setCookie("lang", "de", 7)
    };
    
    document.getElementById("lang_en").onclick = function () {
        console.log("Englisch")
        setCookie("lang", "de", 7)
    };
    
} 

