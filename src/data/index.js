/*const { readFileSync } = require("fs");*/
import { readFileSync } from 'fs'
import * as nodePath from 'path'
const srcFolder = nodePath.basename(`${nodePath.resolve()}/src`)

export const data = {
  menu: JSON.parse(readFileSync(`${srcFolder}/data/menu.json`, 'utf8')),
  phone: JSON.parse(readFileSync(`${srcFolder}/data/phone.json`, 'utf8')),
  news: JSON.parse(readFileSync(`${srcFolder}/data/news.json`, 'utf8')),
  result: JSON.parse(readFileSync(`${srcFolder}/data/result.json`, 'utf8')),
  support: JSON.parse(readFileSync(`${srcFolder}/data/support.json`, 'utf8')),
  team: JSON.parse(readFileSync(`${srcFolder}/data/team.json`, 'utf8')),
  contact: JSON.parse(readFileSync(`${srcFolder}/data/contact.json`, 'utf8')),
  payment: JSON.parse(readFileSync(`${srcFolder}/data/payment.json`, 'utf8')),
}
