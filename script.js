AOS.init({once: true});
$(document).ready(function() {
    if(!$('#myCanvas').tagcanvas({
      textColour : '#a5a5a5',
      outlineThickness : 0.5,
      outlineColour : '#FE0853',
      maxSpeed : 0.06,
      freezeActive:true,
      shuffleTags:true,
      shape:'sphere',
      zoom:1,
      noSelect:true,
      textFont: 'calibri',
      pinchZoom:true,
      freezeDecel:true,
      fadeIn:1000,
      initial: [0.3,-0.1],
      depth : 1.1
    },'tags')) {
      // something went wrong, hide the canvas container
      $('#myCanvasContainer').hide();
    }
  });


const header = document.querySelector("header");

document.body.style.overflow = "hidden";

setTimeout(() => {
    document.body.style.overflow = "visible";
}, 3000);


let screen = window.innerHeight;
if(screen >= 947)
{
    screen = 1080
}
const transColor = document.querySelectorAll(".color-trans");

window.onscroll = (e) =>
{
    
    if(window.pageYOffset < screen)
    {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        header.style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))';
        changeColor("rgba(255, 255, 255, 0.7)")
    }
    if(window.pageYOffset >= screen)
    {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        header.style.backgroundImage = 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))';
        changeColor("rgba(0, 0, 0, 0.7)")
    }
    if(window.pageYOffset >= (screen * 2.9))
    {        
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        header.style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))';
        changeColor("rgba(255, 255, 255, 0.7)")
    }
    if(window.pageYOffset >= (screen * 4.9))
    {        
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        header.style.backgroundImage = 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))';
        changeColor("rgba(0, 0, 0, 0.7)")

    }
}

if (transColor.length > 0) {
    
    function changeColor(color) { 
        for (const changeOne of transColor) {
            changeOne.style.color = color;
        }
     }
    
}

const mainLoader = document.querySelector(".loader")

if(mainLoader)
{
    setTimeout(() => {
        mainLoader.setAttribute("class", "second_loader");
        setTimeout(() => {
            mainLoader.setAttribute("class", "third-loader");
            setTimeout(() => {
                mainLoader.setAttribute("class", "fourth-loader");
                setTimeout(() => {
                    mainLoader.style.backgroundColor = "black";
                    document.querySelector(".first-animate").style.color = "white"
                    setTimeout(() => {
                        mainLoader.remove();
                    }, 1000);
                }, 500);
            }, 350);
        }, 350);
    }, 350);
}

setTimeout(() => {
    const before = document.querySelector(".pure-circle");
    before.classList.add("mybefore");
}, 4700);




addEventListener("resize", (e) =>
{
    
    setStatus()
})


function setStatus()
{
    const canvas = document.querySelector("canvas");
    if (window.innerWidth > 500) {
        canvas.height = 500;
        canvas.width = 500;
    }else if (window.innerWidth <= 500) {        
        canvas.height = 320;
        canvas.width = 320;
    }
}

setStatus()