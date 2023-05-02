import { Op } from "sequelize";
import Role from "../../db/models/role";
import User, { UserAttributes } from "../../db/models/user";
import jwt from "jsonwebtoken";
import { isEmpty } from "lodash";
import bcrypt from "bcrypt";
import axios from 'axios';

export

    const Query = {
        async login( _: any, { username, password}: any) {
            let user: any = await User.findOne({
                where: {
                    [Op.or]: [
                        { email : username },
                        { username }
                    ]
                },
                include: Role,
                nest: true
            });
            if (isEmpty(user)) throw new Error(`username "${username}" does not exist.`);
    
            const isValidPassword = bcrypt.compare(password, user.password);
    
            if(!isValidPassword) throw new Error(`Password is not valid.`);
    
            const token = jwt.sign({ id: user.id }, process.env.AUTH_SECRET_KEY || '', {
                expiresIn: 86400
            });
            return {
                user,
                token
            }
    
        }
    }

const Mutation = {

    async registerUser(parent: any, args: any) {
        try {
            const { firstName, username, email, password, roles = ["viewer"], middleName = "", lastName = "", photo = null } = args;
            let user: any = await User.findOne({
                where: {
                    [Op.or]: [
                        { email },
                        { username }
                    ]
                }
            })
            if (!isEmpty(user)) {
                if (user.email === email) throw new Error(`${email} is already exist.`)
                if (user.username === username) throw new Error(`${username} is alreday taken. Please use a different one.`)
            }
            let photoId = null;
            // if(photo != null) {
            //     const formData = new FormData();
            //     formData.append('file', photo);
            //     const doc: any = await axios.post('/upload', formData, {
            //       headers: { 'Content-Type': 'multipart/form-data' }
            //     });

            //     photoId = doc.id;
          
            // }

            user = await User.create({
                firstName,
                middleName,
                lastName,
                username,
                email,
                password,
                photoId
            });

            const user_roles = await Role.findAll({ where: { name: {
                [Op.in]: roles
            } }});
            await user.setRoles(user_roles);
            const token = jwt.sign({ id: user.id }, process.env.AUTH_SECRET_KEY || '', {
                expiresIn: 86400
            });
            return {
                user: { ...user.toJSON(), roles: user_roles.map(r => r.toJSON()) },
                token
            }
        } catch (error: any) {
            console.log(error)
            throw new Error(error.message)
        }
    },



}
export default { Query, Mutation }