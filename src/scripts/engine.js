
//----------Variávis Globais
var state = {
    view:{
        //Variáveis que alteram o que se vê na tela
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        lives: document.querySelector("#lives"),
    },

    values:{
        //Variáveis rodando em segundo plano        
        gameVelocity: 1000,
        hitposition: 0,
        result: 0,
        currentTime:60,
        vidas:3,
        fase:0,
        
    },
    actions:{
        //Variáveis que geram uma ação na tela
        timerID: null ,
        //countDownTimerId: setInterval(countDown,1000),

    }
}
var placar=[0,0,0];

//----------Funções secundárias

//Game Over

function gameover(){
    playsound("gameover");
    placar[state.values.fase] = state.values.result;
    alert(`Fim de jogo o seu placar foi
    LEVEL 1: ${placar[0]}
    LEVEL 2: ${placar[1]}
    LEVEL 3: ${placar[2]}
    TOTAL : ${placar[0]+placar[1]+placar[2]}`);      
    }

//Audio
function playsound(audioName){

    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    
    if (audioName==="hit"){
    audio.volume = 0.2;}
    audio.play();

}

//Contador do timer
function countDown(){

    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;
    if (state.values.currentTime <= 0){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerID);
        if (state.values.fase===2){
            gameover();
        }
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
function addListenerHitBox() {
    
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (state.values.hitposition !== null && square.id === state.values.hitposition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitposition = null;
                placar[state.values.fase] = state.values.result;
                playsound("hit");
                if (state.values.result % 5 === 0) {
                    state.values.vidas++;
                    state.view.lives.textContent = `x${state.values.vidas}`;
                    playsound("1up");
                }
            } 
            else if (state.values.hitposition !== null) {
                playsound("erro");
                state.values.vidas--;
                state.view.lives.textContent = `x${state.values.vidas}`;
                if (state.values.vidas <= 0) {
                    setTimeout(gameover, 600);
                }
            }
        });
    });
}

//----------Função Principal
function main(){
    function initialize(velocidade) {
        state.values.currentTime = 60;
        state.view.timeLeft.textContent = state.values.currentTime;
        state.actions.countDownTimerId= setInterval(countDown,1000);
        state.values.gameVelocity = velocidade;
        state.values.hitposition = 0;
        state.values.result = 0;
        moveEnemy();
        //setInterval(countDown,1000);
        addListenerHitBox();
    }
    
    //LEVEL 1
    alert("FASE 1");
    initialize(1000);
    
    //LEVEL 2
    setTimeout(function () {
        if (state.values.result >= 40) {
            alert("FASE 2");
            
            state.values.fase++;
            initialize(800);
        }
        else{
            gameover();
        }
    }, 62500);
    
    //LEVEL 3
    setTimeout(function () {
        if (state.values.result >= 40) {
            alert("FASE 3");
            state.values.fase++;
            initialize(750);
        }
        else{
            gameover();
        }

    }, 123000);
}
main ();
