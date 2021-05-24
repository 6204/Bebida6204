'use strict'

const User = use('App/Models/User')
const Database = use('Database')
const Response = use('Adonis/Src/Response')

class AuthController {
    async register({request}){
        const data = request.only(['username', 'email', 'password'])
    
        const user = await User.create(data)

        return user
    }

    async users(){
        const usuarios = await User.all();

        return usuarios
    }

    async authenticate({request, response, auth}){
        const {email, password} = request.all()
        const token = await auth.attempt(email, password)
        if(token){
            const user = await  Database
                .table('users')
                .where('email', `${email}`)
                .first()    
            const result = {
                ...token,
                ...user
            }
            delete result.password 
            return result
        }
    }
}

module.exports = AuthController
