let input = document.querySelector("#ime")
let button = document.querySelector("#dugme")

button.disabled = true

input.addEventListener("change", stateHandle)

function stateHandle() {
  if (document.querySelector("#ime").value === "" && document.querySelector("#prezime").value === "" && document.querySelector("#tel").value === "" && document.querySelector("#email").value === "" && document.querySelector("#naslov").value === "" && document.querySelector("#cijena").value === "" && document.querySelector("#opis").value === "")  {
    
    button.disabled = true;
    
  } else {
    button.disabled = false;
  }
}