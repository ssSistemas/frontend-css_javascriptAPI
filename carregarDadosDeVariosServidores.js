async function carregarDadosDosServidoresComTimeout(urls, timeout) {
    try {
        const requests = urls.map(url =>
            fetch(url, {
                headers: {
                    Accept: "application/json",
                    Authorization: "7975deb3-cac9-6ee3-f10b-75eb65c5c1c6",
                },
            })
        );

        let primeiraResposta = null;

        // Função para criar uma Promise com timeout
        const timeoutPromise = (ms) =>
            new Promise((_, reject) => setTimeout(() => reject(new Error("Tempo limite excedido")), ms));

        // Espera pela primeira resposta bem-sucedida
        for (const request of requests) {
            try {
                const response = await Promise.race([request, timeoutPromise(timeout)]);
                primeiraResposta = await response.json();
                break;
            } catch (error) {
                // Ignora o erro e continua com as próximas requisições
            }
        }

        if (primeiraResposta) {
            // Retorna os dados da primeira resposta bem-sucedida
            return primeiraResposta;
        } else {
            // Todas as tentativas falharam, lança um erro
            throw new Error("Todas as tentativas de carregar os vídeos falharam");
        }
    } catch (error) {
        // Lidar com o erro aqui
        throw new Error(`Houve erro ao carregar vídeos: ${error.message}`);
    }
}

// Exemplo de uso com dois servidores
const servidores = [
    "http://localhost:3000/videos",
    "http://localhost:3001/videos",
];

const containerVideos = document.querySelector(".videos__container");

carregarDadosDosServidoresComTimeout(servidores, 40000)
    .then(data => {
        // Processar os dados e criar a estrutura HTML
        data.forEach((video) => {
            containerVideos.innerHTML += `
                <li class="videos__item">
                    <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                        <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
                        <h3 class="titulo-video">${video.titulo}</h3>
                        <p class="titulo-canal">${video.descricao}</p>
                    </div>
                </li>`;
        });
    })
    .catch(error => {
        // Lidar com o erro aqui
        console.error(error);
        containerVideos.innerHTML += `<p>${error.message}</p>`;
    });
