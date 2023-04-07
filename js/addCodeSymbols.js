// i wanted a good way to add our favorite markup symbols to the site
// i feel like manuelly doing something like this would lead to inconsitancy
// knowing me, i would forget in one of them! 
// this also saved a suprising amount of time while i was developing
// 10/10 would do again :D

function addSymbols()
{
    var elements = document.getElementsByTagName("h1");
    for(var i=0; i<elements.length; i++)
    {
        elements[i].innerHTML = "&#60;"+elements[i].innerHTML+"&#62;";
    }
}