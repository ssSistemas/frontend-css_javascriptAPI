



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
                <iframe src="${video.link}" title"${video.cidade}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
        
                         <h3 class="titulo-video">${video.modalidade}</h3>
                             <p class="titulo-canal">${video.descricao}</p>
                     </div>
                  
            </li>
            `

        })
    )
    .catch((error) => {
        alert('Falha ao acessar end point!')

    }
    ) 


    ;





