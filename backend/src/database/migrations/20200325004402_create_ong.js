
exports.up = function(knex) { //Serve para criar a tabela
  return knex.schema.createTable('ongs', function (table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 3).notNullable();
  });

};

exports.down = function(knex) {//Serve para quando houver algum problema
  return knex.schema.dropTable('ongs');
};
