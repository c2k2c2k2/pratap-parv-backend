import vine from '@vinejs/vine'

/**
 * Validates the panchayat_samiti's creation action
 */

export const createPanchayatSamitiValidator = vine.compile(
    vine.object({
        name: vine.string().unique(async (db, value) => {
            const party = await db
                .from('parties')
                .where('name', value)
                .first()
            return !party
        }).trim().minLength(3)
    })
)

export const updatePanchayatSamitiValidator = vine
    .compile(
        vine.object({
            name: vine.string().unique(async (db, value) => {
                const party = await db
                    .from('parties')
                    .where('name', value)
                    .first()
                return !party
            }).trim().minLength(3)
        })
    )