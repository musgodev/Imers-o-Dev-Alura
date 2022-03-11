Imersão Dev - Aula 4 - Catalogo.

Nesta aula foi proposto que fizessemos um catalogo, inicialmente de filmes mas cabia a nós decidir o tema, a ideia era aprender como inserir um elemento HTML que nao existe
no arquivo.html através do arquivo.js utilizando o "document.write()" e buscando as capas dos conteudos em uma Array previamente construida, porem, ao utilizar esse método
notei que o conteudo não estava centro alinhado ao centro da pagina, passei um tempo quebrando a cabeça e conversando com outros participantes na comunidade do discord e
cheguei até a solução do problema, que foi utilizar uma div vazia no html onde seriam inseridas as imgs, dessa maneira eu poderia configurar o alinhamento daquele "bloco"
como quisesse no CSS, então utilizando uma combinação de "documento.getElementById()" e "inner.HTML" consegui inserir as imagens na div vazia e alinha-las como desejado.
