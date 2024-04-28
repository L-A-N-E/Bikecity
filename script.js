/*Alerta de Seja Bem-Vindo na página principal */
Swal.fire({
    title: "Seja Bem-Vindo",
    icon: "info"
  });
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

/*Validação do Login*/
//Ao logar, precisa chamar a página quiz.html

/*Criar um quiz usando o prompt(?) sobre biciletas*/
//Mostra o Resultado na Tela