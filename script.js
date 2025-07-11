const quizzes = {
    matematica: [
        { pergunta: "1 - Qual é o valor de x na equação 3x - 9 = 0 ?", opcoes: ["0", "2", "1", "3"], correta: "3" },

        { pergunta: "2 - Qual o símbolo da operação de multiplicação ?", opcoes: ["%", "-", "+", "*"], correta: "*" },

        { pergunta: "3 - Um triângulo tem lados medindo 3 cm, 4 cm e 5 cm. Qual é a classificação desse triângulo ?", opcoes: ["Equilátero", "Isósceles", "Escaleno e Retângulo", "Obtusângulo"], correta: "Escaleno e Retângulo" },

        { pergunta: "4 - O logaritmo de 1000 na base 10 é igual a :", opcoes: ["2", "3", "10", "100"], correta: "3" },

        { pergunta: "5 - Se x + y = 10 e x - y = 4, qual o valor de x ?", opcoes: ["3", "4", "7", "10"], correta: "7" },

        { pergunta: "6 - Uma loja oferece 20% de desconto em um produto de R$ 150,00. Qual o preço com desconto ?", opcoes: ["R$ 120,00", "R$ 125,00", "R$ 130,00", "R$ 135,00"], correta: "R$ 120,00" },

        { pergunta: "7 - Qual é a raiz quadrada de 144 ?", opcoes: ["11", "12", "13", "14"], correta: "12" },

        { pergunta: "8 - Um carro percorre 180 km em 3 horas. Qual é a sua velocidade média ?", opcoes: ["50 km/h", "60 km/h", "70 km/h", "90 km/h"], correta: "60 km/h" },

        { pergunta: "9 - Qual é a média aritmética dos números 8, 12, 15 e 5 ?", opcoes: ["10", "11", "12", "13"], correta: "10" },

        { pergunta: "10 - Quanto é dois quintos de 100 ?", opcoes: ["25", "30", "40", "50"], correta: "40" }
    ],

    esporte: [
        { pergunta: "1 - Qual time é o maior campeão da Champions League ?", opcoes: ["Real Madrid", "Bayern de Munique", "Milan", "Barcelona"], correta: "Real Madrid" },

        { pergunta: "2 - Qual o nome do estádio do Barcelona ?", opcoes: ["Camp Nou", "Santiago Bernabeu", "Allianz Arena", "Estádio de Wembley"], correta: "Camp Nou" },

        { pergunta: "3 - Qual é o único país que participou de todas as edições da Copa do Mundo de Futebol desde sua criação em 1930 ?", opcoes: ["Alemanha", "Argentina", "Brasil", "Itália"], correta: "Brasil" },

        { pergunta: "4 - Quantos jogadores cada time tem em campo no início de uma partida oficial de vôlei ?", opcoes: ["5", "6", "7", "8"], correta: "6" },

        { pergunta: "5 - Em que cidade foram realizados os primeiros Jogos Olímpicos da era moderna, em 1896 ?", opcoes: ["Paris", "Atenas", "Roma", "Londres"], correta: "Atenas" },

        { pergunta: "6 - Qual é o tempo de duração de uma partida oficial de basquete da NBA (sem prorrogações) ?", opcoes: ["40 minutos", "48 minutos", "50 minutos", "60 minutos"], correta: "48 minutos" },

        { pergunta: "7 - Em qual país o sumô é considerado o esporte nacional ?", opcoes: ["China", "Coreia do Sul", "Japão", "Tailândia"], correta: "Japão" },

        { pergunta: "8 - Quantos Grand Slams o tenista suíço Roger Federer conquistou ao longo de sua carreira ?", opcoes: ["20", "19", "21", "22"], correta: "20" },

        { pergunta: "9 - Quem foi o primeiro atleta a ganhar 100 metros rasos abaixo dos 10 segundos em uma competição oficial ?", opcoes: ["Usain Bolt", "Jim Hines", "Ben Johnson", "Carl Lewis"], correta: "Jim Hines" },

        { pergunta: "10 - Qual seleção nacional de handebol masculino é a maior campeã mundial da modalidade (até 2024) ?", opcoes: ["Alemanha", "França", "Dinamarca", "Suécia"], correta: "França" }
    ],

    academia: [
        { pergunta: "1 - Qual músculo é o mais exigido durante o exercício leg press ?", opcoes: ["Abdômen", "Quadríceps", "Bíceps", "Deltóide"], correta: "Quadríceps" },

        { pergunta: "2 - O abdômen é mais ativado em qual desses exercícios ?", opcoes: ["Prancha isométrica", "Puxada", "Leg press", "Supino inclinado"], correta: "Prancha isométrica" },

        { pergunta: "3 - Qual é uma variação intermediária do afundo com halteres ?", opcoes: ["Afundo no Smith", "Passada curta", "Agachamento unilateral", "Afundo búlgaro"], correta: "Afundo búlgaro" },

        { pergunta: "4 - Qual desses exercícios é mais indicado para trabalhar os músculos do peitoral ?", opcoes: ["Agachamento", "Elevação lateral", "Rosca direta", "Supino reto"], correta: "Supino reto" },

        { pergunta: "5 - Qual desses alimentos é uma boa fonte de carboidrato para o pré-treino ?", opcoes: ["Filé de frango", "Ovo", "Banana", "Abacate"], correta: "Banana" },

        { pergunta: "6 - Em um treino de musculação, o que significa (série) ?", opcoes: ["Um único exercício isolado", "Tempo total de treino", "Conjunto de exercícios cardiovasculares", "Um conjunto de repetições de um exercício"], correta: "Um conjunto de repetições de um exercício" },

        { pergunta: "7 - O que é importante fazer antes de começar o treino ?", opcoes: ["Alimentar-se", "Aquecer o corpo", "Tomar banho", "Dormir"], correta: "Aquecer o corpo" },

        { pergunta: "8 - O que é hipertrofia ?", opcoes: ["Perda de gordura corporal", "Ganho de flexibilidade", "Diminuição da retenção de líquidos", "Aumento do volume muscular"], correta: "Aumento do volume muscular" },

        { pergunta: "9 - O abdominal é um exercício para :", opcoes: ["Os braços", "As pernas", "A barriga", "Os pés"], correta: "A barriga" },

        { pergunta: "10 - Qual dessas é uma boa atitude na academia ?", opcoes: ["Ficar nos aparelhos sem usar", "Usar o celular no meio do treino", "Gritar com os colegas", "Limpar o aparelho após o uso"], correta: "Limpar o aparelho após o uso" }
    ],

    filmes: [
        { pergunta: "1 - Qual o filme mais vendido do mundo ?", opcoes: ["Vingadores Ultimato", "Titanic", "Avatar", "Jurassic World"], correta: "Avatar" },

        { pergunta: "2 - Qual é o planeta natal do Superman ?", opcoes: ["Vulcano", "Krypton", "Terra", "Asgard"], correta: "Krypton" },

        { pergunta: "3 - Quem interpreta o personagem Homem de Ferro no Universo Marvel ? ", opcoes: ["Chris Evans", "Robert Downey Jr", "Tom Holland", "Mark Ruffalo"], correta: "Robert Downey Jr" },

        { pergunta: "4 - Em Harry Potter, qual é o nome do elfo doméstico que ajuda Harry ?", opcoes: [" Neville", "Snape", "Gollum", "Dobby"], correta: "Dobby" },

        { pergunta: "5 - Qual é o nome do brinquedo cowboy em Toy Story ?", opcoes: ["Buzz Lightyear", "Sr. Cabeça de Batata", "Woody", "Rex"], correta: "Woody" },

        { pergunta: "6 - Qual filme ganhou o Oscar de Melhor Filme em 2020 ? ", opcoes: ["1917", "Coringa", "Parasita", "Era uma Vez em... Hollywood"], correta: "Parasita" },

        { pergunta: "7 - Em “Matrix”, o que Neo precisa escolher ? ", opcoes: ["A porta azul ou a porta vermelha", "O elevador ou a escada", "A pílula azul ou a pílula vermelha", "O botão vermelho ou o verde"], correta: "A pílula azul ou a pílula vermelha" },

        { pergunta: "8 - Qual é o nome do boneco assassino de um filme de terror famoso ?", opcoes: ["Annabelle", "Samara", "Chucky", "Jigsaw"], correta: "Chucky" },

        { pergunta: "9 - Em “Star Wars: Episódio V – O Império Contra-Ataca”, quem treina Luke Skywalker ?", opcoes: ["Obi-Wan Kenobi", "Darth Vader", "Yoda", "Mace Windu"], correta: "Yoda" },

        { pergunta: "10 - Em Titanic, qual é o nome do personagem de Leonardo DiCaprio ? ", opcoes: ["John", "James", "Jack", "Leo"], correta: "Jack" }
    ],

    series: [
        { pergunta: "1 - Qual série se passa em Westeros ?", opcoes: ["Vikings", "The Witcher", "Game of Thrones", "The Crown"], correta: "Game of Thrones" },

        { pergunta: "2 - Em Peaky Blinders, quem é o líder da gangue ?", opcoes: ["John Shelby", "Alfie Solomons", "Arthur Shelby", "Thomas Shelby"], correta: "Thomas Shelby" },

        { pergunta: "3 - Em Breaking Bad, qual é o nome verdadeiro de Gus Fring ?  ", opcoes: [" Maximino Arciniega", "Maximino Arciniega", "Gustavo González", " Não é revelado"], correta: " Não é revelado" },

        { pergunta: "4 - Em Game of Thrones, qual casa tem como símbolo um lobo gigante ? ", opcoes: ["Casa Lannister", " Casa Targaryen", "Casa Baratheon", "Casa Stark "], correta: "Casa Stark " },

        { pergunta: "5 - Em Round 6, qual foi o último jogo da competição ?", opcoes: ["Pular Corda", "Corrida de saco", "Pique-esconde", " Jogo da lula"], correta: " Jogo da lula" },

        { pergunta: "6 - Em Lúcifer, quem é a parceira policial de Lúcifer Morningstar ?", opcoes: ["Ella Lopez", "Linda", "Chloe Decker", "Maze"], correta: "Chloe Decker" },

        { pergunta: "7 - Em The Walking Dead, qual é o nome do filho de Rick Grimes ? ", opcoes: ["Glenn", "Carl", "Shane", "Daryl"], correta: "Carl" },

        { pergunta: "8 - Em The Boys, qual é o nome do grupo de heróis corruptos ? ", opcoes: ["Os Vingadores", "Os Poderosos", "Os Supremos", "Os Sete"], correta: "Os Sete" },

        { pergunta: "9 - Em Black Mirror, qual episódio apresenta um mundo onde as pessoas avaliam umas às outras com notas ? ", opcoes: ["Nosedive", "San Junipero", "Playtest", "White Christmas"], correta: "Nosedive" },

        { pergunta: "10 - Em Grey's Anatomy, quem é a melhor amiga de Meredith Grey ?", opcoes: ["Cristina Yang", "Izzie Stevens", "Arizona Robbins", "April Kepner"], correta: "Cristina Yang" }
    ],

    historia: [
        { pergunta: "1 - Quem foi o primeiro presidente do Brasil ?", opcoes: ["Getúlio Vargas", "Deodoro da Fonseca", "Dom Pedro I", "Lula"], correta: "Deodoro da Fonseca" },

        { pergunta: "2 - Em que ano ocorreu a independência do Brasil ?", opcoes: ["1500", "1822", "1889", "1964"], correta: "1822" },

        { pergunta: "3 - Em qual ano a escravidão foi oficialmente abolida no Brasil ?", opcoes: ["1822", "1885", "1888", "1891"], correta: "1888" },

        { pergunta: "4 - Qual civilização antiga construiu as pirâmides de Gizé ?", opcoes: ["Romana", "Grega", "Mesopotâmica", "Egípcia"], correta: "Egípcia" },

        { pergunta: "5 - A Primeira Guerra Mundial começou em qual ano ?", opcoes: ["1914", "1917", "1939", "1905"], correta: "1914" },

        { pergunta: "6 - A Revolução Industrial começou em qual país ?", opcoes: ["Alemanha", "França", "Inglaterra", "Estados Unidos"], correta: "Inglaterra" },

        { pergunta: "7 - Qual evento marcou o início da Idade Moderna ?", opcoes: ["Queda de Constantinopla", "Descobrimento da América", "Revolução Industrial", "Reforma Protestante"], correta: "Queda de Constantinopla" },

        { pergunta: "8 - Quem foi Zumbi dos Palmares ?", opcoes: [" Um rei português", "Um chefe militar indígena", "Um líder do movimento abolicionista europeu", " Um líder quilombola no Brasil "], correta: " Um líder quilombola no Brasil " },

        { pergunta: "9 - Quem proclamou a independência do Brasil ?", opcoes: ["Dom João VI", "Marechal Deodoro", "José Bonifácio", "Dom Pedro I"], correta: "Dom Pedro I" },

        { pergunta: "10 - O que foi a Guerra Fria ? ", opcoes: ["Um conflito armado direto entre EUA e URSS", "Um conflito entre Europa e Ásia", "Uma disputa ideológica e política entre EUA e URSS", "Uma guerra civil na Alemanha"], correta: "Uma disputa ideológica e política entre EUA e URSS" }
    ]
};

