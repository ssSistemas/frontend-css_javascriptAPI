



const containerVideos = document.querySelector(".videos__container");

const api = fetch("http://localhost:3000/videos", {
    headers: {
        Accept: "application/json",
        Authorization: "7975deb3-cac9-6ee3-f10b-75eb65c5c1c6",
    },
})
    .then(res => res.json())
    .then((videos) =>
        videos.forEach((video) => {
            containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title"${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                         <img class="img-canal" src = "${video.imagem}" alt="Logo do Canal">
                         <h3 class="titulo-video">${video.titulo}</h3>
                             <p class="titulo-canal">${video.descricao}</p>
                             <p class="categoria">${video.categoria}</p>
                     </div>
                  
            </li>
            `

        })
    )
    .catch((error) => {
        containerVideos.innerHTML += `<p>Houve erro ao carregar videos: ${error} </p>`
        alert('catch')
    }
    
    )


    ;





