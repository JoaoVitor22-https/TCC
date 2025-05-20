document.getElementById("taskForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    
    const titulo = document.getElementById("titulo").value;
    const data = document.getElementById("data").value;
    const categoria = document.getElementById("categoria").value;
    const status = document.getElementById("status").value;
    const lembrete = document.getElementById("lembrete").value;
    const recorrente = document.getElementById("recorrente").checked;
  
    
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
  
  
    document.getElementById("listaTarefas").appendChild(tarefa);
  
    
    tarefa.querySelector(".excluir").addEventListener("click", () => tarefa.remove());
  
   
    tarefa.querySelector(".editar").addEventListener("click", () => {
      alert("Função de edição em desenvolvimento");
    });
  
    
    e.target.reset();
  });
  