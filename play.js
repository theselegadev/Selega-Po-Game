class selega_po{
    static play(){
        manipulation_choice.clear_choices()
        manipulation_result.clear()
        manipulation_choice.show_card()
        manipulation_choice.alter_names()
        manipulation_names.insert_names()
        manipulation_images.showImages("choice_player1")
        manipulation_images.showImages("choice_player2")
    }
    static verify_winner(){
        manipulation_result.verify_result()
    }
}

class manipulation_choice{
   static card_choices = document.getElementById('card-choices')
   static card_name_player = document.getElementById('card-name-player')
   static background = document.getElementById('background')
   static closeCard = false
   
   static insertChoice(value){
        if(manipulation_choice.card_name_player.innerText == manipulation_names.name_player01){
            localStorage.setItem("choice_player1",value)
        }else{
            localStorage.setItem("choice_player2",value)
            manipulation_choice.card_choices.style.display = "none"
            this.background.style.filter = "blur(0px)"
            this.closeCard = true
        }

   }

   static show_card(){
        setTimeout(()=>{
            this.card_choices.style.display = "flex"
        },1000)
   }

   static alter_names(){
        const myinterval = setInterval(()=>{
            if(localStorage.getItem('choice_player1') != null){
                this.card_name_player.innerText = manipulation_names.name_player02
                clearInterval(myinterval)
            }else{
                this.card_name_player.innerText = manipulation_names.name_player01
            }
        },1000)
   }

   static clear_choices(){
        document.addEventListener('DOMContentLoaded',()=>{
            localStorage.removeItem('choice_player1')
            localStorage.removeItem('choice_player2')
        })
   }
}

class manipulation_names{
    static name_player01 = localStorage.getItem('name_player1')
    static name_player02 = localStorage.getItem('name_player2')

    static show_player1 = document.getElementById('name-player1')
    static show_player2 = document.getElementById('name-player2')
    
    static insert_names(){
        this.show_player1.innerText = this.name_player01
        this.show_player2.innerText = this.name_player02
    }
}

class manipulation_images{
    static image_choice_player1 = document.getElementById('image-choice-player1')
    static image_choice_player2 = document.getElementById('image-choice-player2')
    
    static showImages(player){
        const myinterval = setInterval(()=>{
            if(manipulation_choice.closeCard == true){
                if(localStorage.getItem(player) == 'pedra' && player == "choice_player1"){
                    this.image_choice_player1.src = "./images/pedra.png"
                }else if(localStorage.getItem(player) == 'papel' && player == "choice_player1"){
                    this.image_choice_player1.src = "./images/papel.png"
                }else if(localStorage.getItem(player) == 'tesoura' && player == "choice_player1"){
                    this.image_choice_player1.src = "./images/tesoura.png"
                }else if(localStorage.getItem(player) == 'pedra'){
                    this.image_choice_player2.src = "./images/pedra.png"
                    clearInterval(myinterval)
                }else if(localStorage.getItem(player) == 'papel'){
                    this.image_choice_player2.src = "./images/papel.png"
                    clearInterval(myinterval)
                }else if(localStorage.getItem(player) == 'tesoura'){
                    this.image_choice_player2.src = "./images/tesoura.png"
                    clearInterval(myinterval)
                }
            }
        },100)
    }
}

class manipulation_result{
    static image = document.getElementById('image-winner')

    static show_card(){
        const card_winner = document.getElementById('card-winner')
        
        setTimeout(()=>{
            if(manipulation_screen.size_screen <=900){
                card_winner.style.top = "20%"
            }else{
                card_winner.style.top = "10%"
            }
        },3500)
    }

    static clear(){
        document.addEventListener('DOMContentLoaded',()=>{
            manipulation_choice.closeCard = false
        })
    }

    static verify_result(){
        const place_winner = document.getElementById('place-winner')
        
        const myinterval = setInterval(()=>{
            if(manipulation_choice.closeCard == true){
                const choice_player1 = localStorage.getItem('choice_player1')
                const choice_player2 = localStorage.getItem('choice_player2')

                console.log(choice_player1,choice_player2)
                
                if(choice_player1 === choice_player2){
                    place_winner.innerText = "Infelizmente empatou"
                    manipulation_result.image.src = "./images/empatou.png"
                }else if(choice_player1 == 'pedra' && choice_player2 == 'tesoura'){
                    place_winner.innerText = `Parabéns ${manipulation_names.name_player01} você ganhou`
                    manipulation_result.image.src = "./images/winners.png"
                }else if(choice_player1 == 'pedra' && choice_player2 == 'papel'){
                    place_winner.innerText = `Parabéns ${manipulation_names.name_player02} você ganhou`
                    manipulation_result.image.src = "./images/winners.png"
                }else if(choice_player1 == 'tesoura' && choice_player2 == 'papel'){
                    place_winner.innerText = `Parabéns ${manipulation_names.name_player01} você ganhou`
                    manipulation_result.image.src = "./images/winners.png"
                }else if(choice_player1 == 'tesoura' && choice_player2 == 'pedra'){
                    place_winner.innerHTML = `Parabéns ${manipulation_names.name_player02} você ganhou`
                    manipulation_result.image.src = "./images/winners.png"
                }else if(choice_player1 == 'papel' && choice_player2 == 'tesoura'){
                    place_winner.innerText = `Parabéns ${manipulation_names.name_player02} você ganhou`
                    manipulation_result.image.src = "./images/winners.png"
                }else if(choice_player1 == 'papel' && choice_player2 == 'pedra'){
                    place_winner.innerText = `Parabéns ${manipulation_names.name_player01} você ganhou`
                    manipulation_result.image.src = "./images/winners.png"
                }
                manipulation_result.show_card()
                clearInterval(myinterval)
            }
        },100)
    }
}

class manipulation_screen{
    static size_screen = window.innerWidth
}

selega_po.play()
selega_po.verify_winner()