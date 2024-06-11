import Parishad from '#models/parishad'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Parishad.createMany([
      {
        id: 1,
        name: "धामणगाव",
        type: "zp"
      },
      {
        id: 2,
        name: "चांदूर",
        type: "zp",
      },
      {
        id: 3,
        name: "नांदगाव",
        type: "np"
      },
    ])
  }
}