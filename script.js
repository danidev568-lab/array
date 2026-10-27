// Array para armazenar os nomes
let nomes = [];

// Seleção dos elementos do HTML
const nomeInput = document.getElementById("nomeInput");
const btnIncluir = document.getElementById("btnIncluir");
const btnExibir = document.getElementById("btnExibir");
const btnExcluir = document.getElementById("btnExcluir");
const resultado = document.getElementById("resultado");

// Função para incluir um nome no Array
btnIncluir.addEventListener("click", () => {
    const nome = nomeInput.value.trim();
    if (nome !== "") {
        nomes.push(nome);
        alert(`Nome "${nome}" incluído com sucesso!`);
        nomeInput.value = "";
        nomeInput.focus();
    } else {
        alert("Por favor, digite um nome valido.");
    }
});

// Função para exibir os nomes do Array
btnExibir.addEventListener("click", () => {
    if (nomes.length === 0) {
        resultado.innerHTML = "<p>O array está vazio.</p>";
    } else {
        resultado.innerHTML = `<p><strong>aluno adicionado:</strong> ${nomes.join(", ")}</p>`;
    }
});

// Função para excluir o último nome do Array (ou um nome específico)
btnExcluir.addEventListener("click", () => {
    const nomeParaRemover = nomeInput.value.trim();
    
    if (nomeParaRemover !== "") {
        // Remove pelo nome digitado no input
        const index = nomes.indexOf(nomeParaRemover);
        if (index !== -1) {
            nomes.splice(index, 1);
            alert(`Nome "${nomeParaRemover}" removido!`);
            nomeInput.value = "";
        } else {
            alert(`Nome "${nomeParaRemover}" não foi encontrado no array.`);
        }
    } else if (nomes.length > 0) {
        // Se o campo estiver vazio, remove o último elemento adicionado
        const removido = nomes.pop();
        alert(`Último nome ("${removido}") foi removido!`);
    } else {
        alert("O array já está vazio.");
    }
    // Atualiza a exibição se ela estiver visível
    resultado.innerHTML = "";
});