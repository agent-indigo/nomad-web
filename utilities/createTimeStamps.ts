import {DataTypes} from 'sequelize'
const createTimeStamps: Function = (): object => {
  return {
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      index: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      index: true
    }
  }
}
export default createTimeStamps