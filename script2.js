async function carregarDadosDoServidorComTimeout(url, timeout) {
    try {
        const response = await Promise.race([
            fetch(url, {
                headers: {
                    Accept: "application/json",
                    Authorization: "7975deb3-cac9-6ee3-f10b-75eb65c5c1c6",
                },
            }),
            new Promise((_, reject) => {
                setTimeout(() => {
                    containerVideos.innerHTML += `<p>servidor não respondeu no tempo de timeout = ${timeout} então será considerado que a requisição de carregamento de video falhou, </p>`
                    reject(new Error("Tempo limite excedido"));
                }, timeout);
            }),
        ]);
        const data = await response.json();
        return data;
    } catch (error) {

        throw new Error("Erro:", error);

    }
}

const containerVideos = document.querySelector(".videos__container");

// Uso da função com timeout de 3 segundos
carregarDadosDoServidorComTimeout("http://localhost:3000/videos", 3000)
    .then((videos) => {
        videos.forEach((video) => {
            containerVideos.innerHTML += `
          <li class="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
              <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
              <h3 class="titulo-video">${video.titulo}</h3>
              <p class="titulo-canal">${video.descricao}</p>
              <p class="categoria">${video.categoria}</p>
            </div>
          </li>`;
        });
    })
    .catch((error) => {
        containerVideos.innerHTML += `<p>Houve erro ao carregar videos: ${error} </p>`
     
    });
