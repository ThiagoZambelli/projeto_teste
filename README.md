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

## Como Testar

1. Execute os testes unitários:
    ```bash
    npm test
    ```

## Estrutura do Projeto

- `mf_drawer`: Micro-frontend para navegação
- `mf_videos`: Micro-frontend para busca e listagem de vídeos
- `bff`: Backend for Frontend para comunicação com a API do YouTube

## Contato

Envie o link do repositório para frontend@icasei.com.br com o título 'Teste FrontEnd 2024'.
