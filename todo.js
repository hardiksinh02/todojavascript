window.onload = () => {
    document.querySelector('#btnsub').onclick = add;
}

function add(e) {

    e.preventDefault();
    let input = document.querySelector('#taskin').value;

    if (input == '') {
        alert("Please Enter Value")
        return;
    }

    let displaytodo = document.querySelector('#todoshow')

    let taskmain = document.createElement("div");
    taskmain.classList.add("task");

    let addcheck = document.createElement("input");
    addcheck.setAttribute("type", "checkbox");
    addcheck.classList.add("checkbox");

    let todo = document.createElement("input");
    todo.setAttribute("type", "text");
    todo.setAttribute("id", "todoname");
    todo.setAttribute("readonly", "readonly");
    todo.value = (input);
    
    

    let editbtn = document.createElement("button");
    editbtn.innerText = "Edit";
    editbtn.classList.add("editbtn");

    let delbtn = document.createElement("button");
    delbtn.classList.add("delbtn");
    delbtn.innerText = "Delete";

    document.getElementById("taskin").value = "";

    taskmain.appendChild(addcheck);
    taskmain.appendChild(todo);
    taskmain.appendChild(editbtn);
    taskmain.appendChild(delbtn);
    displaytodo.appendChild(taskmain);

    



    editbtn.addEventListener('click', (e) => {
        if (editbtn.innerText.toLowerCase() == "edit") {
            todo.removeAttribute("readonly");
            todo.focus();
            editbtn.innerText = "Save"
        }else {
            editbtn.innerText = "Edit";
            todo.setAttribute("readonly", "readonly");
        }
    })

    delbtn.addEventListener('click', (e) => {
        if(confirm("Are you sure to delete this task?")){
            displaytodo.removeChild(taskmain);
    }
        
    });

    addcheck.addEventListener('click', (e) => {
        if(confirm("Your Task Is Complete?")){
        comshow.appendChild(taskmain);
        taskmain.removeChild(delbtn);
        taskmain.removeChild(editbtn);
        addcheck.disabled = true;
    }else{
        addcheck.checked = false;
    }
    });


    // addcheck.addEventListener('click', (e) => {
    //     displaytodo.appendChild(taskmain);
    // });

    delbtn.addEventListener('click', (e) => {
        comshow.removeChild(taskmain);
    });

}


