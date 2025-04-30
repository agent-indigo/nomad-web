import SqlRecord from '@/types/SqlRecord'
export default interface InviteSqlRecord extends SqlRecord {
  user_id: string
  code: string
  uses: number
  autofollow: boolean
  expires_at?: string
  max_uses?: number
  comment?: string
}