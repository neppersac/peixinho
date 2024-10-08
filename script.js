// Variáveis globais para acumular coincidências
let acumuladorCoincidenciasHorizontais = 0;
let acumuladorCoincidenciasVerticais = 0;

function gerarNumerosAleatorios() {
    let numeros = [];
    
    for (let i = 0; i < 9; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 6) + 1;
        numeros.push(numeroAleatorio);
    }
    
    return numeros;
}

function preencherTabela() {
    const numerosAleatorios = gerarNumerosAleatorios();
    const tabela = document.getElementById('tabela-numeros');

    // Se a tabela já estiver preenchida, apenas atualiza as imagens
    if (tabela.rows.length > 0) {
        let index = 0;
        for (let i = 0; i < tabela.rows.length; i++) {
            for (let j = 0; j < tabela.rows[i].cells.length; j++) {
                const img = tabela.rows[i].cells[j].querySelector('img');
                img.src = `images/${numerosAleatorios[index]}.png`;
                img.alt = `Imagem ${numerosAleatorios[index]}`;
                index++;
            }
        }
    } else {
        // Caso a tabela ainda não tenha sido preenchida, cria a estrutura
        let index = 0;
        for (let i = 0; i < 3; i++) {
            const linha = document.createElement('tr');
            for (let j = 0; j < 3; j++) {
                const celula = document.createElement('td');
                const img = document.createElement('img');
                
                // Define o src da imagem baseado no número aleatório
                img.src = `images/${numerosAleatorios[index]}.png`;
                img.alt = `Imagem ${numerosAleatorios[index]}`;
                img.width = 50;  // Ajuste o tamanho da imagem se necessário
                img.height = 50; // Ajuste o tamanho da imagem se necessário

                celula.appendChild(img);
                linha.appendChild(celula);
                index++;
            }
            tabela.appendChild(linha);
        }
    }

    // Após preencher a tabela, verifica as coincidências
    calcularCoincidencias(numerosAleatorios);
}

function calcularCoincidencias(numeros) {
    let coincidenciasHorizontais = 0;
    let coincidenciasVerticais = 0;

    // Verifica coincidências horizontais (linhas)
    for (let i = 0; i < 3; i++) {
        if (numeros[i * 3] === numeros[i * 3 + 1] && numeros[i * 3 + 1] === numeros[i * 3 + 2]) {
            coincidenciasHorizontais++;
        }
    }

    // Verifica coincidências verticais (colunas)
    for (let i = 0; i < 3; i++) {
        if (numeros[i] === numeros[i + 3] && numeros[i + 3] === numeros[i + 6]) {
            coincidenciasVerticais++;
        }
    }

    // Acumula as coincidências
    acumuladorCoincidenciasHorizontais += coincidenciasHorizontais;
    acumuladorCoincidenciasVerticais += coincidenciasVerticais;
    
    // Exibe o resultado acumulado na página
    const resultadoDiv = document.getElementById('resultado-coincidencias');
    resultadoDiv.innerHTML = `
        <p>Coincidências Horizontais Acumuladas: ${acumuladorCoincidenciasHorizontais}</p>
        <p>Coincidências Verticais Acumuladas: ${acumuladorCoincidenciasVerticais}</p>
    `;
}

// Função para reiniciar os contadores
function reiniciarContadores() {
    acumuladorCoincidenciasHorizontais = 0;
    acumuladorCoincidenciasVerticais = 0;

    // Atualiza a interface para mostrar que os contadores foram reiniciados
    const resultadoDiv = document.getElementById('resultado-coincidencias');
    resultadoDiv.innerHTML = `
        <p>Coincidências Horizontais Acumuladas: ${acumuladorCoincidenciasHorizontais}</p>
        <p>Coincidências Verticais Acumuladas: ${acumuladorCoincidenciasVerticais}</p>
    `;
}

preencherTabela();

// Adiciona um evento de clique ao botão
document.getElementById('gerarNumeros').addEventListener('click', preencherTabela);
document.getElementById('reiniciarContadores').addEventListener('click', reiniciarContadores);