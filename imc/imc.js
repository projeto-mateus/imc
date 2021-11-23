function calcula_imc(){
    altura = document.imcForm.altura.value;
    peso = document.imcForm.peso.value;

    calculo = (peso/(altura*altura));

        if(calculo<18.5){
            alert("Voce esta abaixo do peso " + calculo)
        }
        else if (calculo>=18.5 && calculo<=24.9){
            alert("Voce esta com o peso ideal: " + calculo)
        }
        else if (calculo>=25 && calculo<=29.9){
            alert("Voce esta com o sob peso: " + calculo)
        }
        else if (calculo>=30 && calculo<39.9){
            alert("Voce esta com o obesidade: " + calculo)
        }
        else if (calculo>40){
            alert("Voce esta com obesidade mórbita: " + calculo)
        }
}
   
