const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// Resposnive
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


let mouse = {
    x: undefined,
    y: undefined 
};

window.addEventListener('mousemove', function (evt) {
    mouse.x = evt.x;
    mouse.y = evt.y;
});



class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.opacity = 1;
        this.color = color;
    }

    draw() {
        if(this.x + this.radius >= mouse.x 
        && this.x - this.radius <= mouse.x
        && this.radius <= 100) {
            this.radius++;          
        } else if (this.radius >= 30) {
            this.radius--;
        }

        
        // this.color = 'rgba(255,255,255, 1)';

        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();


    }
}

let circle = new Circle(100, 100, 30, '#ffce00');


function update() {
    requestAnimationFrame(update);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    circle.draw();    
}

requestAnimationFrame(update);