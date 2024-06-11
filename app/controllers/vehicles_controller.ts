import Vehicle from '#models/vehicle';
import { createVehicleValidator, updateVehicleValidator } from '#validators/vehicle';
import type { HttpContext } from '@adonisjs/core/http'

export default class VehiclesController {
  /**
 * Display a list of resource
 */
  async index({ request }: HttpContext) {
    try {
      const page = request.input('page', 1)
      const limit = request.input('limit', 10)
      const vehicles = await Vehicle.query().paginate(page, limit);

      return vehicles;
    } catch (error) {

    }
  }


  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {

    try {
      const payload = await request.validateUsing(createVehicleValidator)
      const vehicle = await Vehicle.create(payload)

      return response.status(201).json({
        status: true,
        message: "Vehicle created successfully",
        data: vehicle
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

      const vehicle = await Vehicle.query().where("id", params.id).firstOrFail()

      return response.status(201).json({
        status: true,
        message: "Vehicle fetched successfully",
        data: vehicle
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
      const payload = await request.validateUsing(updateVehicleValidator)
      await Vehicle.query().where("id", params.id).update(payload)

      const vehicle = await Vehicle.query().where("id", params.id).firstOrFail()

      return response.status(201).json({
        status: true,
        message: "Vehicle updated successfully",
        data: vehicle
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
      const deleteVehicle = await Vehicle.query().where("id", params.id).delete()

      return response.status(201).json({
        status: true,
        message: "Vehicle deleted successfully",
        data: deleteVehicle
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