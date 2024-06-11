import vine from '@vinejs/vine'

/**
 * Validates the party's creation action
 */
export const createPartyValidator = vine.compile(
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

/**
 * Validates the party's update action
 */
// export const updatePartyValidator = vine.compile(
//     vine.object({
//         name: vine.string().trim().minLength(3)
//     })
// )

export const updatePartyValidator = vine
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