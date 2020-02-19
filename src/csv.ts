import * as _ from 'lodash'
import uuid from 'uuid'
import fs from 'fs-extra'

import sampleJson from './sample'

const config = {
  dist: './dist',
  name: 'import_csv.csv',
}

const json2csv = (json: Array<Object>) => {
  let body = json.map( (d) => {
    return Object.keys(d).map( (key) => {
      return d[key]
    }).join(',')
  }).join('\n')
  return body
}

const createCSV = () => {
  try {
    const json = sampleJson()
    let csv = json2csv(json)
    const output = `${config.dist}/${config.name}`
    fs.mkdirsSync(config.dist)
    fs.writeFileSync(output, csv)
    console.log(`Save ${output}`)
  } catch (error) {
    console.error({error})
  }
}

createCSV()
