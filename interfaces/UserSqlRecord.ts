import SqlRecord from '@/interfaces/SqlRecord'
export default interface UserSqlRecord extends SqlRecord {
  account_id: string
  invite_id?: string
  email: string
  reset_password_token?: string
  confirmation_token?: string
  remember_token?: string
  encrypted_password: string
  sign_in_count: number
  admin: boolean
  otp_required_for_login: boolean
  filtered_languages: string[]
  disabled: boolean
  moderator: boolean
  approved: boolean
  reset_password_sent_at?: string
  remember_created_at?: string
  current_sign_in_at?: string
  last_sign_in_at?: string
  current_sign_in_ip?: string
  last_sign_in_ip?: string
  confirmed_at?: string
  confirmation_sent_at?: string
  unconfirmed_email?: string
  locale?: string
  encrypted_otp_secret?: string
  encrypted_otp_secret_iv?: string
  encrypted_otp_secret_salt?: string
  consumed_timestep?: number
  last_emailed_at?: string
  otp_backup_codes?: string[]
  chosen_languages?: string[]
  created_by_application_id?: string
}