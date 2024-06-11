import Voter from '#models/voter'
import type { HttpContext } from '@adonisjs/core/http'

export default class VotersController {
  /**
   * Display a list of resource
   */
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const voters = await Voter.query().paginate(page, limit);

    return voters;
  }

  /**
   * Display form to create a new record
   */
  async create({ }: HttpContext) { }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) { }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    try {
      const id = params.id;
      const voter = await Voter.query().where("id", id).preload("extraInfo", (q) => {
        q.preload("vehicle")
        q.preload("parishad")
        q.preload("panchayatSamiti")
        q.preload("casteCategory")
      }).firstOrFail();

      return response.status(200).json({
        status: true,
        message: "Voter information fetched successfully",
        data: voter
      })

    } catch (err) {
      return response.status(404).json({
        status: false,
        message: err.message,
        data: null
      })
    }

  }

  // /**
  //  * Edit individual record
  //  */
  // async edit({ params }: HttpContext) { }

  // /**
  //  * Handle form submission for the edit action
  //  */
  // async update({ params, request }: HttpContext) { }

  // /**
  //  * Delete record
  //  */
  // async destroy({ params }: HttpContext) { }


}

// LOAD DATA LOCAL INFILE "C:\Users\Ashish\Downloads\MH_36_New.csv" INTO TABLE voters FIELDS TERMINATED BY ','LINES TERMINATED BY '\n'IGNORE 1 LINES(id, constituency_no, yadi_no, voter_no, voter_full_name_marathi, middle_name_marathi, first_name_english, middle_name_english, last_name_english, sex, age, house_no, card_no, address_marathi, address_english, booth_name_marathi, booth_name_english, village_name_marathi, @datevar)set created_at = STR_TO_DATE(@datevar,'%m/%d/%Y');