import PanchayatSamiti from '#models/panchayat_samiti'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await PanchayatSamiti.createMany([
      {
        id: 1,
        name: "मोर्शी"
      },
      {
        id: 2,
        name: "वरुड"

      },
      {
        id: 3,
        name: "चांदूर"
      }
    ])
  }
}