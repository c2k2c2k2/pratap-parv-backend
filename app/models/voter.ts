import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import ExtraInfo from './extra_info.js'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import FamilyMember from './family_member.js'

export default class Voter extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare constituencyNo: string

  @column()
  declare yadiNo: string

  @column()
  declare voterNo: string

  @column()
  declare voterFullNameMarathi: string

  @column()
  declare middleNameMarathi: string

  @column()
  declare firstNameEnglish: string

  @column()
  declare middleNameEnglish: string

  @column()
  declare lastNameEnglish: string

  @column()
  declare sex: string

  @column()
  declare age: number

  @column()
  declare houseNo: string

  @column()
  declare cardNo: string

  @column()
  declare addressMarathi: string


  @column()
  declare addressEnglish: string

  @column()
  declare boothNameMarathi: string

  @column()
  declare boothNameEnglish: string

  @column()
  declare villageNameMarathi: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => ExtraInfo)
  declare extraInfo: HasOne<typeof ExtraInfo>

  @hasMany(() => FamilyMember)
  declare members: HasMany<typeof FamilyMember>
}