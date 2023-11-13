let btnConvert = document.querySelector('#btnConvert')



function convert (){
    let celsius = document.querySelector('#inpCelsius') 
    let farenheit = document.querySelector('#inpFarenheit') 
        if (+celsius.value > 0){
            let converted = +celsius.value * 9/5 +32 
            farenheit.value = converted
            
        }else if (+farenheit.value > 0){
            let converted = (+farenheit.value - 32) * 5/9
            celsius.value = converted
        }else {
            alert("Please enter a value")
        }
}




btnConvert.addEventListener('click', convert)
