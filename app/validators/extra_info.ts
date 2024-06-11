import vine from '@vinejs/vine'

export const extraInfoValidator = vine.compile(
    vine.object({
        voter_id: vine.number(),
        aadhar_no: vine.string().trim().optional(),
        dob: vine.date().optional(),
        marriage_anniversary: vine.date().optional(),
        doa: vine.enum(["d", "a"]).optional(),
        vehicle_id: vine.number().optional(),
        caste_category_id: vine.number().optional(),
        caste: vine.string().optional(),
        stays_at: vine.enum(["in", "out"]).optional(),
        home: vine.enum(["self owned", "rented"]).optional(),
        complete_address: vine.string().optional(),
        zp_or_np: vine.enum(["zp", "np"]).optional(),
        parishad_id: vine.number().optional(),
        panchayat_samiti_id: vine.number().optional(),
        political_involvement: vine.enum(["yes", "no"]).optional(),
        officer_or_worker: vine.enum(["officer", "worker"]).optional(),
        party_id: vine.number().optional(),
        schemes_eligibility: vine.string().optional(),
        schemes_availing: vine.string().optional(),
    })
)