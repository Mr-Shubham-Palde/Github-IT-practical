$(document).ready(function(){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userList = $("#userList");

    if(users.length === 0){
        userList.html("<li> No users registered yet.</li>");
    }
    else{
        users.forEach(user => {
            userList.append(`<li>Name: ${user.name}, Email: ${user.email}</li>`);
        });
    }
});
