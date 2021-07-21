import {initMethod} from './methods/init'
const swaggerRaw = require('./swagger.json')
const swagger = swaggerRaw

initMethod(swagger)