import * as _ from 'lodash'
import uuid from 'uuid'

const sampleJson = () => {
  try {
    let sanmpeIDS = _.times(100, () => {
      return _.random(1, 60000)
    })
    const newData = []
    _.map(sanmpeIDS, id => {
      let data = {
        'id': 'NULL',
        'group_id': id,
        'idm': uuid(),
        'created': 'NULL',
      }
      newData.push(data)
    })
    return newData
  } catch (error) {
    return null
  }
}

export default sampleJson