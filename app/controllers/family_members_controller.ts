import FamilyMember from '#models/family_member'
import type { HttpContext } from '@adonisjs/core/http'


export default class FamilyMembersController {

    async addMember({ request, response }: HttpContext) {
        try {
            const { voter_id, member_id } = request.body()

            const findRelation = await FamilyMember.query().where("voterId", voter_id).andWhere("memberId", member_id).first()

            if (findRelation) {
                return response.status(402).json({
                    status: false,
                    message: "Already related member",
                    data: null
                })
            }

            const familyMember = await FamilyMember.create({
                voterId: voter_id,
                memberId: member_id
            })

            return response.status(201).json({
                status: true,
                message: "Member added to given voter",
                data: familyMember
            })
        } catch (error) {
            return response.status(402).json({
                status: false,
                message: error.message,
                data: null
            })

        }

    }

    async removeMember({ params, response }: HttpContext) {
        try {

            const deleteMember = await FamilyMember.query().where("id", params.id).delete()

            return response.status(201).json({
                status: true,
                message: "Member deleted from given voter",
                data: deleteMember
            })
        } catch (error) {
            return response.status(402).json({
                status: false,
                message: error.message,
                data: null
            })

        }
    }
}