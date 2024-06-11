import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'voters'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer("constituency_no")
      table.integer("yadi_no")
      table.integer("voter_no")

      table.string("voter_full_name_marathi")
      table.string("middle_name_marathi")
      table.string("first_name_english")
      table.string("middle_name_english")
      table.string("last_name_english")
      table.string("sex")
      table.integer("age")
      table.string("house_no")
      table.string("card_no")
      table.string("address_marathi")
      table.string("address_english")
      table.string("booth_name_marathi")
      table.string("booth_name_english")
      table.string("village_name_marathi")

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}