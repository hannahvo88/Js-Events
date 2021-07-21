
// The user hovers their mouse over an element
function changeBackground (e){
    paragraph.style.backgroundColor = "lightyellow";
}

let paragraph = document.getElementById('One');
paragraph.addEventListener("mouseover", changeBackground);


//The user clicks an element

function changeColour(e){
    mainPar.style.color ="red";
}

let mainPar = document.getElementById('Two');
mainPar.addEventListener("click", changeColour);


//The user presses the space key on their keyboard

    document.addEventListener ('keydown', (e) => {
        if (e.code  === "Space") {
            alert("You pressed the space key!");
        }
    });