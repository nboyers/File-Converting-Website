

 function visitGithub(){
    window.open("https://github.com/nboyers", "_blank");
}

function visitLinkedIn(){
    window.open("https://www.linkedin.com/in/nboyers", "_blank");
}


function updateForm() {
    let FirstName = document.getElementById("fname");
    let LastName = document.getElementById("lname");

    if (FirstName == " " && LastName == " "){
        alert("Thank you. Your response has been recorded");
        clearForm();
    } else { 
        alert('Thank you,' + FirstName.value + ' ' + LastName.value +' your response has been recorded.');
        clearForm();
    }
  }

  function clearForm() {
    document.getElementById("subject").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("fname").value = "";
  }