const pantallla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
    boton.addEventListener("click" ,() =>{
        const botonApretado = boton.textContent;

        if(boton.id === "c"){
            pantallla.textContent= "0";
            return;
        }
        if (boton.id === "borrar") {
            if (pantallla.textContent.length===1 ||pantallla.textContent ==="Error!"){
                pantallla.textContent = "0";
            }else{
                pantallla.textContent = pantallla.textContent.slice (0,-1);
            }
            return; 
        }
        if(boton.id === "igual") {
            try{
                pantallla.textContent = eval (pantallla.textContent)
            }catch{
                pantallla.textContent= "Error!";
            }
            return;
        }

        if(pantallla.textContent === "0"||pantallla.textContent ==="Error!" ){
            pantallla.textContent =botonApretado;
        
        }else{
        pantallla.textContent +=botonApretado;
    }

    }) 
});
  