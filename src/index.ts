import * as _ from 'lodash'
import uuid from 'uuid'
import fs from 'fs-extra'

const conf = {
  distDir: './dist',
  fileName: 'import_csv.csv',
}

const json2csv = (json: Array<Object>) => {
  let body = json.map( (d) => {
    return Object.keys(d).map( (key) => {
      return d[key]
    }).join(',')
  }).join('\n')
  return body
}

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

const createCSV = () => {
  try {
    const json = sampleJson()
    let csv = json2csv(json)
    const output = `${conf.distDir}/${conf.fileName}`
    fs.mkdirsSync(conf.distDir)
    fs.writeFileSync(output, csv)
    console.log(`Save ${output}`)
  } catch (error) {
    console.error({error})
  }
}

createCSV()
