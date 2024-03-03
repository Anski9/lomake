
document.addEventListener("DOMContentLoaded", function() {
    var heightRange = document.getElementById("heightRange");
    var heightNumber = document.getElementById("heightNumber");

    heightRange.addEventListener("input", function() {
        heightNumber.value = heightRange.value;
    });
    heightNumber.addEventListener("input", function() {
        heightRange.value = heightNumber.value;
    });

    document.getElementById("sendButton").addEventListener("click", function(event) {

        var myForm = document.getElementById("myForm");
        if (!myForm.checkValidity()) {
            return;
        }

        var password1 = document.getElementById("password1").value;
        var password2 = document.getElementById("password2").value;
        var passwordsMatch = password1 === password2;
        

        if (!passwordsMatch) {
            alert("Salasanat eivät täsmää");
        }

        var result = "";
        result += "Full name: " + document.getElementById("fullname").value + "<br>";

        if (passwordsMatch) {
        result += "Password1: " + password1 + "<br>";
        result += "Password2: " + password2 + "<br>";
        }

        for (let choice of document.getElementsByName("gender")) {
            if (choice.checked) {
                result += "Gender: " + choice.value + "<br>";
                break;
            }
        }

        var hobbies = [];
        for (let hobby of document.getElementsByName("hobbies")) {
            if (hobby.checked) {
                hobbies.push(hobby.value);
            }
        }
        if (hobbies.length) {
            result += "Hobbies: " + hobbies.join(", ") + "<br>";
        }

        result += "Birth date: " + document.getElementById("birthdate").value + "<br>";
        result += "Height (cm): " + document.getElementById("heightNumber").value + "<br>";
        result += "Favorite color: " + document.getElementById("color").value + "<br>";
        result += "Country: " + document.getElementById("country").value + "<br>";
        result += "Profession: " + document.getElementById("profession").value + "<br>";

        let message = document.getElementById("message").value;
        result += "Message: <pre style='display:inline;'>" + message + "</pre>";

        document.getElementById("result").innerHTML = result;

        event.preventDefault();
    });
});