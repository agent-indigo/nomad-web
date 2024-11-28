import bcrypt from 'bcryptjs'
import {Model} from 'sequelize'
import {AuthOptions} from 'next-auth'
import CredentialsProvider, {CredentialInput} from 'next-auth/providers/credentials'
import userSqlModel from '@/models/userSqlModel'
import UserSqlRecord from '@/interfaces/UserSqlRecord'
const authOpts: AuthOptions = {
  providers: [
    CredentialsProvider<Record<string, CredentialInput>>({
      name: process.env.VERCEL_URL ?? 'Development',
      credentials: {
        email: {
          label: 'Email Address',
          type: 'email'
        },
        password: {
          label: 'password',
          type: 'password'
        }
      },
      authorize: async (credentials: Record<string, string> | undefined): Promise<UserSqlRecord | null> => {
        const user: Model<UserSqlRecord> | null = await userSqlModel.findOne({
          where: {
            email: credentials?.email
          }
        })
        return user && await bcrypt.compare(
          credentials?.password ?? '',
          user.toJSON().hashedPassword
        ) ? (await userSqlModel.findOne({
          where: {
            email: credentials?.email
          },
          attributes: {
            exclude: [
              'hashedPassword',
              'roles',
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