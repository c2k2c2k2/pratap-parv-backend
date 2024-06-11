import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'extra_infos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('voter_id').notNullable().unsigned().references('voters.id').onDelete('CASCADE')
      table.string("aadhar_no")
      table.date("dob")
      table.date("marriage_anniversary")
      table.enum("doa", ["d", "a"])
      table.integer('vehicle_id').nullable().unsigned().references('vehicles.id').onDelete('CASCADE')
      table.integer('caste_category_id').nullable().unsigned().references('caste_categories.id').onDelete('CASCADE')
      table.string("caste")
      table.enum("stays_at", ["in", "out"])
      table.enum("home", ["self owned", "rented"])
      table.text("complete_address")
      table.enum("zp_or_np", ["zp", "np"])
      table.integer('parishad_id').nullable().unsigned().references('parishads.id').onDelete('CASCADE')
      table.integer('panchayat_samiti_id').nullable().unsigned().references('panchayat_samitis.id').onDelete('CASCADE')
      table.enum("political_involvement", ["yes", "no"])
      table.enum("officer_or_worker", ["officer", "worker"])
      table.integer('party_id').nullable().unsigned().references('parties.id').onDelete('CASCADE')
      table.text("schemes_eligibility")
      table.text("schemes_availing")

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}