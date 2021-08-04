import * as fs from 'fs'
import * as load from './load'

const path = `${process.cwd()}/config/settings`
let Settings = {}

// For yaml
if (fs.existsSync(`${path}.yaml`)) {
  const yml = load.YAML(`${path}.yaml`)
  Settings = {...Settings, ...yml}
}
// For yml
if (fs.existsSync(`${path}.yml`)) {
  const yml = load.YAML(`${path}.yml`)
  Settings = {...Settings, ...yml}
}
// For directories
if (fs.existsSync(path)) {
  // Get only YAML files
  const files = fs.readdirSync(path).filter(f => /^.*\.ya?ml$/.test(f))
  files.forEach(f => {
    const yml = load.YAML(`${path}/${f}`)
    Settings = {...Settings, ...yml}
  })
}

export default Settings
