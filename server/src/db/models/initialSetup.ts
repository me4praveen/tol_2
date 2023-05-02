import { ROLES } from "./common"
import Role from "./role"

export default () => {
    Role.bulkCreate(ROLES.map(name => ({name})))
}