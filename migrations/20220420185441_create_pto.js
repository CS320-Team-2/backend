/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pto', (table) => {
        table.increments('id').unique().notNullable().primary();
        table.integer('emp_id').notNullable();
        table.foreign('emp_id').references('id').inTable('employees');
        table.integer('manager_id').notNullable();
        table.foreign('manager_id').references('id').inTable('employees');
        table.string('type').notNullable();
        table.string('additional_info');
        table.date('start_date').notNullable();
        table.date('end_date').notNullable();
        table.boolean('approved').notNullable();
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
