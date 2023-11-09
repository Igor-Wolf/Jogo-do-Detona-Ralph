
//----------Variávis Globais
const state = {
    view:{
        //Variáveis que alteram o que se vê na tela
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),

    },

    values:{
        //Variáveis rodando em segundo plano        
        gameVelocity: 1000,
        hitposition: 0,
        result: 0,
        currentTime:60,

    },
    actions:{
        //Variáveis que geram uma ação na tela
        timerID: null ,
        countDownTimerId: setInterval(countDown,1000),

    }

}
//----------Funções secundárias

//Audio
function playsound(audioName){

    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.3;
    audio.play();

}

//Contador do timer
function countDown(){

    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;
    if (state.values.currentTime <= 0){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerID);
        alert("Game over! O seu resultado foi: " + state.values.result);
    }

}

//Função para gerar um numero random dos quadrados
function randomSquare(){
    state.view.squares.forEach((square)=>{

        square.classList.remove("enemy");
   })

   let randomNumber = Math.floor(Math.random() *9);
   let randomSquare = state.view.squares[randomNumber];
   randomSquare.classList.add("enemy");
   state.values.hitposition = randomSquare.id;
}

//Função para mover o inimigo na tela
function moveEnemy(){
    
    state.actions.timerID = setInterval(randomSquare, state.values.gameVelocity);

}

//Função para verificar onde o user clicou
function addListenerHitBox(){

    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () =>{
            if (square.id=== state.values.hitposition){
            state.values.result++;
            state.view.score.textContent = state.values.result;
            state.values.hitposition = null;
            playsound("hit");
            };
        });

    });
}

//----------Função Principal
function initialize(){
    
    moveEnemy();
    addListenerHitBox();
}

initialize();