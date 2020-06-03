import Knex from "knex";

export async function up(knex: Knex) {
  // CRIAR TABELA
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("title").notNullable();
  });
}

export async function down(knex: Knex) {
  // VOLTAR ATRAS (DELETAR A TABELA)
  return knex.schema.dropTable("items");
}
