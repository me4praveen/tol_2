import { sequelize } from ".";
import { DataTypes } from "sequelize";
import { ROLES } from "./common";

const Role = sequelize.define('role', {
    name:{
        type: DataTypes.ENUM({values: ROLES})
    }
});

export default Role;
