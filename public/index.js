import { io } from "https://cdn.socket.io/4.8.1/socket.io.esm.min.js";

window.socket = io();


window.postAnswer = function(answer) {
    console.log("Answer is:", answer)
    fetch("/", {
        method: "POST",
         headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ answer: `${answer}` })      
    })
    .then((res => {
        res.json()
    }))
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}


// Socket Response

socket.on("answer-is-a", ()=> {
    console.log("Answer is a")
    renderAnswer("A")
})
socket.on("answer-is-b", ()=> {
    console.log("Answer is b")
    renderAnswer("B")
})
socket.on("answer-is-c", ()=> {
    console.log("Answer is c")
    renderAnswer("C")
})
socket.on("answer-is-d", ()=> {
    console.log("Answer is d")
    renderAnswer("D")
})
socket.on("answer-is-e", ()=> {
    console.log("Answer is e")
    renderAnswer("E")
})


function renderAnswer(answer) {
    console.log("Answer in client received:", answer)
    const answerContainer = document.querySelector(".answer-container")
    const loadingIcon = document.querySelector(".loading-icon")
    
    loadingIcon.classList.remove("d-none")
    answerContainer.textContent = "";

    setTimeout(()=> {
        answerContainer.textContent = answer || "--";
        loadingIcon.classList.add("d-none")
    }, 200
)   


    
    assignColor(answerContainer, answer)
}


function assignColor(elem, answer) {
    console.log()
    elem.classList.remove("answer-a")
    elem.classList.remove("answer-b")
    elem.classList.remove("answer-c")
    elem.classList.remove("answer-d")
    elem.classList.remove("answer-e")
    elem.classList.add(`${"answer-"+ answer.toLowerCase()}`)
}


console.log("MySocket:", socket)