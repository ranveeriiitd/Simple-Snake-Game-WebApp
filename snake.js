document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('snakeCanvas');
    const ctx = canvas.getContext('2d');

    const gridSize = 20;
    const snake = [{ x: 10, y: 10 }];
    const food = { x: 15, y: 15 };
    let direction = 'right';
    let speed = 100; // Initial speed in milliseconds

    function draw() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw snake
        ctx.fillStyle = '#2ecc71';
        snake.forEach(segment => {
            ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
        });

        // Draw food
        ctx.fillStyle = '#e74c3c';
        ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
    }

    function update() {
        const head = { ...snake[0] };

        // Update direction
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    direction = 'up';
                    break;
                case 'ArrowDown':
                    direction = 'down';
                    break;
                case 'ArrowLeft':
                    direction = 'left';
                    break;
                case 'ArrowRight':
                    direction = 'right';
                    break;
                case 'ArrowUp':
                    direction = 'up';
                    break;
                case 'ArrowDown':
                    direction = 'down';
                    break;
                case 'ArrowLeft':
                    direction = 'left';
                    break;
                case 'ArrowRight':
                    direction = 'right';
                    break;
                case 'ArrowUp':
                    direction = 'up';
                    break;
                case 'ArrowDown':
                    direction = 'down';
                    break;
                case 'ArrowLeft':
                    direction = 'left';
                    break;
                case 'ArrowRight':
                    direction = 'right';
                    break;
                case 'ArrowUp':
                    direction = 'up';
                    break;
                case 'ArrowDown':
                    direction = 'down';
                    break;
                case 'ArrowLeft':
                    direction = 'left';
                    break;
                case 'ArrowRight':
                    direction = 'right';
                    break;
                case 'w':
                    direction = 'up';
                    break;
                case 's':
                    direction = 'down';
                    break;
                case 'a':
                    direction = 'left';
                    break;
                case 'd':
                    direction = 'right';
                    break;
            }
        });

        // Move the snake
        switch (direction) {
            case 'up':
                head.y -= 1;
                break;
            case 'down':
                head.y += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'right':
                head.x += 1;
                break;
        }

        // Check for collisions
        if (head.x < 0 || head.x >= canvas.width / gridSize || head.y < 0 || head.y >= canvas.height / gridSize) {
            alert('Game Over! You hit the wall.');
            resetGame();
            return;
        }

        // Check for self-collision
        if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
            alert('Game Over! You collided with yourself.');
            resetGame();
            return;
        }

        // Check for food collision
        if (head.x === food.x && head.y === food.y) {
            snake.unshift({ ...food });
            generateFood();
            // Increase speed after eating food
            speed -= 5;
        } else {
            snake.pop();
        }

        snake.unshift(head);
    }

    function generateFood() {
        food.x = Math.floor(Math.random() * (canvas.width / gridSize));
        food.y = Math.floor(Math.random() * (canvas.height / gridSize));
    }

    function resetGame() {
        snake.length = 1;
        snake[0] = { x: 10, y: 10 };
        direction = 'right';
        speed = 100; // Reset speed to initial value
        generateFood();
    }

    function gameLoop() {
        update();
        draw();
        setTimeout(gameLoop, speed);
    }

    generateFood();
    gameLoop();
});
