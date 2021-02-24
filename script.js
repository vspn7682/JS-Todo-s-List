const title = document.querySelector('#title');
const desc = document.querySelector('#desc');
const submit = document.querySelector('#submit');
const tableBody = document.querySelector('#tableBody');

function update() {

    let titleValue = title.value;
    let descValue = desc.value;

    if (localStorage.getItem('todoInfo') == null) {
        localStorage.setItem('todoInfo', JSON.stringify(todoArray));
    }
    else {
        todoArrayStr = localStorage.getItem('todoInfo');
        todoArray = JSON.parse(todoArrayStr);
    }

    let str = '';
    todoArray.forEach((todo, index) => {
        str += `
            <tr>
                <th scope="col">${index + 1}</th>
                <th scope="col">${todo[0]}</th>
                <th scope="col">${todo[1]}</th>
                <td><button class="btn btn-sm btn-outline-primary" onclick = deleteInfo(${index})>Delete</button></td>
              </tr>
        `
    })
    tableBody.innerHTML = str;
}

submit.addEventListener('click', () => {

    let titleValue = title.value;
    let descValue = desc.value;

    if (localStorage.getItem('todoInfo') == null) {
        todoArray = [];
        todoArray.push([titleValue, descValue]);
        localStorage.setItem('todoInfo', JSON.stringify(todoArray));
    }
    else {
        todoArrayStr = localStorage.getItem('todoInfo');
        todoArray = JSON.parse(todoArrayStr);
        todoArray.push([titleValue, descValue]);
        localStorage.setItem('todoInfo', JSON.stringify(todoArray));
    }

    update();
});

function deleteInfo(infoIndex) {
    todoArrayStr = localStorage.getItem('todoInfo');
    todoArray = JSON.parse(todoArrayStr);
    todoArray.splice(infoIndex, 1);
    localStorage.setItem('todoInfo', JSON.stringify(todoArray));
    update();
    console.log(`deleted ${infoIndex}`);
}

update();
