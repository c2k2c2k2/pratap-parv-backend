import Parishad from '#models/parishad';
import { createParishadValidator, updateParishadValidator } from '#validators/parishad';
import type { HttpContext } from '@adonisjs/core/http'

export default class ParishadsController {
    /**
  * Display a list of resource
  */
    async index({ request }: HttpContext) {
        try {
            const page = request.input('page', 1)
            const limit = request.input('limit', 10)
            const parishads = await Parishad.query().paginate(page, limit);

            return parishads;
        } catch (error) {

        }
    }


    /**
     * Handle form submission for the create action
     */
    async store({ request, response }: HttpContext) {

        try {
            const payload = await request.validateUsing(createParishadValidator)
            const parishad = await Parishad.create(payload)

            return response.status(201).json({
                status: true,
                message: "Parishad created successfully",
                data: parishad
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

            const parishad = await Parishad.query().where("id", params.id).firstOrFail()

            return response.status(201).json({
                status: true,
                message: "Parishad fetched successfully",
                data: parishad
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
            const payload = await request.validateUsing(updateParishadValidator)
            await Parishad.query().where("id", params.id).update(payload)

            const parishad = await Parishad.query().where("id", params.id).firstOrFail()

            return response.status(201).json({
                status: true,
                message: "Parishad updated successfully",
                data: parishad
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
            const deleteParishad = await Parishad.query().where("id", params.id).delete()

            return response.status(201).json({
                status: true,
                message: "Parishad deleted successfully",
                data: deleteParishad
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