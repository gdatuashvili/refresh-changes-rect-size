




// ================= task 2 =======================================================
// create green div and clicking refresh changes its width and height 
// from range of 50px to 300px;

var div = document.getElementById('div');
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function changeDivSize() {
    div.style.width = (`${random(50, 300)}px`);
    div.style.height = (`${random(50, 300)}px`);
}
changeDivSize();

// ================= end task 2 =================================================

