# Projeto de Teste de Frontend

## Como Compilar

1. Clone o repositório
2. Instale as dependências para cada microfrontend e BFF:
    ```bash
    npm install
    ```
3. Configure sua API_KEY no arquivo `bff/index.js`

## Como Rodar

1. Execute os containers Docker:
    ```bash
    docker-compose up
    ```
## Estrutura do Projeto

- `mf_drawer`: Micro-frontend para navegação
- `mf_videos`: Micro-frontend para busca e listagem de vídeos
- `bff`: Backend for Frontend para comunicação com a API do YouTube

