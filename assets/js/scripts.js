let contador = 0

let input = document.getElementById('inputTarefa')
let btnAdd = document.getElementById('btn-add')
let section2 = document.getElementById('areaLista')

function addTarefa() {
    let valorInput = input.value
    
    if((valorInput.length !== 0) && (valorInput != '') && (valorInput !== null) && (valorInput !== undefined) ) {

        ++contador
        let novoItem = `<div id="${contador}" class="item">
                <div onclick='marcarTarefa(${contador})' class="item-icone">
                    
                </div>
                <div onclick='marcarTarefa(${contador})' class="item-nome item-c">
                    ${valorInput}
                </div>
                <div class="item-botao item-c">
                    <button onclick="deletar(${contador})" class="delete"></button>
                </div>
            </div>`
            section2.innerHTML += novoItem
            input.value = ''
            input.focus()
    }else{
        alert('Escreva alguma tarefa!.')
    }
}

function marcarTarefa(id) {
    let item = document.getElementById(id)
    let classe = item.getAttribute('class')

    console.log(classe)

    if (classe == "item"){

        item.classList.add('clicado')
        item.parentNode.appendChild(item)

    }else {
        item.classList.remove('clicado')
        
    }
}

function deletar(id){
    let tarefa = document.getElementById(id)
    tarefa.remove()
}

input.addEventListener('keyup', function(event){
    if (event.keyCode == 13){
        event.preventDefault()
        btnAdd.click()
    }
})