var input = document.getElementsByClassName('newInputs')
var add = document.getElementById('add')
var tbody = document.getElementById('tabela')


function addInfos(event) {
    const newTr = document.createElement('tr')
    //tbody.appendChild(newTr);
    const redButton = document.createElement('th')
    redButton.innerHTML = '<button type="button" onclick="removeRow(this)" class="btn btn-outline-danger rounded-pill">X</button>'
    newTr.appendChild(redButton)
    for (var i = 0; i < input.length; i++) {
        const newTd = document.createElement('td')
        newTd.innerHTML = input[i].value
        newTr.appendChild(newTd)
    }
    tbody.appendChild(newTr)

}

function removeRow(event) {
    const row = event.closest('tr')
    row.remove()
}


add.addEventListener("click", addInfos);
