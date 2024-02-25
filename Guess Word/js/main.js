/* Elementos */
const body = document.querySelector("body");
const principal_screen = document.querySelector(".pantalla-principal");
const start_btn = principal_screen.querySelector(".start-btn");
const info_box = document.querySelector(".info-box");
const quit_btn = info_box.querySelector(".botones .cancel-btn");
const continue_btn = info_box.querySelector(".botones .start-btn");
const quiz_box = document.querySelector(".quiz-box");
const option_list = document.querySelector(".option-list");
const next_btn = quiz_box.querySelector(".next-btn");
const timeCount = quiz_box.querySelector(".timer .timer-sec");
const timeLine = quiz_box.querySelector(".header-quiz-box .time-line");
const result_box = document.querySelector('.result-box');
const cancel_quiz = result_box.querySelector('.botones .cancel-btn');

/* Press Start Btn */
start_btn.onclick = () => {
    info_box.classList.remove("desactivado");
    principal_screen.classList.add("desactivado");
    body.style.background = "#DCC1B6";
};

/* Press Quit Btn */
quit_btn.onclick = () => {
    info_box.classList.add("desactivado");
    principal_screen.classList.remove("desactivado");
    body.style.background = "#FAFAFA";
};

/* Press Continue Btn */
continue_btn.onclick = () => {
    info_box.classList.add("desactivado");
    quiz_box.classList.remove("desactivado");
    showQuestions(0);
    questionCounter(1);
    startTimer(15);
    startTimerLine(0);
};

let contador = 0;
let numero_pregunta = 1;
let contador_tiempo;
let contadorLinea;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

/* Press Next Btn */
next_btn.onclick = () => {
    if (contador < questions.length - 1) {
        contador++;
        numero_pregunta++;
        showQuestions(contador);
        questionCounter(numero_pregunta);
        clearInterval(contador_tiempo);
        clearInterval(contadorLinea);
        startTimer(timeValue);
        startTimerLine(widthValue);
        next_btn.style.display = 'none';
    } else {
        clearInterval(contador_tiempo);
        clearInterval(contadorLinea);
        showResultBox();
    }
};

/* Obteniendo preguntas y opciones del array */

function showQuestions(index) {
    const question_text = document.querySelector(".question-text");

    let option_tag = '<li class="option"><span>' + questions[index].options[0] + "</span></li>" 
                    +'<li class="option"><span>' + questions[index].options[1] + "</span></li>" 
                    +'<li class="option"><span>' + questions[index].options[2] + "</span></li>" 
                    +'<li class="option"><span>' + questions[index].options[3] + "</span></li>" 
                    +'<li class="option"><span>' + questions[index].options[4] + "</span></li>";

    question_text.innerHTML = questions[index].question;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class = "icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class = "icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
    clearInterval(contador_tiempo);
    clearInterval(contadorLinea);
    let userAnswer = answer.textContent;
    let correctAnswer = questions[contador].answer;
    let allOptions = option_list.children.length;
    if (userAnswer == correctAnswer) {
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAnswer) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    /* Deshabilitar opciones luego de que el usuario selecciona una */
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("opcion-desabilitada");
    }
    /* Habilitar boton de siguiente pregunta */
    next_btn.style.display = "block";
    
}

/* Mostrar Resultados */

function showResultBox(){
    quiz_box.classList.add('desactivado');
    result_box.classList.remove('desactivado');

    const result_text = result_box.querySelector('.result-text');
    const icon_result = result_box.querySelector('.icon i')
    if(userScore >= 8){
        result_text.textContent = 'Rất tuyệt vời, bạn quả là một người xuất chúng!!!';
        icon_result.classList.add('fa-smile-beam');
    }else if(userScore >= 6 && userScore < 8){
        result_text.textContent = 'Khá tốt, bạn có thể làm lại bài kiểm tra để nắm chắc hơn kiến thức';
        icon_result.classList.add('fa-smile');
    }else if(userScore >= 4 && userScore < 6){
        result_text.textContent = 'Không sao, bạn có thể thực hiện lại bài kiểm tra';
        icon_result.classList.add('fa-sad-tear');
    }else{
        result_text.textContent = 'Tôi rất ngạc nhiên vì bạn làm bài tệ như thế. Bạn có muốn thử lại không!?';
        icon_result.classList.add('fa-sad-cry');
    }


    const scoreText = result_box.querySelector('.score-text p .user-score');
    const totalQuestion = result_box.querySelector('.score-text p .total-question');
    scoreText.textContent = userScore;
    totalQuestion.textContent = questions.length
}

/* Quit Quiz */
cancel_quiz.onclick = () =>{
    window.location.reload();
}

/* Timer */

function startTimer(time) {
    contador_tiempo = setInterval(timer, 1000);
    function timer() {
        time--;
        timeCount.textContent = time;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(contador_tiempo);
            timeCount.textContent = "00";

            let correctAnswer = questions[contador].answer;
            let allOptions = option_list.children.length;

            for (let i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correctAnswer) {
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("opcion-desabilitada");
            }
            next_btn.style.display = "block";
        }
    }
}

/* Time Line */

function startTimerLine(time) {
    contadorLinea = setInterval(timer, 30);
    function timer() {
        timeLine.style.width = time + "%";
        if (time >= 100) {
            clearInterval(contadorLinea);
        }
        time += 0.2;
    }
}

/* Contador preguntas */

function questionCounter(index) {
    const question_num = document.querySelector(".quiz-box-titulo span");
    const cont_question = document.querySelector(".question-numb");
    const question_total = document.querySelector(".question-total");

    question_num.innerHTML = index;
    cont_question.innerHTML = index;
    question_total.innerHTML = questions.length;
}
