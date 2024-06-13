import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Voter from './voter.js'

export default class FamilyMember extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare voterId: number

  @column()
  declare memberId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Voter)
  declare voter: BelongsTo<typeof Voter>

  @belongsTo(() => Voter)
  declare member: BelongsTo<typeof Voter>

}