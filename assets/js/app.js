/*Projet 12: Créez un bouton "Ajouter" et une liste à puces vide de contact (nom et numero de telephone ). Utilisez JavaScript pour ajouter un nouveau contact avec un champs .*/

document.getElementById("ajouter").addEventListener("click", function contact() {
    let nom = document.getElementById("nom").value.trim();
    let numero = document.getElementById("numero").value.trim();


    if (nom !== "" && numero !== "") {
        let li = document.createElement("li");
        li.textContent = nom + " : " + numero;

        document.getElementById("contactList").appendChild(li);

        document.getElementById("nom").value = "";
        document.getElementById("numero").value = "";
    }else if(nom == "" && numero == ""){

        document.getElementById("nom").value = "";
        document.getElementById("numero").value = "";
    }else {
        let li = document.createElement("li");
        if(nom == ""){
            li.textContent =" aucun nom : " + numero;
            document.getElementById("contactList").appendChild(li);

            document.getElementById("numero").value = "";
        }else{
            li.textContent = nom + " : aucun numero";
            document.getElementById("contactList").appendChild(li);

            document.getElementById("nom").value = "";
        }
        

    }
});
