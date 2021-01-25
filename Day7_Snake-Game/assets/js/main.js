const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let primary = 'rgba(253,110,186,1)';
let secondary = '#ed1d24';

const grid = 32;
let count = 0; //frames per second count
let score = 0;

let snake = {
    x: grid * 5,
    y: grid * 5,

    vx: grid, //one grid per frame
    vy: 0, //not going diagonal

    cells: [], //tracks cells

    maxCells: 4
};

let apple = {
    x: grid * 10,
    y: grid * 10
};

function update() {
    requestAnimationFrame(update);

    if (++count < 4) {
        return;
    }
    count = 0;

    ctx.clearRect(0,0, canvas.width, canvas.height);


    // snake move
    snake.x += snake.vx;
    snake.y += snake.vy;

    // pass through walls
    if (snake.x < 0) {
        snake.x = canvas.width - grid;
    } else if (snake.x >= canvas.width) {
        snake.x = 0;
    }

    if (snake.y < 0) {
        snake.y = canvas.height - grid;
    } else if (snake.y >= canvas.height) {
        snake.y = 0;
    }

    snake.cells.unshift({
        x: snake.x,
        y: snake.y
    });

    if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
    }

    // Draw Apple
    ctx.fillStyle = secondary;
    ctx.fillRect(apple.x, apple.y, grid - 1, grid - 1);

    // Draw Snake
    ctx.fillStyle = primary;
    snake.cells.forEach(function(cell, index) {
        ctx.fillRect(cell.x, cell.y, grid-1, grid-1);

        if (cell.x === apple.x && cell.y === apple.y) {
            snake.maxCells++;
            score++;

            apple.x = getRandomInt(0,24) * grid;
            apple.y = getRandomInt(0,14) * grid;
        }

        for (let i = index + 1; i < snake.cells.length; i++) {
            if (cell.x === snake.cells[i].x  && cell.y === snake.cells[i].y) {
                alert(`Game over!! Your Score ${score}`);  
                window.location.reload();
            }
        }
    });

    // Draw Score
    ctx.font = '42px Helvetica';
    ctx.fillStyle = 'rgba(255,255,255, 0.25';
    ctx.textAlign = 'center';
    ctx.fillText(score, canvas.width / 2, canvas.height / 2);

}

function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}

document.addEventListener('keydown', function(evt) {
    // Left movement
    if (evt.which === 37 && snake.vx === 0) {
        snake.vx = -grid;
        snake.vy = 0;
    // Up movement
    } else if (evt.which === 38 && snake.vy === 0) {
        snake.vy = -grid;
        snake.vx = 0;
    // Right movement
    } else if (evt.which === 39 && snake.vx === 0) {
        snake.vx = grid;
        snake.vy = 0;
    // Down movement
    } else if (evt.which === 40 && snake.vy === 0) {
        snake.vy = grid;
        snake.vx = 0;
    }
});

// Start the game
requestAnimationFrame(update);