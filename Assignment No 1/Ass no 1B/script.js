$(document).click(function(){
    $("#submit").click(function(){

        //here we are going to take the user input

        const user={
            name:$("#name").val(),
            email:$("#email").val()
        };

        // now i have to convert it into an json to store it in local storage 
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));
        
        alert("user Registered successfully!");
        $("#registration").reset();


    })
})