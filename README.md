# Next Level Week - Ecoleta 

<img src="https://user-images.githubusercontent.com/48728541/83681584-02a32300-a5b9-11ea-8cb8-eacc006aaad1.gif">

### Ecoleta é uma aplicação para registro de pontos de coleta de resíduos como pilhas, baterias, lâmpadas, resíduos eletrônicos, entre outros

#### 🔥 Trilha Booster  

<a href="https://www.figma.com/file/9TlOcj6l7D05fZhU12xWT3/Ecoleta-Booster?node-id=0%3A1" style="text-decoration: none; font-size: 16px; color: #fff;" >🚀 Layout no Figma </a>

### Stack:
<span style=" font-size: 14px; ">Node JS +</span>
<span style="font-size: 14px; ">React JS +</span>
<span style=" font-size: 14px; ">React Native</span>

## Back-end

 > API RESTful

### Tecnologias utilizadas:

- TypeScript
- Node.js
- Express
- SQlite
- Knex.js
- Cors
  
### Endpoints:

- **GET**: `/items` - Listagem dos items para coleta
- **POST**: `/points` - Cadastro de pontos de coleta
- **GET**: `/points/:id` - Mostrar um ponto de coleta específico
- **GET**: `/points` - Listagem dos pontos para coleta

### `yarn dev` ou `npm run dev`
 > Iniciar servidor

### `npm run knex:migrate` 
 > Criar migrations

### `npm run knex:seed` 
 > Criar seeds 

## Front-end

### Tecnologias utilizadas:

- TypeScript
- React JS
- JavaScript
- Axios
- Leaflet JS
- React Router DOM
- React Icons

### API externas:

- [Localidade](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1) - IBGE

### `yarn start` ou `npm start`

> Iniciar a aplicação

## Mobile

### Tecnologias utilizadas:

- TypeScript
- React Native
- Expo
- Axios

### `yarn start` ou `npm start`

> Inicia o app

### ⚠️ Importante

Para o app funcionar corretamente altere a [baseURL](./mobile/src/services/api.ts) para o endereço local da sua máquina.

<a href="https://github.com/Fekleite" style="text-decoration: none; font-size: 16px; color: #fff;" >💻 Fernanda Leite </a>