let perguntas = [];
let rodada = 0;
let contador = 0;

function iniciarQuiz(tema) {
    perguntas = quizzes[tema];
    rodada = 0;
    contador = 0;

    document.getElementById("conteudo").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    mostrarPergunta();
}

function mostrarPergunta() {
    if (rodada < perguntas.length) {
        const quiz = perguntas[rodada];
        document.getElementById("pergunta").textContent = quiz.pergunta;

        const opcoes = document.getElementById("opcoes");
        opcoes.innerHTML = "";

        quiz.opcoes.forEach(opcao => {
            const botao = document.createElement("button");
            botao.textContent = opcao;
            botao.classList.add("opcao");
            botao.onclick = () => verificarResposta(opcao);
            opcoes.appendChild(botao);
        });
    } else {
        fimdoJogo();
    }
}

function verificarResposta(respostaSelecionada) {
    const respostaCorreta = perguntas[rodada].correta;
    if (respostaSelecionada === respostaCorreta) {
        alert("Parabéns! Você acertou!");
        contador++;
    } else {
        alert(`Você errou. A resposta correta era: ${respostaCorreta}`);
    }
    rodada++;
    mostrarPergunta();
}

function fimdoJogo() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.style.display = "flex";
    quizDiv.innerHTML = `
        <h2>Fim do Quiz!</h2>
        <p>Você acertou ${contador} de ${perguntas.length} perguntas.</p>
        <h3>${contador >= 7 ? "Você foi muito bem!" : "Estude mais da próxima vez!"}</h3>
        <button class="botao-reiniciar" onclick="reiniciar()">Voltar ao início</button>
      `;
}

function reiniciar() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("conteudo").style.display = "block";
    document.getElementById("quiz").innerHTML =
        `
        <h2 id="pergunta"></h2>
        <div id="opcoes"></div>
      `;
    rodada = 0;
    contador = 0;
}