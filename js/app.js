document.addEventListener("DOMContentLoaded", () => {
  console.log("chargé");

  let exprmail =  /^[a-zA-Z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/;
  let exprmdp ="sam";

 warning = document.querySelector(".warning");
 let email = document.getElementsByTagName("input")[2].value;
 let password = document.getElementsByTagName("input")[3].value;
 let btn = document.getElementsByTagName("input")[4];
  btn.addEventListener("click", e => {
      e.preventDefault();
      send();
  });

         let send = () => {
      email = document.getElementsByTagName("input")[2].value;
      password = document.getElementsByTagName("input")[3].value;
      btn = document.getElementsByTagName("input")[4];

      if (email.match(exprmail) && password.match(exprmdp)) {
          warning.classList.add("success");
          warning.innerText = "Connexion réussie";
          localStorage.setItem("user", email);
          sessionStorage.setItem("user", "sessionid");
          alert("Bienvenue "+ password);
          console.log("Connexion réussie")
        } else if (email.match(exprmail)) {
          warning.innerText = "Mot de passe invalide";
          warning.classList.remove("success");
          console.log("Mot de passe invalide");
      } else if (password.match(exprmdp)) {
          warning.innerText = "Mail invalide";
          warning.classList.remove("success");
          console.log("Mail invalide")
      } else {
          warning.innerText = "Mail ou mot de passe incorrecte";
          warning.classList.remove("success");
          console.log("Mail ou mot de passe incorrecte");
      }
  };
});