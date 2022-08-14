const quizData = [
    {
        question: 'What was Meta Platforms Inc formerly known as?',
        a: 'Microsoft',
        b: 'Facebook',
        c: 'Tesla',
        d: 'Geek',
        correct: 'b'
    },
    {
        question: 'Which English city is known as the Steel City?',
        a: 'Chester',
        b: 'Sheffield',
        c: 'Derby',
        d: 'Ely',
        correct: 'b'
    },
    {
        question: 'Which former British colony was given back to China in 1997?',
        a: 'Hong Kong',
        b: 'Belize',
        c: 'Jamaica',
        d: 'Tuvalu',
        correct: 'a'
    },
    {
        question: 'The logo for luxury car maker Porsche features which animal?',
        a: 'Fox',
        b: 'Jaguar',
        c: 'Horse',
        d: 'Puma',
        correct: 'c'
    }
]

let currentQuestion = 0

const questionBlock = document.querySelector('.question')
const answers = document.getElementsByName('answer')

const a_label = document.querySelector('#a_content')
const b_label = document.querySelector('#b_content')
const c_label = document.querySelector('#c_content')
const d_label = document.querySelector('#d_content')

const submit = document.querySelector('.quiz__button')

let rightAnswersCounter = 0

loadQuiz()

function loadQuiz () {
    deselectAnswers()
    const currentQuiz = quizData[currentQuestion]
    questionBlock.textContent = currentQuiz.question
    a_label.textContent = currentQuiz.a
    b_label.textContent = currentQuiz.b
    c_label.textContent = currentQuiz.c
    d_label.textContent = currentQuiz.d
    submit.textContent = currentQuestion === quizData.length - 1 ? 'End test' : 'next'

}

submit.addEventListener('click', () => {

    const value = getSelected()

    if (!value) return;

    if (quizData[currentQuestion].correct === value) rightAnswersCounter++

    if (currentQuestion === quizData.length - 1) {
        const quizBody = document.querySelector('.quiz__container')
        quizBody.innerHTML = `<div class="final__block">
                                  <h2>Right answers: ${rightAnswersCounter}/${quizData.length}</h2>
                              </div>`
        return;
    }
    currentQuestion++
    loadQuiz()
})

function getSelected () {

    let selectedAnswer = null

    for (let answer of answers) {
        if (answer.checked) {
            selectedAnswer = answer.id
        }
    }

    return selectedAnswer

}

function deselectAnswers () {
    for (let answer of answers) answer.checked = false
}
