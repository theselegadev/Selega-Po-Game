import { verify, save_names, clear_choices } from "./modules.js"

const card_rules = document.getElementById('card-rules')
const btn_close = document.getElementById('btn-close')
const btn_rules = document.getElementById('btn-rules')
const input_player01 = document.getElementById('player01')
const input_player02 = document.getElementById('player02')
const btn_play = document.getElementById('btn-play')

let close_rules = localStorage.getItem('close_rules')


document.addEventListener('DOMContentLoaded',()=>{
    localStorage.clear()
    localStorage.setItem('close_rules',false)
    clear_choices()
})

btn_rules.addEventListener('click',()=>{
    card_rules.style.top = "30%"
})

btn_close.addEventListener('click',()=>{
    card_rules.style.top = "-50%"
    localStorage.setItem('close_rules',true)
})

setTimeout(()=>{
    if(close_rules == "false"){
        card_rules.style.top = "30%"
        close_rules = localStorage.getItem('close_rules')
    }
},1300)

const myinterval = setInterval(()=>{
    if(verify(input_player01,input_player02)){
        btn_play.style.display = "block"
        clearInterval(myinterval)
    }
},2000)

btn_play.addEventListener('click',()=>{
    save_names(input_player01,input_player02)
})