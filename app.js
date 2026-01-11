function HandleEditProfile(){
    var name = document.getElementById("name").textContent
    var inputname = document.getElementById("input-name")
    inputname.value = name

    var email = document.getElementById("email").textContent
    var inputemail = document.getElementById("input-email")
    inputemail.value = email

    var hobbies = document.getElementById("hobbies").textContent
    var inputhobbies = document.getElementById("input-hobbies")
    inputhobbies.value = hobbies
    
    document.getElementById("edit").style.display = "block"
    document.getElementById("display").style.display = "none"
}
function HandleUpdateProfile(){
   var updatedname = document.getElementById("input-name").value
   var name = document.getElementById("name")
   name.textContent = updatedname

   var updatedemail = document.getElementById("input-email").value
   var email = document.getElementById("email")
   if (validator.isEmail(updatedemail)){
        email.textContent = updatedemail
   } else{
    alert("Wrong Email Format")
   }
   

   var updatedhobbies = document.getElementById("input-hobbies").value
   var hobbies = document.getElementById("hobbies")
   hobbies.textContent = updatedhobbies
   
    document.getElementById("edit").style.display = "none"
    document.getElementById("display").style.display = "block"
}