// i spent a long time deciding what to use as a cookie
// eventually i decided to go with the light mode/dark mode
// i feel like this is a good choice, becuase i dont feel comfortable holding user data
// also who doesnt like dark mode? perhaps it should be defualt :D

function setCookie(cname, cvalue, _) 
{

    var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "expires="+ d.toUTCString();
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
  
function inFunc(id, list)
{
    for(var i = 0; i < list.length; i++)
    {
        if(id == list[i])
        {
            return true
        }
    }
    return false;
}

function setImgs(eleList, excludeIDs)
{
    for(let i = 0; i < eleList.length; i++)
    {

        if(!inFunc(eleList[i].id,excludeIDs))

        {
            eleList[i].style.filter = 'invert(100%)';
        }
    }

}

function resetImgs(eleList, excludeIDs)
{
    for(let i = 0; i < eleList.length; i++)
    {

        if(!inFunc(eleList[i].id,excludeIDs))

        {
            eleList[i].style.filter = 'invert(0%)';
        }
    }

    

}


function setInvert()
{

    document.querySelector('html').style.filter = 'invert(100%)';
    let imgs = document.getElementsByTagName("img");
    
    
    setImgs(imgs, ["lPoint", "rPoint"]);

    setCookie("mode", "dark");
    let tryElement = document.getElementById("darkH3");
    tryElement.innerHTML = "Try light mode!";

}

function resetInvert()
{

    document.querySelector('html').style.filter = 'invert(0%)';
    let imgs = document.getElementsByTagName("img");
    
    
    resetImgs(imgs, ["lPoint", "rPoint"]);

    setCookie("mode", "light");

    let tryElement = document.getElementById("darkH3");
    tryElement.innerHTML = "Try dark mode!";
    

}

// just to make sure everything is loaded
window.addEventListener('DOMContentLoaded', () => {
    if(getCookie("mode")=="dark")
    {
        setInvert();

    }
    else
    {
        resetInvert();

    }
});


