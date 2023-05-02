import { sequelize, Sequelize } from ".";
import { DataTypes, Model, Optional } from "sequelize";
import bcrypt from "bcrypt";
import Role from "./role";
import Document from "./document";


export interface UserAttributes  {
  id?: number | string;
  firstName: string;
  middleName: string;
  username: string;
  lastName: string;
  email: string;
  password: string;
  // photo: string;
  photoId?: number| string | null;
}


type UserCreationAttributes = Optional<UserAttributes, 'id'>;

const User = sequelize.define<Model<UserAttributes, UserCreationAttributes>>('user', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  middleName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate: {
      is: /^[a-zA-Z0-9_]+$/i
    }
  },
  email: {
    type: DataTypes.STRING,
    validate : {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    set(value: string) {
      this.setDataValue('password', bcrypt.hashSync(value, 10));
    }
  }
  // ,
  // photo: {
  //   type: DataTypes.BLOB,
  //   allowNull: true
  // }

});

Document.hasOne(Document, {
  foreignKey: 'photoId'
});
User.belongsTo(Document);

User.belongsToMany(Role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

Role.belongsToMany(User, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
})

export default User;
