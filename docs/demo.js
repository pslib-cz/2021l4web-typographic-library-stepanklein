const fixed = document.getElementById("fixed");
const navTop = document.getElementById("navTop");

function NavFixed(input){
    if(input.checked){
        fixed.innerHTML ="menu-top-fixed";
        navTop.classList.add("menu-top-fixed");
    }
    else{
        fixed.innerHTML ="";
        navTop.classList.remove("menu-top-fixed");
    }
}