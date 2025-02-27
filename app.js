function calcularIMC() {
    const Peso = parseFloat(document.getElementById('Peso').value);
    const Altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    const imc = Peso / (Altura*Altura);
    console.log (imc)

    if (imc < 18.5) {
        resultado.innerHTML = `<p>Seu Imc é ${imc}, baixo peso.</p>`;
    } else if (imc > 18.5) { 
        resultado.innerHTML = `<p>Seu Imc é ${imc}, peso ideal.</p>`;
    } else if (imc >= 25) {
        resultado.innerHTML = `<p>Seu Imc é ${imc}, sobrepeso.</p>`;
    } else if (imc > 30) {
        resultado.innerHTML = `<p>Seu Imc é ${imc}, obesidade grau 1.</p>`;
    } else if (imc > 35) {
        resultado.innerHTML = `<p>Seu Imc é ${imc}, obesidade grau 2.</p>`;
    } else if (imc > 40) {
        resultado.innerHTML = `<p>Seu Imc é ${imc}, obesidade extrema.</p>`;
    }

}