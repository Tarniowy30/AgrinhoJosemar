
let cenario = "menu";
let imgCampo, imgCidade;

function preload() {
  imgCampo = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Wheat_field_in_Saint_Pal_de_Mons%2C_France.jpg/640px-Wheat_field_in_Saint_Pal_de_Mons%2C_France.jpg');
  imgCidade = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Curitiba_downtown.jpg/640px-Curitiba_downtown.jpg');
}

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background(220);
  if (cenario === "menu") {
    fill(0);
    text("Clique para conhecer a conexão entre o Campo e a Cidade", width / 2, height / 2);
  } else if (cenario === "campo") {
    image(imgCampo, 0, 0, width, height);
    fill(255);
    rect(0, height - 150, width, 150);
    fill(0);
    text("O Campo: Lugar de produção de alimentos, natureza e cultura rural.", width / 2, height - 75);
  } else if (cenario === "cidade") {
    image(imgCidade, 0, 0, width, height);
    fill(255);
    rect(0, height - 150, width, 150);
    fill(0);
    text("A Cidade: Centro de consumo, tecnologia, serviços e inovação.", width / 2, height - 75);
  }
}

function mousePressed() {
  if (cenario === "menu") {
    cenario = "campo";
  } else if (cenario === "campo") {
    cenario = "cidade";
  } else if (cenario === "cidade") {
    cenario = "menu";
  }
}
