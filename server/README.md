# Next Level Week - Ecoleta

**Ecoleta**, é uma aplicação para registro de pontos de coleta de materiais como: pilhas, baterias, lâmpadas, resíduos eletrônicos, entre outros.

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


**Dev**: [Fernanda Leite](https://github.com/Fekleite)