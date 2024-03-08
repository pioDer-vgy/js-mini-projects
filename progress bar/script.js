const progress = document.querySelector("#progress");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const circles = document.querySelectorAll(".circle");

let current = 1;

prev.addEventListener("click", () => {
    current--;
    if(current < 1) {
        current = 1;
    }
    update();
})

next.addEventListener("click", () => {
    current++;
    if(current > circles.length) {
        current = circles.length;
    }
    update();
})

function update() {
    circles.forEach((circles, index) => {
        if(index < current) {
            circles.classList.add('active');
        } else{
            circles.classList.remove('active');  
        }
    })

    let active = document.querySelectorAll('.active');

    progress.style.width = (active.length -1) / (circles.length -1) * 100 + '%';

    if(current == 1)
    {
        prev.disabled = true;
    }

    else if(current == circles.length)
    {
        next.disabled = true;
    }

    else
    {
        next.disabled = false;
        prev.disabled = false;
    }
}