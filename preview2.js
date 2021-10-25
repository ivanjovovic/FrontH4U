let fileInput1 = document.getElementById("file-input1");
let imageContainer1 = document.getElementById("images1");
let numOfFiles1 = document.getElementById("num-of-files1");

function preview2(){
    imageContainer1.innerHTML = "";
    numOfFiles1.textContent = `${fileInput1.files.length} Broj izabranih slika`;

    for(i of fileInput.files){
        let reader = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");
        figCap.innerText = i.name;
        figure.appendChild(figCap);
        reader.onload=()=>{
            let img = document.createElement("img");
            img.className="uplslike1";
            img.setAttribute("src",reader.result);
            figure.insertBefore(img,figCap);
        }
        imageContainer1.appendChild(figure);
        reader.readAsDataURL(i);
    }
}