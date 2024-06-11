import vine from '@vinejs/vine'
/**
 * Validates the party's creation action
 */
export const createVehicleValidator = vine.compile(
    vine.object({
        name: vine.string().unique(async (db, value) => {
            const vehicle = await db
                .from('vehicles')
                .where('name', value)
                .first()
            return !vehicle
        }).trim().minLength(3)
    })
)


export const updateVehicleValidator = vine
    .compile(
        vine.object({
            name: vine.string().unique(async (db, value) => {
                const vehicle = await db
                    .from('vehicles')
                    .where('name', value)
                    .first()
                return !vehicle
            }).trim().minLength(3)
        })
    )