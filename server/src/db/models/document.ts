import { sequelize } from ".";
import { DataTypes, Model, Optional } from "sequelize";


export interface DocumentAttributes  {
  id?: number | string;
  filename: string;
  type: string;
  data: Buffer;
}


type DocumentCreationAttributes = Optional<DocumentAttributes, 'id'>;

const Document = sequelize.define<Model<DocumentAttributes, DocumentCreationAttributes>>('document', {
    filename: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data: {
    type: DataTypes.BLOB,
    allowNull: false
  },

});

export default Document;
