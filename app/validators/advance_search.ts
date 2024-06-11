import vine from '@vinejs/vine'

export const advanceSearchValidator = vine.compile(
    vine.object({
        last_name: vine.string().trim().minLength(3),
        first_name: vine.string().trim().minLength(3),
        pita_pati: vine.string().trim().minLength(3),
        age: vine.number(),
        yadi_no: vine.number(),
        constituency_no: vine.number(),
        card_no: vine.string().trim().minLength(3),
    })
)