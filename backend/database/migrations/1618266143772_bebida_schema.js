'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BebidaSchema extends Schema {
  up () {
    this.create('bebidas', (table) => {
      table.increments()
      table
        .integer('categoria_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('categorias')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name', 200).notNullable()
      table.string('teor', 200).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('bebidas')
  }
}

module.exports = BebidaSchema
