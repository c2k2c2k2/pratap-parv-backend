import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import Voter from './voter.js'
import Vehicle from './vehicle.js'
import CasteCategory from './caste_category.js'
import Parishad from './parishad.js'
import PanchayatSamiti from './panchayat_samiti.js'

export default class ExtraInfo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare voterId: number

  @column()
  declare aadharNo: string

  @column()
  declare dob: Date

  @column()
  declare marriageAnniversary: Date

  @column()
  declare doa: string

  @column()
  declare vehicleId: number

  @column()
  declare casteCategoryId: number

  @column()
  declare caste: string

  @column()
  declare staysAt: string

  @column()
  declare home: string

  @column()
  declare completeAddress: string

  @column()
  declare zpOrNp: string

  @column()
  declare parishadId: number

  @column()
  declare panchayatSamitiId: number

  @column()
  declare politicalInvolvement: string

  @column()
  declare officerOrWorker: string

  @column()
  declare partyId: number

  @column()
  declare schemesEligibility: string

  @column()
  declare schemesAvailing: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Voter)
  declare voter: BelongsTo<typeof Voter>

  @belongsTo(() => Vehicle)
  declare vehicle: BelongsTo<typeof Vehicle>

  @belongsTo(() => CasteCategory)
  declare casteCategory: BelongsTo<typeof CasteCategory>

  @belongsTo(() => Parishad)
  declare parishad: BelongsTo<typeof Parishad>

  @belongsTo(() => PanchayatSamiti)
  declare panchayatSamiti: BelongsTo<typeof PanchayatSamiti>



}