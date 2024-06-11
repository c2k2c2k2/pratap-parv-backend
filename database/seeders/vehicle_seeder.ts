import Vehicle from '#models/vehicle'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Vehicle.createMany([
      {
        id: 1,
        name: "दुचाकी"
      },
      {
        id: 2,
        name: "कार"
      },
      {
        id: 3,
        name: "ऑटो रिक्षा"
      },
    ])
  }
}