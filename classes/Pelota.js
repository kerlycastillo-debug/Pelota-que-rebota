class Pelota {
  constructor() {
    this.diam = random(10, 150);
    this.rad = this.diam / 2;

    this.posx = random(this.rad, width - this.rad);
    this.posy = random(this.rad, height - this.rad);

    this.velx = random(-3, 3);
    this.vely = random(-3, 3);

    // Color aleatorio (mantiene tu estilo original)
    this.nuevoColor = color(random(255, 0), random(0, 255), random(100, 150), 200);
  }

  actualizar() {
    if (this.posx > width - this.rad || this.posx < this.rad) {
      this.velx *= -1;
    }

    if (this.posy > height - this.rad || this.posy < this.rad) {
      this.vely *= -1;
    }

    this.posx += this.velx;
    this.posy += this.vely;
  }

  visualizar() {
    push();
    translate(this.posx, this.posy);
    stroke("#000000"); // borde negro
    strokeWeight(2);
    fill(this.nuevoColor);

    // 🌿 Dibuja una plantita simple (tallo + flor)
    // Tallo
    stroke(0);
    fill(30, 180, 80);
    rect(0, this.diam / 4, this.diam / 15, this.diam / 1.5, 20);

    // Pétalos
    noStroke();
    fill(this.nuevoColor);
    for (let i = 0; i < 6; i++) {
      let angle = (TWO_PI / 6) * i;
      let x = cos(angle) * this.rad * 0.7;
      let y = sin(angle) * this.rad * 0.7 - this.diam / 3;
      ellipse(x, y, this.diam / 3, this.diam / 3);
    }

    // Centro de la flor
    stroke(0);
    strokeWeight(2);
    fill(255, 220, 0);
    ellipse(0, -this.diam / 3, this.diam / 4);

    pop();
  }
}

