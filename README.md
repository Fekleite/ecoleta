<h1 align="center" >Ecoleta 🌱</h1>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
  
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Fekleite/ecoleta">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Fekleite/ecoleta">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Fekleite/ecoleta">
  
  <a href="https://github.com/lukemorales/rocketshoes-react-native/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Fekleite/ecoleta">
  </a>

  <a href="https://github.com/lukemorales/rocketshoes-react-native/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Fekleite/ecoleta">
  </a>
</p>

<div align="center"  > <img src="https://user-images.githubusercontent.com/48728541/83947596-5c406300-a7ee-11ea-8f24-1af43117a769.jpeg" /> </div>

<p align="justify" style="font-size: 16px">Ecoleta é uma aplicação para registro de pontos de coleta de resíduos como pilhas, baterias, lâmpadas, entre outros que te ajuda a encontrar o ponto de coleta mais perto de você. </p>

<h2>💻 Tecnologias Utilizadas:</h2>

- <a href="https://nodejs.org/en/" style="text-decoration: none; font-size: 16px; color: #fff;" >Node JS </a>
- <a href="https://pt-br.reactjs.org/" style="text-decoration: none; font-size: 16px; color: #fff;" >React JS </a>
- <a href="https://reactnative.dev/" style="text-decoration: none; font-size: 16px; color: #fff;" >React Native </a>
- <a href="https://www.typescriptlang.org/" style="text-decoration: none; font-size: 16px; color: #fff;" >TypeScript </a>
  
<h2>🚀 Resultado Final:</h2>

<div align="center"  > <img src="https://user-images.githubusercontent.com/48728541/83947603-68c4bb80-a7ee-11ea-93a1-6e36ef6b6889.png" /> </div>

<div align="center"  > <img src="https://user-images.githubusercontent.com/48728541/83947623-93167900-a7ee-11ea-9808-a43fa60623c2.png" /> </div>

<h2>🚀 Pré-requisitos:</h2>

- Node JS
- Expo

<h2>🚀 Como utilizar:</h2>

<h3>🔥 Back-end</h3>

Instalando as dependências:

```
$ cd server
$ npm install
```
Banco de dados:

- Migrations

```
$ npm run knex:migrate
```

- Seeds

```
$ npm run knex:seed
```

Iniciando o servidor:

```
$ npm run dev
```

<h3>🔥 Front-end</h3>

Instalando as dependências:

```
$ cd web
$ npm install
```
Iniciando a aplicação:

```
$ npm start ou yarn start
```

<h3>🔥 Mobile</h3>

Instalando as dependências:

```
$ cd mobile
$ npm install
```
Iniciando a aplicação:

```
$ npm start ou yarn start
```

<h2>🚀 Endpoints:</h2>

- **GET**: `/items` - Listagem dos items para coleta
- **POST**: `/points` - Cadastro de pontos de coleta
- **GET**: `/points/:id` - Mostrar um ponto de coleta específico
- **GET**: `/points` - Listagem dos pontos para 

<h2>🚀 APIs Externas:</h2>

- <a href="https://servicodados.ibge.gov.br/api/docs/localidades?versao=1" style="font-size: 16px;" >API de Localidade do IBGE</a>

<h2>⚠️ Importante:</h2>

- Certifique-se de que todas as dependências foram instaladas corretamente.

- Para o app mobile funcionar corretamente altere a [baseURL](./mobile/src/services/api.ts) para o endereço local da sua máquina.


<h2>📝 Licença:</h2>

<p style="font-size: 16px; color: #fff;">Este projeto está licenciado sob a licença MIT - consulte a página <a href="https://opensource.org/licenses/MIT" style=" font-size: 16px; " >LICENSE</a> para obter detalhes.</p>

</br>
</br>
</br>

<p style="font-size: 16px; color: #fff;">Desenvolvido com ❤️ por <a href="https://github.com/Fekleite" style=" font-size: 16px;" >Fernanda Leite </a>
