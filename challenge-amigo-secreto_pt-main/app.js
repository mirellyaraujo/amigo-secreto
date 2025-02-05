let amigos = [];

function adicionarAmigo() {
    const nome = document.getElementById('amigo').value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarListaAmigos();
    } else {
        alert('Nome inválido ou já adicionado.');
    }

    document.getElementById('amigo').value = ''; // Limpa o campo de texto
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    amigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É necessário pelo menos 2 pessoas para o sorteio!');
        return;
    }

    let resultados = [];
    let amigosSorteados = [...amigos]; // Copia a lista de amigos

    for (let i = 0; i < amigos.length; i++) {
        let sorteado;

        do {
            sorteado = amigosSorteados[Math.floor(Math.random() * amigosSorteados.length)];
        } while (amigos[i] === sorteado); // Verifica se não sorteou a si mesmo

        resultados.push(`${amigos[i]} tirou ${sorteado}`);
        amigosSorteados = amigosSorteados.filter(a => a !== sorteado); // Remove o sorteado da lista
    }

    exibirResultados(resultados);
}

function exibirResultados(resultados) {
    const resultadoContainer = document.getElementById('resultado');
    resultadoContainer.innerHTML = ''; // Limpa os resultados anteriores

    resultados.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        resultadoContainer.appendChild(li);
    });
}

