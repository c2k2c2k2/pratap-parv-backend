import Voter from '#models/voter';
import { advanceSearchValidator } from '#validators/advance_search';
import type { HttpContext } from '@adonisjs/core/http'

export default class SearchController {

  async search({ request, response }: HttpContext) {
    try {
      const searchQuery = request.input("query");
      const page = request.input('page', 1)
      const limit = request.input('limit', 10)

      // "voterFullNameMarathi": "शिल्पा नागेश मोहोड",
      //         "middleNameMarathi": "नागेश",
      //         "firstNameEnglish": "Shilpa",
      //         "middleNameEnglish": "Nagesh",
      //         "lastNameEnglish": "Mohod",
      //         "sex": "महिला",
      //         "age": 32,
      //         "houseNo": "",
      //         "cardNo": "NKG6000137",
      //         "addressMarathi": "फ़ुलआमला श्री हनुमान मंदिर सभोवतालीचा भाग",
      //         "addressEnglish": "Ulaamala Shri. Hanuman Mandir Sabhovatalicha Bhag",
      //         "boothNameMarathi": "1 - जि. प. प्रायमरी मराठी शाळा रुम नं. 1",
      //         "boothNameEnglish": "Z. P. Primary Marathi School Room No. 1",
      //         "villageNameMarathi": "फुलआमला",

      const voters = await Voter.query()
        .where("firstNameEnglish", searchQuery)
        .orWhere("middleNameMarathi", searchQuery)
        .orWhere("middleNameEnglish", searchQuery)
        .orWhere("lastNameEnglish", searchQuery)
        .orWhere("cardNo", searchQuery)
        .orWhere("villageNameMarathi", searchQuery)
        .paginate(page, limit);

      return voters;
    } catch (error) {
      console.log(error)
      return response.status(404).json({
        status: false,
        message: error.message,
        data: null
      })
    }



  }

  async advaceSerarch({ request, response }: HttpContext) {
    try {
      const page = request.input('page', 1)
      const limit = request.input('limit', 10)

      const payload = await request.validateUsing(advanceSearchValidator)

      const voters = await Voter.query()
        .whereILike("firstNameEnglish", `%${payload.first_name}%`)
        // .andWhereILike("middleNameMarathi", `%${payload.pita_pati}%`)
        .andWhereILike("middleNameEnglish", `%${payload.pita_pati}%`)
        .andWhereILike("lastNameEnglish", `%${payload.last_name}%`)
        .andWhereILike("cardNo", `%${payload.card_no}%`)
        .andWhereILike("yadiNo", `%${payload.yadi_no}%`)
        .andWhereILike("constituencyNo", `%${payload.constituency_no}%`)
        .paginate(page, limit);


      return voters;
    } catch (error) {
      console.log(error)
      return response.status(422).json({
        status: false,
        error,
        data: null
      })
    }
  }

}