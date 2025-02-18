let ball;

class Ball {
  #radius = 10;
  #minVelocity = 0.5;
  #maxVelocity = 5.5;
  constructor() {
    this.position = new createVector(width / 2, height / 2);
    this.velocity = new createVector(
      map(random(), 0, 1, this.#minVelocity, this.#maxVelocity),
      map(random(), 0, 1, this.#minVelocity, this.#maxVelocity)
    );
  }

  display() {
    stroke(0, 255, 0);
    fill(255, 0, 0);
    strokeWeight(4);
    circle(this.position.x, this.position.y, 2 * this.#radius);
  }

  move() {
    this.position.add(this.velocity);
    if (
      this.position.x + this.#radius > width ||
      this.position.x - this.#radius < 0
    ) {
      this.velocity.x *= -1;
    }
    if (
      this.position.y + this.#radius > height ||
      this.position.y - this.#radius < 0
    ) {
      this.velocity.y *= -1;
    }
  }
}

function setup() {
  createCanvas(500, 500);
  ball = new Ball();
  print(ball.velocity.x);
}

function draw() {
  background(25);
  ball.move();
  ball.display();
}
