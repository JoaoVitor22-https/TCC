document.getElementById("taskForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Captura os dados do formulário
    const titulo = document.getElementById("titulo").value;
    const data = document.getElementById("data").value;
    const categoria = document.getElementById("categoria").value;
    const status = document.getElementById("status").value;
    const lembrete = document.getElementById("lembrete").value;
    const recorrente = document.getElementById("recorrente").checked;
  
    // Cria o container da tarefa
    const tarefa = document.createElement("div");
    tarefa.className = "card mb-3";
    tarefa.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${titulo}</h5>
        <p class="card-text"><strong>Data:</strong> ${data}</p>
        <p class="card-text"><strong>Categoria:</strong> ${categoria}</p>
        <p class="card-text"><strong>Status:</strong> ${status}</p>
        <p class="card-text"><strong>Recorrente:</strong> ${recorrente ? "Sim" : "Não"}</p>
        <p class="card-text"><strong>Lembrete:</strong> ${lembrete || "Nenhum"}</p>
        <button class="btn btn-warning btn-sm me-2 editar">Editar</button>
        <button class="btn btn-danger btn-sm excluir">Excluir</button>
      </div>
    `;
  
    // Adiciona a tarefa na lista
    document.getElementById("listaTarefas").appendChild(tarefa);
  
    // Adiciona funcionalidade de excluir
    tarefa.querySelector(".excluir").addEventListener("click", () => tarefa.remove());
  
    // Placeholder para edição
    tarefa.querySelector(".editar").addEventListener("click", () => {
      alert("Função de edição em desenvolvimento");
    });
  
    // Limpa o formulário
    e.target.reset();
  });
  