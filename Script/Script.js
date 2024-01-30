let input_Adulto = document.getElementById('adultos')
let input_Criancas = document.getElementById('criancas')
let input_Duracao = document.getElementById('duracao')



let resultado = document.getElementById('resultado')

let calculo = document.getElementById('calculo')

calculo.addEventListener('click',()=>{

    let adultos = input_Adulto.value;
    let criancas = input_Criancas.value;
    let duracao = input_Duracao.value;

    let qtdCarne = (adultos * Carne()) + (Carne() * criancas)  / 2
    let qtdCerveja = (adultos * Cerveja())
    let qtdBebidas =(adultos * Bebidas()) + (Bebidas() * criancas) / 2

    if(qtdCarne < 1000){
        resultado.innerHTML =`<p>${qtdCarne}g de Carne 🥩</p>`
    }else{
        resultado.innerHTML =`<p>${qtdCarne / 1000}kg de Carne 🥩</p>`  
    }
    if(adultos < 5){
        resultado.innerHTML +=`<p>${qtdCerveja}ml de cerveja,  ${Math.round(Math.abs(qtdCerveja /355))} latas de cerveja 🍺</p>`
    }else{
        resultado.innerHTML +=`<p>${qtdCerveja / 1000} litros de Cerveja 🍺</p>`  
    }

    if(qtdBebidas <= 1200){
        resultado.innerHTML +=`<p>${qtdBebidas / 1000} litro de bebidas 🥤</p>`
    }else{
        resultado.innerHTML +=`<p>${qtdBebidas / 1000} litros de bebidas 🥤</p>`  
    }


    function Carne(){
        if(duracao >= 6){
            console.log(duracao)
            return 650
        }else{
            console.log(duracao)
            return 400
        }
    }
    
    function Cerveja(){
        if(duracao >= 6){
            console.log(duracao)
            return 2000
        }else{
            console.log(duracao)
            return 1200
        }
    }
    
    function Bebidas(){
        if(duracao >=6){
            console.log(duracao)
            return 1500
        }else{
            console.log(duracao)
            return 1000
        }
    }


})




