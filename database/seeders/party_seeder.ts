import Party from '#models/party'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Party.createMany([
      {
        id: 1,
        name: "भारतीय जनता पार्टी"
      },
      {
        id: 2,
        name: "राष्ट्रवादी कॉंग्रेस पार्टी"
      },
      {
        id: 3,
        name: "महाराष्ट्र नवनिर्माण सेना"
      },
      {
        id: 4,
        name: "शिवसेना"
      },
      {
        id: 5,
        name: "बहुजन समाज पार्टी"
      },
      {
        id: 6,
        name: "वंचित बहुजन आघाडी"
      },

    ])
  }
}