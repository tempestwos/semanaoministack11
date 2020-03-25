
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table){
    //Primary Key
    table.increments();
    //Campos da Tabela
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    //Relacionamentos
    table.string('ong_id').notNullable();
    //Chave Estrangeira
    table.foreign('ong_id').references('id').inTable('ongs');
  });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
  
};
