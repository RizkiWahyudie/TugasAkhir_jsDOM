function buat_login(){
    var elem = document.getElementById("x");
    // menghapus elemen
    elem.parentElement.removeChild(elem);
    // Membuat elemen
    var p = document.createElement("p");
    p.className = "tulisan_login";
    p.innerHTML = "REGISTER";
    var element = document.getElementsByTagName("div")[0];
    // appendChild untuk membuat elemen
    element.appendChild(p);
    var form = document.createElement("form");
    element.appendChild(form);
    var label = document.createElement("label");
    label.innerHTML = "Nama User ";
    // element dibuat dalam form
    form.appendChild(label);
    var input_username = document.createElement("input");
    input_username.type = "text";
    input_username.value = "Rizki Wahyudie";
    input_username.name = "username";
    input_username.className = "form_login";
    form.appendChild(input_username);

    var telepon = document.createElement("label");
    telepon.innerHTML = "Nomor Handphone ";
    form.appendChild(telepon);
    var input_telepon = document.createElement("input");
    input_telepon.type = "text";
    input_telepon.value = "08xxx";
    input_telepon.name = "username";
    input_telepon.className = "form_login";
    form.appendChild(input_telepon);

    var email = document.createElement("label");
    email.innerHTML = "Username ";
    form.appendChild(email);
    var input_email = document.createElement("input");
    input_email.type = "email";
    input_email.name = "email";
    input_email.value = "xxxxx@gmail.com";
    input_email.className = "form_login";
    form.appendChild(input_email);

    var label2 = document.createElement("label");
    label2.innerHTML = "password : ";
    form.appendChild(label2);
    var input_password = document.createElement("input");
    input_password.type = "password";
    input_password.value = "xxxxxx";
    input_password.name = "password";
    input_password.className = "form_login";
    form.appendChild(input_password);

    var tombol = document.createElement("input");
    tombol.type = "submit";
    tombol.className = "tombol_login";
    form.appendChild(tombol);
}
