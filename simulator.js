// THIS IS A STUDENT REGISTRATION SIMULATOR FOR TEACHERS TO CREATE A LIST. IT IS REGISTERED IN LOCAL STORAGE.

let student_array = [];

function student_registration() {
    
    let name = document.getElementById("nombre");
    let last_name = document.getElementById("apellido");
    let age = document.getElementById("edad");

    let estudiante = {nombre:name.value , apellido:last_name.value , edad:age.value};

    student_array.push(estudiante);

    let JSON_array = JSON.stringify(student_array);
    localStorage.setItem("student_list", JSON_array);
}

let btn_add = document.getElementById ("btn_add");
btn_add.addEventListener("click" , student_registration);

localStorage.clear()