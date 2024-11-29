'use server'
import {getServerSession} from 'next-auth'
import {Model} from 'sequelize'
import authOpts from '@/config/authOpts'
import PrefsSqlRecord from '@/interfaces/PrefsSqlRecord'
import ServerActionResponse from '@/interfaces/ServerActionResponse'
import SessionWithUserId from '@/interfaces/SessionWithUserId'
import UserSqlRecord from '@/interfaces/UserSqlRecord'
import prefsSqlModel from '@/models/prefsSqlModel'
import userSqlModel from '@/models/userSqlModel'
import connectSequelize from '@/utilities/connectSequelize'
const getSessionUserPrefs: Function = async (): Promise<ServerActionResponse> => {
  try {
    const session: SessionWithUserId | null = await getServerSession(authOpts)
    if (session) {
      await connectSequelize()
      const user: Model<UserSqlRecord> | null = await userSqlModel.findByPk(session.user.id)
      if (user) {
        const prefs: Model<PrefsSqlRecord> | null = await prefsSqlModel.findOne({
          where: {
            user: user.toJSON().id
          },
          attributes: {
            exclude: [
              'id'
            ]
          }
        })
        return prefs ? {
          success: true,
          sessionUserPrefs: prefs.toJSON()
        } : {
          error: '500: Internal Server Error',
          success: false
        }
      } else {
        return {
          error: '401: Unauthorized',
          success: false
        }
      }
    } else {
      return {
        error: '401: Unauthorized',
        success: false
      }
    }
  } catch (error: any) {
    return {
      error: `500: Internal Server Error:\n${error.toString()}`,
      success: false
    }
  }
}
export default getSessionUserPrefs