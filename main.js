let ball;

class Ball {
  #radius = 10;
  #maxVelocity = 10;
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
  }

  display() {
    stroke(0, 255, 0);
    fill(255, 0, 0);
    strokeWeight(4);
    circle(this.position.x, this.position.y, 2 * this.#radius);
  }

  move(x, y) {
    this.#update(x, y);
    this.#checkEdges();
  }

  // ------------------
  // Private Functions
  // ------------------

  #update(x, y) {
    let mouse = createVector(x, y);
    let direction = p5.Vector.sub(mouse, this.position);
    direction.normalize();
    direction.mult(0.2);
    this.acceleration = direction;

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.#maxVelocity);
    this.position.add(this.velocity);
  }

  #checkEdges() {
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
}

function draw() {
  background(25);

  ball.move(mouseX, mouseY);
  ball.display();
}
