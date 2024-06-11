import vine from '@vinejs/vine'

/**
 * Validates the parishads's creation action
 */
export const createParishadValidator = vine.compile(
    vine.object({
        name: vine.string().unique(async (db, value) => {
            const party = await db
                .from('parishads')
                .where('name', value)
                .first()
            return !party
        }).trim().minLength(3),
        type: vine.enum(["zp", "np"])
    })
)

/**
 * Validates the parishads's updation action
 */
export const updateParishadValidator = vine
    .compile(
        vine.object({
            name: vine.string().unique(async (db, value) => {
                const party = await db
                    .from('parishads')
                    .where('name', value)
                    .first()
                return !party
            }).trim().minLength(3),
            type: vine.enum(["zp", "np"])
        })
    )