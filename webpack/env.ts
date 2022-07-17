import path from 'path'

const IS_DEV = process.env.NODE_ENV !== 'production'
const SRC_DIR = path.join(__dirname, '../src')
const DIST_DIR = path.join(__dirname, '../dist')

const API_ENDPOINT = 'https://ya-praktikum.tech/api/v2'
const REDIRECT_URL = 'http://localhost:3000'

export { IS_DEV, SRC_DIR, DIST_DIR, API_ENDPOINT, REDIRECT_URL }
