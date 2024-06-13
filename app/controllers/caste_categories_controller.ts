import CasteCategory from '#models/caste_category';
import { createCasteCategoryValidator, updateCasteCategoryValidator } from '#validators/caste_category';
import type { HttpContext } from '@adonisjs/core/http'

export default class CasteCategoriesController {
  /**
* Display a list of resource
*/
  async index({ request }: HttpContext) {
    try {
      const page = request.input('page', 1)
      const limit = request.input('limit', 10)
      const casteCategories = await CasteCategory.query().paginate(page, limit);

      return casteCategories;
    } catch (error) {

    }
  }


  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {

    try {
      const payload = await request.validateUsing(createCasteCategoryValidator)
      const casteCategory = await CasteCategory.create(payload)

      return response.status(201).json({
        status: true,
        message: "Caste Category created successfully",
        data: casteCategory
      })
    } catch (error) {

      return response.status(422).json({
        status: false,
        error,
        data: null
      })
    }
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    try {

      const casteCategory = await CasteCategory.query().where("id", params.id).firstOrFail()

      return response.status(201).json({
        status: true,
        message: "Caste Category fetched successfully",
        data: casteCategory
      })
    } catch (error) {

      return response.status(404).json({
        status: false,
        error,
        data: null
      })
    }
  }


  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    try {
      const payload = await request.validateUsing(updateCasteCategoryValidator)
      await CasteCategory.query().where("id", params.id).update(payload)

      const casteCategory = await CasteCategory.query().where("id", params.id).firstOrFail()

      return response.status(201).json({
        status: true,
        message: "Caste Category updated successfully",
        data: casteCategory
      })
    } catch (error) {
      console.log(error)
      return response.status(404).json({
        status: false,
        error,
        data: null
      })
    }
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    try {
      const deleteCasteCategory = await CasteCategory.query().where("id", params.id).delete()

      return response.status(201).json({
        status: true,
        message: "Caste Category deleted successfully",
        data: deleteCasteCategory
      })
    } catch (error) {
      console.log(error)
      return response.status(404).json({
        status: false,
        error,
        data: null
      })
    }
  }
}