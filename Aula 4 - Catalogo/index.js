var filmesImages = "";
var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/archive/0/0d/20220111000604%21Elden_Ring_capa.jpg",
  "https://sm.ign.com/ign_pt/screenshot/default/3303977-theartofseaofthieves_h3u1.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/d/dc/Ghost_of_Tsushima_capa.png",
  "https://lojasaraiva.vteximg.com.br/arquivos/ids/2274176/1002027361.jpg?v=637009766744630000",

  "https://i.3djuegos.com/juegos/11596/hollow_knight/fotos/ficha/hollow_knight-3915488.jpg",

  "https://cdn.game.tv/game-tv-content/images_3/9bd33486b9989e211af34682144ea9a3/GameTile.jpg",

  "https://static-cdn.jtvnw.net/ttv-boxart/Valheim.jpg",

  "https://upload.wikimedia.org/wikipedia/pt/0/06/TW3_Wild_Hunt.png"
];

for (var i = 0; i < listaFilmes.length; i++) {
  filmesImages = filmesImages + "<img src=" + listaFilmes[i] + ">";
  document.getElementById("div-filmes").innerHTML = filmesImages;
}
