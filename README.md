# XMLChange

**Descrição do Projeto - Backend**

Este projeto de backend foi desenvolvido para oferecer suporte a uma aplicação de edição de arquivos XML no lado do frontend. A aplicação permite que os usuários carreguem arquivos XML, façam edições nos dados e, em seguida, salvem as alterações, resultando na criação de um novo arquivo XML.

### Funcionalidades Principais:

1.  **Leitura de Arquivos XML:**
    
    *   O backend suporta a leitura de arquivos XML enviados pelo frontend.
    *   Utiliza a biblioteca `xml2js` para analisar o XML e convertê-lo em uma estrutura de objeto JavaScript.
2.  **Edição de Dados XML:**
    
    *   Permite que o usuário edite os dados do XML por meio de uma interface frontend.
    *   As edições incluem a adição, edição e remoção de campos e valores.
3.  **Salvar Dados Editados:**
    
    *   Os dados editados são transformados de volta em XML.
    *   O XML atualizado é salvo em um novo arquivo.
4.  **Download do Arquivo XML Atualizado:**
    
    *   Oferece a capacidade de baixar o arquivo XML atualizado no frontend após as edições.

### Endpoints:

*   **`POST /api/xml/read`**
    
    *   Endpoint para receber arquivos XML do frontend.
*   **`POST /api/xml/save`**
    
    *   Endpoint para salvar dados editados e retornar o arquivo XML atualizado.

### Estrutura do Projeto:

*   **`server.js`**: Configuração e inicialização do servidor Express.
*   **`app/controllers/NFeReaderController.js`**: Controller responsável por manipular as requisições relacionadas à leitura e processamento de XML.
*   **`app/facades/NFeReaderFacade.js`**: Facade que simplifica a interação entre o controller e o serviço.
*   **`app/services/XmlReaderService.js`**: Serviço que realiza a análise de XML e converte para JSON.
*   **`app/services/XmlSaveService.js`**: Serviço para salvar dados editados como um novo arquivo XML.

### Dependências Principais:

*   **`express`**: Framework web para Node.js.
*   **`express-fileupload`**: Middleware para facilitar o upload de arquivos.
*   **`xml2js`**: Biblioteca para análise e construção de XML.

Para mais informações sobre o frontend associado, consulte o README.md no repositório [react-xmlchange-frontend](https://github.com/chrissoares/react-xmlchange-frontend.git).

## Configuração

Certifique-se de ter o Node.js instalado.

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
2. Instale as dependências:
   ```bash
   cd nome-do-repositorio
   npm install
3. Execute o servidor:
   ```bash
   npm start
O servidor estará disponível em http://localhost:3001.

Endpoints
---------

### `POST /api/xml/read`
Endpoint para ler um arquivo XML enviado pelo usuário.

#### Parâmetros da Requisição:
*   `xmlFile`: Arquivo XML enviado.

#### Exemplo de Requisição:
```bash
curl -X POST http://localhost:3001/api/xml/read -H "Content-Type: multipart/form-data" -F "xmlFile=@caminho/do/arquivo.xml"
```
#### Exemplo de Resposta:

O JSON resultante da leitura do arquivo XML.

### `POST /api/xml/save`
Endpoint para salvar os dados editados em formato JSON, transformá-los em XML e devolver o XML.

#### Parâmetros da Requisição:

*   `editedData`: Dados editados em formato JSON.
*   `newKey`: Novo campo a ser adicionado, se aplicável.

#### Exemplo de Requisição:

```bash
curl -X POST http://localhost:3001/api/xml/save -H "Content-Type: application/json" -d '{"editedData": {"example": "data"}, "newKey": "novoCampo"}'
```
#### Exemplo de Resposta:
O arquivo XML será devolvido como resposta.

Estrutura do Projeto
--------------------

Explicação da estrutura de pastas e arquivos no projeto.

*   `app/`: Contém os principais módulos do aplicativo.
    *   `controllers/`: Lida com a lógica de controle da aplicação.
    *   `facades/`: Faz a ponte entre os controllers e os services.
    *   `routes/`: Define as rotas da aplicação.
    *   `services/`: Contém lógica de negócios e serviços.
*   `path/`: Armazena arquivos.
    *   `uploads`: Armazena arquivos enviados pelos usuários.
    *   `to`: Armazena arquivos enviados para usuários.

Contribuindo
------------

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) ou enviar pull requests.

Licença
-------

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](https://github.com/chrissoares/nodejs-xmlchange-backend/blob/master/LICENCE) para mais detalhes.
    