
let controle =0;


const containerVideos = document.querySelector(".videos__container");

idInterval = setInterval(()=>{
    console.log(a);
    controle+=1;
    console.log(controle);
    if (controle==10){
        clearInterval(idInterval);
    }
},1000);


const a = fetch("http://localhost:3000/videos", {
    headers: {
        Accept: "application/json",
        Authorization: "7975deb3-cac9-6ee3-f10b-75eb65c5c1c6",
    },
})
    

    .then(function (result){
        console.log(result)
        return result.json()
    })                              
    
    .then(function(newResult){
        console.log(newResult)

        for (const dados of newResult){

            containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${dados.url}" title"${dados.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                         <img class="img-canal" src = "${dados.imagem}" alt="Logo do Canal">
                         <h3 class="titulo-video">${dados.titulo}</h3>
                             <p class="titulo-canal">${dados.descricao}</p>
                     </div>
                  
            </li>
            `
        }
        
  
    })

    .catch((error) => {
        containerVideos.innerHTML += `<p>Houve erro ao carregar videos: ${error} </p>`
        alert('catch')

    })



    ;




