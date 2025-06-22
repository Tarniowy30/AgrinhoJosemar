let cenario = "menu";
let imgCampo, imgCidade;

function preload() {
  imgCampo = loadImage('campo.jpg');
  imgCidade = loadImage('cidade.jpg');
}

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  textSize(16);
}

function draw() {
  background(220);

  if (cenario === "menu") {
    fill(0);
    textSize(18);
    text("Clique para conhecer a Conexão entre o Campo e a Cidade", width / 2, height / 2);
  } 
  
  else if (cenario === "campo") {
    image(imgCampo, 0, 0, width, height);
    fill(255, 220);
    rect(0, height - 160, width, 160);
    fill(0);
    textSize(14);
    text(
      "O Campo: Berço da produção de alimentos, da biodiversidade e da cultura tradicional brasileira.\n\n" +
      "No campo, o ciclo da vida acontece em perfeita harmonia com a natureza. É lá que os alimentos que sustentam as cidades são cultivados com dedicação: grãos, frutas, verduras, leite, carne e muito mais. Além disso, o campo é responsável pela preservação de ecossistemas naturais, pelo cuidado com o solo e pelas práticas sustentáveis que garantem a continuidade dos recursos para as próximas gerações.\n\n" +
      "O campo também é espaço de tradições culturais, saberes populares e festas regionais que atravessam gerações.",
      width / 2, height - 80
    );
  } 
  
  else if (cenario === "cidade") {
    image(imgCidade, 0, 0, width, height);
    fill(255, 220);
    rect(0, height - 160, width, 160);
    fill(0);
    textSize(14);
    text(
      "A Cidade: Centro de inovação, consumo e serviços essenciais para a sociedade.\n\n" +
      "Na cidade, os produtos do campo ganham forma, valor e alcance. Indústrias processam alimentos, empresas distribuem produtos e os centros urbanos concentram mercados, escolas, hospitais e centros tecnológicos.\n\n" +
      "Além disso, é nas cidades que se desenvolvem as pesquisas científicas, as novas tecnologias agrícolas e as políticas públicas que fortalecem a produção no campo. As cidades também são espaços de diversidade cultural e geração de oportunidades.",
      width / 2, height - 80
    );
  } 
  
  else if (cenario === "conexao") {
    background(200, 230, 200);
    fill(0);
    textSize(14);
    text(
      "A Conexão Campo-Cidade: Uma relação de interdependência que constrói o futuro.\n\n" +
      "O campo depende da cidade para escoar sua produção, acessar tecnologias e serviços. A cidade depende do campo para garantir o abastecimento de alimentos, matérias-primas e equilíbrio ambiental.\n\n" +
      "Essa integração é a base de uma sociedade sustentável: enquanto o campo produz, a cidade consome, transforma e inova. Fortalecer essa conexão é essencial para garantir segurança alimentar, qualidade de vida, desenvolvimento econômico e preservação do meio ambiente.\n\n" +
      "Celebrar essa união é reconhecer que todos somos parte de uma mesma rede que sustenta a vida!",
      width / 2, height / 2
    );
  }
}

function mousePressed() {
  if (cenario === "menu") {
    cenario = "campo";
  } else if (cenario === "campo") {
    cenario = "cidade";
  } else if (cenario === "cidade") {
    cenario = "conexao";
  } else if (cenario === "conexao") {
    cenario = "menu";
  }
}
