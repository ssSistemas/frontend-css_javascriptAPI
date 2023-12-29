

function FiltrarPesquisa(local){
    const videos = document.querySelectorAll(".videos__item")
    if(!(barraPesquisa.value==null)){    
        
        for (let video of videos){
            let localPesquisa = video.querySelector(local).textContent.toLowerCase();
            let valorFiltro = barraPesquisa.value.toLowerCase();
            if (!localPesquisa.includes(valorFiltro)){
                video.style.display = "none";
            }else{
                video.style.display = "block"
            
            }

        }
    }
}   


const barraPesquisa = document.querySelector(".pesquisar__input");
barraPesquisa.addEventListener("input",()=>{FiltrarPesquisa(".titulo-video")});


const categorias = document.querySelectorAll(".superior__item")



categorias.forEach((categoria)=>{
    categoria.addEventListener("click",()=>{
        barraPesquisa.value=categoria.textContent;
        FiltrarPesquisa(".categoria");
    })
}
)


