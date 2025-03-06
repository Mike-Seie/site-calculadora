function toggleQuadril() {
    const sexo = document.getElementById('sexo').value;
    const quadrilContainer = document.getElementById('quadril-container');
    
    // Se o sexo for masculino, esconder o campo de quadril, caso contrário, mostrar
    if (sexo === 'masculino') {
        quadrilContainer.classList.add('hidden');
    } else {
        quadrilContainer.classList.remove('hidden');
    }
}

function calcularPercentual() {
    // Pega os valores das entradas
    const altura = parseFloat(document.getElementById('altura').value);
    const cintura = parseFloat(document.getElementById('cintura').value);
    const pescoço = parseFloat(document.getElementById('pescoço').value);
    const quadril = document.getElementById('sexo').value === 'feminino' ? parseFloat(document.getElementById('quadril').value) : null;
    const sexo = document.getElementById('sexo').value;
    
    // Verifica se todos os campos foram preenchidos corretamente
    if (isNaN(altura) || isNaN(cintura) || isNaN(pescoço) || (sexo === 'feminino' && isNaN(quadril))) {
        document.getElementById('resultado').innerText = 'Por favor, preencha todos os campos corretamente!';
        return;
    }

    let percentualGordura = 0;

    // Cálculo para mulheres
    if (sexo === 'feminino') {
        percentualGordura = 163.205 * Math.log10(cintura + quadril - pescoço) - 97.684 * Math.log10(altura) - 78.387;
    }
    // Cálculo para homens
    else {
        percentualGordura = 86.010 * Math.log10(cintura - pescoço) - 70.041 * Math.log10(altura) + 36.76;
    }

    // Exibe o resultado
    document.getElementById('resultado').innerText = `RESULTADO: ${percentualGordura.toFixed(2)}%`;
}

function resetarFormulario() {
    // Limpa os campos
    document.getElementById('sexo').value = 'feminino';
    document.getElementById('altura').value = '';
    document.getElementById('cintura').value = '';
    document.getElementById('pescoço').value = '';
    document.getElementById('quadril').value = '';
    document.getElementById('resultado').innerText = 'RESULTADO: ';
    
    // Reseta o campo quadril conforme o sexo selecionado
    toggleQuadril();
}

// Chama a função no carregamento inicial para ajustar o campo quadril
window.onload = toggleQuadril;
