import * as fs from 'fs'
import * as yaml from 'js-yaml'

/**
 * Get YAML of passed Path.
 * @param path File path
 * @return YAML
 */
export const YAML = (path: string) => {
  const yml = fs.readFileSync(path)
  const option = 'utf-8' as yaml.LoadOptions
  return yaml.safeLoad(String(yml), option)
}
