let number1 = document.getElementById("number1");

number1.addEventListener('click', function() {
    console.log("click");
    let thing1 = document.getElementById("thing-1");
    thing1.style.display = 'block';
    let wifeEmoji = document.getElementById("wife-emoji");
    wifeEmoji.style.display = 'block';
    let container = document.getElementById("container1");
    container.style.backgroundColor = '#C96B6B';

});

let number2 = document.getElementById("number2");

number2.addEventListener('click', function() {
    console.log("click");
    let thing2 = document.getElementById("thing-2");
    thing2.style.display = 'block';
    let catEmoji = document.getElementById("cat-emoji");
    catEmoji.style.display = 'block';
    let container = document.getElementById("container2");
    container.style.backgroundColor = '#5D8FCC';
});

let number3 = document.getElementById("number3");

number3.addEventListener('click', function() {
    console.log("click");
    let thing3 = document.getElementById("thing-3");
    thing3.style.display = 'block';
    let programmingEmoji = document.getElementById("programming-emoji");
    programmingEmoji.style.display = 'block';
    let container = document.getElementById("container3");
    container.style.backgroundColor = '#4B6A91';
});




number1.addEventListener('mouseover', function() {
    number1.src = "assets/number1-white.png";
})
number1.addEventListener('mouseout', function() {
    number1.src = "assets/number1-black.png";
})


number2.addEventListener('mouseover', function() {
    number2.src = "assets/number2-white.png";
})
number2.addEventListener('mouseout', function() {
    number2.src = "assets/number2-black.png";
})

number3.addEventListener('mouseover', function() {
    number3.src = "assets/number3-white.png";
})
number3.addEventListener('mouseout', function() {
    number3.src = "assets/number3-black.png";
})

