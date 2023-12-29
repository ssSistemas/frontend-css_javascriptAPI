

function FiltrarPesquisa(){
    const videos = document.querySelectorAll(".videos__item")

    if(barraPesquisa.value==null){
        video.style.display="block"

    }else{
        for (let video of videos){
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
            let valorFiltro = barraPesquisa.value.toLowerCase();

            if (!titulo.includes(valorFiltro)){
                video.style.display = "none";
            }else{
                video.style.display = "block"
            
            }

        }

    }

}   


const barraPesquisa = document.querySelector(".pesquisar__input");


barraPesquisa.addEventListener("input",FiltrarPesquisa);
