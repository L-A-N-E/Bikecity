/*Alerta de Seja Bem-Vindo na página principal */
var url_atual = window.location.href;

if(url_atual.includes("index.html")){
    Swal.fire({
        title: "Seja Bem-Vindo",
        icon: "info",
        confirmButtonColor: "#151E26",
    });
}
/*Alerta perguntando se gostaria de realizar o quiz*/

if(url_atual.includes("quiz.html")){
    Swal.fire({
        title: "Gostaria de realizar o quiz?",
        text: "Você teria a chance de ganhar uma bicicleta!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#151E26",
        color:"black",
        cancelButtonColor: "#C5D1D9",
        confirmButtonText: "Sim",
        cancelButtonText: "Não"
      }).then((result) => {
        if (!result.isConfirmed) {
          window.location.href = "../index.html"
        }
      });
}

/*Código para mudar o fundo do site com 3 cores diferentes*/
let cores = ['#465059','#151E26','#E9EFF2'];
let index_cor = 0;

function mudarCor(){
    document.body.style.backgroundColor= cores[index_cor];
    index_cor ++
    if (index_cor == cores.length){
        index_cor = 0;
    }
}
window.addEventListener('load',function(){
    this.setInterval(function(){
        mudarCor();
    },2000)
})

/*SlideShow no index com 4 imagens*/
let imagens = ["./img/banner1.png","./img/banner2.png","./img/banner3.png","./img/banner4.png"];
let index = 0;
let time = 6000;

function slideShow(){
    document.getElementById('img_banner').src = imagens[index];
    index ++
    if (index == imagens.length){
        index = 0;
    }
    setTimeout('slideShow()', time)
}
slideShow();

//Validação de Campo nos Contatos
function enviarFormulario(){

    let contato_nome = document.getElementById("nome-completo").value
    let contato_email = document.getElementById("email").value
    let contato_telefone = document.getElementById("telefone").value
    let contato_interesse = document.getElementById("interesse").value

    if(contato_nome == "" || contato_email == "" || contato_telefone == "" || contato_interesse == ""){
        Swal.fire({
            title: "Preencha os Campos",
            icon: "error",
            width: 600,
            padding: "3em",
            color: "black",
            background: "#fff",
            confirmButtonColor: "#151E26",
        })
    }else{
        Swal.fire({
            title: "Formulário Enviado",
            icon: "success",
            width: 600,
            padding: "3em",
            color: "black",
            background: "#fff",
            confirmButtonColor: "#151E26",
        })
    }
}

// Validação Login
function efetuarLogin(){
    const user = document.getElementById("usuario").value
    const senha = document.getElementById("senha").value

    //Login Permitido
    if(user == "123" && senha == "123"){
        Swal.fire({
            title: "Login Efetuado com Sucesso",
            icon: "success",
            width: 600,
            showConfirmButton: false,
            padding: "3em",
            color: "black",
            background: "#fff",
            confirmButtonColor: "#151E26",
        })
        setTimeout(()=>{
            window.location.href = "quiz.html"
        },1500)
    
    }else{
        Swal.fire({
            title: "Login Negado",
            icon: "error",
            width: 600,
            padding: "3em",
            color: "black",
            background: "#fff",
            confirmButtonColor: "#151E26",
        })
    }
}
/*Criar um quiz usando o <input type="radio"> sobre biciletas*/
function concluirQuiz() {
    let perguntas = document.querySelectorAll('.perguntas'); // Seleciona todas as perguntas da classe "perguntas"
    let respostasCorretas = ['b', 'c', 'c']; // Respostas corretas para cada pergunta
    let respostasUsuario = []; // Lista para armazenar as respostas dos usuários
    let score = 0; // Marcará as respostas corretas que o usuário dará
    let respostaFaltando = false; // Variável para verificar se alguma resposta está faltando

    // Percorrendo cada pergunta do quiz
    perguntas.forEach((pergunta, index) => {
        let respostas = pergunta.querySelectorAll('input[type=radio]'); // Seleciona todos os input do tipo "radio"
        let respostaSelecionada = false; // Por padrão, a respostaSelecionada será falsa, se marcada será verdadeira

        // Percorrendo cada resposta que o usuário colocou
        respostas.forEach(function(resposta) {
            // Se o usuário marcou
            if (resposta.checked) {
                // Guarda na lista de respostasUsuario
                respostasUsuario.push(resposta.value);
                // E a resposta será marcada como Verdadeira
                respostaSelecionada = true;
            }
        });

        // Se não for marcado nada nas resposta
        if (!respostaSelecionada) {
            respostaFaltando = true; // Indica que há uma resposta faltando
        }

        // Se a resposta que o usuário deu for igual a resposta correta
        if (respostasUsuario[index] === respostasCorretas[index]) {
            score++; // Adicionará +1 ao score do usuário
        }
    });

    // Verifica se há respostas faltando ou se todas as perguntas foram respondidas
    if (respostaFaltando || perguntas.length !== respostasUsuario.length) {
        //Alerta Personalizado para quando faltar palavras
        Swal.fire({
            title:"Preencha todas as Questões",
            icon: "error",
        })
    } else {
        //Alerta Personalizado que Exibe o resultado do quiz
        if(score == perguntas.length){
            Swal.fire({
                title:"Parabéns!",
                text: "Você acertou todas! Agora, você está concorrendo a uma bicicleta!",
                icon: "success",
                confirmButtonColor: "#151E26",
            }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "../index.html"
                }
              });
        }else if(score == 0){
            Swal.fire({
                title:"Que pena :C",
                text: "Você errou todas, gostaria de tentar novamente?",
                icon: "error",
                confirmButtonText: "Sim",
                cancelButtonText: "Não",
                showCancelButton: true,
                confirmButtonColor: "#151E26",
                color:"black",
                cancelButtonColor: "#C5D1D9",
            }).then((result) => {
                if (!result.isConfirmed) {
                  window.location.href = "../index.html"
                }
              });
        }else{
            Swal.fire({
                title:"Resultado",
                text: "Você acertou "+ score +"/"+ perguntas.length + " . Gostaria de tentar novamente?",
                icon: "warning",
                confirmButtonText: "Sim",
                showCancelButton: true,
                cancelButtonText: "Não",
                showCancelButton: true,
                confirmButtonColor: "#151E26",
                color:"black",
                cancelButtonColor: "#C5D1D9",
            }).then((result) => {
                if (!result.isConfirmed) {
                  window.location.href = "../index.html"
                }
              });
        }
        
    }
}