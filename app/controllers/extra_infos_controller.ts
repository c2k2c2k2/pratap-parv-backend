import type { HttpContext } from '@adonisjs/core/http'

import ExtraInfo from "#models/extra_info";
import { extraInfoValidator } from '#validators/extra_info';

export default class ExtraInfosController {
    /**
* Display a list of resource
*/
    async index({ request }: HttpContext) {
        try {
            const page = request.input('page', 1)
            const limit = request.input('limit', 10)
            const extraInfos = await ExtraInfo.query().paginate(page, limit);

            return extraInfos;
        } catch (error) {

        }
    }


    /**
     * Handle form submission for the create action
     */
    async store({ request, response }: HttpContext) {

        try {
            const payload = await request.validateUsing(extraInfoValidator)
            const extraInfo = await ExtraInfo.create(payload)

            return response.status(201).json({
                status: true,
                message: "Extra Info created successfully",
                data: extraInfo
            })
        } catch (error) {
            console.log(error)
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

            const extraInfo = await ExtraInfo.query().where("id", params.id).firstOrFail()

            return response.status(201).json({
                status: true,
                message: "Extra Info fetched successfully",
                data: extraInfo
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
            const payload = await request.validateUsing(extraInfoValidator)
            await ExtraInfo.query().where("id", params.id).update(payload)

            const extraInfo = await ExtraInfo.query().where("id", params.id).firstOrFail()

            return response.status(201).json({
                status: true,
                message: "Extra Info updated successfully",
                data: extraInfo
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
            const deleteParty = await ExtraInfo.query().where("id", params.id).delete()

            return response.status(201).json({
                status: true,
                message: "ExtraInfo deleted successfully",
                data: deleteParty
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