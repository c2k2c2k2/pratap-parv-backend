import type { HttpContext } from '@adonisjs/core/http'

import Party from "#models/party";
import { createPartyValidator, updatePartyValidator } from "#validators/party";

export default class PartiesController {
    /**
  * Display a list of resource
  */
    async index({ request }: HttpContext) {
        try {
            const page = request.input('page', 1)
            const limit = request.input('limit', 10)
            const parties = await Party.query().paginate(page, limit);

            return parties;
        } catch (error) {

        }
    }


    /**
     * Handle form submission for the create action
     */
    async store({ request, response }: HttpContext) {

        try {
            const payload = await request.validateUsing(createPartyValidator)
            const party = await Party.create(payload)

            return response.status(201).json({
                status: true,
                message: "Party created successfully",
                data: party
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

            const party = await Party.query().where("id", params.id).firstOrFail()

            return response.status(201).json({
                status: true,
                message: "Party fetched successfully",
                data: party
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
            const payload = await request.validateUsing(updatePartyValidator)
            await Party.query().where("id", params.id).update(payload)

            const party = await Party.query().where("id", params.id).firstOrFail()

            return response.status(201).json({
                status: true,
                message: "Party updated successfully",
                data: party
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
            const deleteParty = await Party.query().where("id", params.id).delete()

            return response.status(201).json({
                status: true,
                message: "Party deleted successfully",
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