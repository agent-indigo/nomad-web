import bcrypt from 'bcryptjs'
import {AuthOptions} from 'next-auth'
import CredentialsProvider, {CredentialInput} from 'next-auth/providers/credentials'
import {Model} from 'sequelize'
import connectToSqlDb from '@/utilities/connectToSqlDb'
import UserSqlRecord from '@/types/UserSqlRecord'
import userSqlModel from '@/models/userSqlModel'
const authOpts: AuthOptions = {
  providers: [
    CredentialsProvider<Record<string, CredentialInput>>({
      name: process.env.VERCEL_URL ?? process.env.DOMAIN ?? 'Development',
      credentials: {
        email: {
          label: 'Email Address',
          type: 'email'
        },
        password: {
          label: 'Password',
          type: 'password'
        }
      },
      authorize: async (credentials: Record<string, string> | undefined): Promise<UserSqlRecord | null> => {
        await connectToSqlDb()
        const user: Model<UserSqlRecord> | null = await userSqlModel.findOne({
          where: {
            email: credentials?.email
          }
        })
        return user && bcrypt.compareSync(
          credentials?.password ?? '',
          user.getDataValue('encrypted_password')
        ) ? (await userSqlModel.findOne({
          where: {
            email: credentials?.email
          },
          attributes: {
            include: [
              'id',
              'account_id',
              'email',
              'sign_in_count',
              'admin',
              'moderator',
              'current_sign_in_at',
              'locale',
              'createdAt',
              'updatedAt'
            ]
          }
        }))?.toJSON() ?? null : null
      }
    })
  ]
}
export default authOpts