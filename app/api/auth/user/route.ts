import {
  getServerSession,
  Session
} from 'next-auth'
import {
  NextRequest,
  NextResponse
} from 'next/server'
import {Model} from 'sequelize'
import error401response from '@/httpResponses/error401response'
import error500response from '@/httpResponses/error500response'
import success200response from '@/httpResponses/success200response'
import userSqlModel from '@/models/userSqlModel'
import connectToSqlDb from '@/utilities/connectToSqlDb'
import UserSqlRecord from '@/types/UserSqlRecord'
export const dynamic = 'force-dynamic'
/**
 * @name    GET
 * @desc    GET the current user
 * @route   GET /api/auth/user
 * @access  private
 */
export const GET = async (request: NextRequest): Promise<NextResponse> => {
  try {
    const session: Session | null = await getServerSession()
    if (session && session.user?.email) {
      await connectToSqlDb()
      const user: Model<UserSqlRecord> | null = await userSqlModel.findOne({
        where: {
          email: session.user.email
        }
      })
      return user ? success200response({
        id: user.getDataValue('id'),
        account_id: user.getDataValue('account_id'),
        email: user.getDataValue('email'),
        sign_in_count: user.getDataValue('sign_in_count'),
        admin: user.getDataValue('admin'),
        moderator: user.getDataValue('moderator'),
        current_sign_in_at: user.getDataValue('current_sign_in_at'),
        locale: user.getDataValue('locale'),
        createdAt: user.getDataValue('createdAt'),
        updatedAt: user.getDataValue('updatedAt')
      }) : error401response
    } else {
      return error401response
    }
  } catch (error: any) {
    return error500response(error)
  }
}