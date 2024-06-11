import PanchayatSamiti from '#models/panchayat_samiti';
import { createPanchayatSamitiValidator, updatePanchayatSamitiValidator } from '#validators/panchayat_samiti';
import type { HttpContext } from '@adonisjs/core/http'

export default class PanchayatSamitisController {
    /**
 * Display a list of resource
 */
    async index({ request }: HttpContext) {
        try {
            const page = request.input('page', 1)
            const limit = request.input('limit', 10)
            const panchayatSamitis = await PanchayatSamiti.query().paginate(page, limit);

            return panchayatSamitis;
        } catch (error) {

        }
    }


    /**
     * Handle form submission for the create action
     */
    async store({ request, response }: HttpContext) {

        try {
            const payload = await request.validateUsing(createPanchayatSamitiValidator)
            const panchayatSamiti = await PanchayatSamiti.create(payload)

            return response.status(201).json({
                status: true,
                message: "Party created successfully",
                data: panchayatSamiti
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

            const panchayatSamiti = await PanchayatSamiti.query().where("id", params.id).firstOrFail()

            return response.status(201).json({
                status: true,
                message: "PanchayatSamiti fetched successfully",
                data: panchayatSamiti
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
            const payload = await request.validateUsing(updatePanchayatSamitiValidator)
            await PanchayatSamiti.query().where("id", params.id).update(payload)

            const panchayatSamiti = await PanchayatSamiti.query().where("id", params.id).firstOrFail()

            return response.status(201).json({
                status: true,
                message: "PanchayatSamiti updated successfully",
                data: panchayatSamiti
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
            const deletePanchayatSamiti = await PanchayatSamiti.query().where("id", params.id).delete()

            return response.status(201).json({
                status: true,
                message: "PanchayatSamiti deleted successfully",
                data: deletePanchayatSamiti
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
