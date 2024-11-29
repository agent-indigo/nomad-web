'use server'
import {Model} from 'sequelize'
import PrefsSqlRecord from '@/interfaces/PrefsSqlRecord'
import ServerActionResponse from '@/interfaces/ServerActionResponse'
import prefsSqlModel from '@/models/prefsSqlModel'
import getSessionUser from '@/serverActions/getSessionUser'
const getSessionUserPrefs: Function = async (): Promise<ServerActionResponse> => {
  try {
    const {success, sessionUser}: ServerActionResponse = await getSessionUser()
    if (success && sessionUser) {
      const sessionUserPrefs: Model<PrefsSqlRecord> | null = await prefsSqlModel.findOne({
        where: {
          user: sessionUser.id
        },
        attributes: {
          exclude: [
            'id'
          ]
        }
      })
      return sessionUserPrefs ? {
        success: true,
        sessionUserPrefs: sessionUserPrefs.toJSON()
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
  } catch (error: any) {
    return {
      error: `500: Internal Server Error:\n${error.toString()}`,
      success: false
    }
  }
}
export default getSessionUserPrefs