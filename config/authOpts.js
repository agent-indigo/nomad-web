import bcrypt from 'bcryptjs'
import CredentialsProvider from 'next-auth/providers/credentials'
import userSqlModel from '@/models/userSqlModel'
const authOpts = {
  providers: [
    CredentialsProvider({
      name: 'Log In',
      credentials: {
        username: {
          label: 'Email Address',
          type: 'email'
        },
        password: {
          label: 'password',
          type: 'password'
        },
        authorize: async credentials => {
          const user = await userSqlModel.findOne({
            where: {
              email: credentials.username
            }
          })
          return user && await bcrypt.compare(
            credentials.password,
            user.toJSON().hashedPassword
          ) ? {id: user.toJSON().id} : null
        }
      }
    })
  ]
}
export default authOpts