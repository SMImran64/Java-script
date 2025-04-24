

var count = 1;

function Fill(selectedElement) {
    document.getElementById(selectedElement).innerHTML = "X";

    if (count <= 9) {

    if (count % 2 != 0){

        document.getElementById(selectedElement).innerHTML = "X";
    } 
    else {
        document.getElementById(selectedElement).innerHTML = "O";
    }
    count++;
    if (winner()) {
        alert("Winnner");
        clear();
    }

}else{
    alert("Match Draw!");
    clear();
}

}

function clear(){
    for (var i = 1; i <= 9; i++){
        document.getElementById("box" + i).innerHTML = "";
    }
    count = 1;

}

function winner() {

    if (checkCondition("box1", "box2", "box3") || checkCondition("box4", "box5", "box6") || checkCondition("box7", "box8", "box9") || checkCondition("box1", "box4", "box7")|| checkCondition("box2", "box5", "box8") || checkCondition("box3", "box6", "box9") || checkCondition("box1", "box5", "box9") || checkCondition("box3", "box5", "box7")){ 
        }
return true;
}

function checkCondition(box1, box2, box3) {
    if (getData(box1) != "" && getData(box2) != "" && getData(box3) != "" && getData(box1) == getData(box2) && getData(box3) ){
        return true;
    }
}
function getData(box){

    return document.getElementById(box).innerHTML;
} 
