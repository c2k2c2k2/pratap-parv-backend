import CasteCategory from '#models/caste_category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'


export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await CasteCategory.createMany([
      {
        id: 1,
        name: "OPEN"
      },
      {
        id: 2,
        name: "OBC"
      },
      {
        id: 3,
        name: "SC"
      },
      {
        id: 4,
        name: "ST"
      },
      {
        id: 5,
        name: "NT"
      },
      {
        id: 6,
        name: "VJ"
      },
      {
        id: 7,
        name: "EWS"
      },
    ])
  }
}