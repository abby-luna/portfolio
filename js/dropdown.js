// good old dropdown! we love these

// what i was thing is

// CURRENT PAGE
// rest
// of
//pages
//in
//what
//ever
//order

// now that thats sorted! Vamos! 


// only one current page ((I HOPE!))
let mobileDropdown = document.getElementsByClassName("currentPage")[0];

mobileDropdown.addEventListener("click", function(event){

    if(window.matchMedia('(max-width: 991px)').matches)
    {
        event.preventDefault();
        let buttonList = document.getElementsByClassName("navigation-button");
        let iconList = document.getElementsByTagName("i");
        let positionIdicator = document.getElementById("horizontalRule");

        let type = iconList[0].className;

        if(type == "fa fa-arrow-down")
        {
            for (let i = 0; i < buttonList.length; i++) 
            {
                // let the mayhem begin!
                buttonList[i].style.display = "block";
                    
            }

            for(let i = 0; i < iconList.length; i++)
            {
                iconList[i].className = "fa fa-arrow-up"
            }

            positionIdicator.style.display = "block";
        }

        if(type == "fa fa-arrow-up")
        {
            for (let i = 0; i < buttonList.length; i++) 
            {
                // let the mayhem begin!
                buttonList[i].style.display = "none";
                    
            }

            mobileDropdown.style.display = "block";
            positionIdicator.style.display = "none";


            for(let i = 0; i < iconList.length; i++)
            {
                iconList[i].className = "fa fa-arrow-down"
            }
        }
        
    }

});

var desk = window.matchMedia("(min-width: 992px)");

desk.addEventListener("change", () => {
    let buttonList = document.getElementsByClassName("navigation-button");
    let iconList = document.getElementsByTagName("i");
    let positionIdicator = document.getElementById("horizontalRule");


    if(desk.matches)
    {
        for (let i = 0; i < buttonList.length; i++) 
        {
            // let the mayhem begin!
            buttonList[i].style.display = "inline";
        }

        for(let i = 0; i < iconList.length; i++)
        {
            iconList[i].className = "fa fa-arrow-down"
        }

        positionIdicator.style.display = "none";
    }
    else
    {
        for (let i = 0; i < buttonList.length; i++) 
        {
            // let the mayhem begin!
            buttonList[i].style.display = "none";
        }
    
        mobileDropdown.style.display = "block";


    }

});


