import vine from '@vinejs/vine'

export const createCasteCategoryValidator = vine.compile(
    vine.object({
        name: vine.string().unique(async (db, value) => {
            const party = await db
                .from('caste_categories')
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

export const updateCasteCategoryValidator = vine
    .compile(
        vine.object({
            name: vine.string().unique(async (db, value) => {
                const party = await db
                    .from('caste_categories')
                    .where('name', value)
                    .first()
                return !party
            }).trim().minLength(3)
        })
    )