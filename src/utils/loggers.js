const winston = require('winston')
const dateFormat = require('dateformat')

const CONFIG = require('./../config')

function getDate() {
  const now = new Date()

  return dateFormat(now, 'mm_yyyy')
}

const formatedDate = getDate()

const appInfo = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)({
      timestamp: true,
    }),
    new (winston.transports.File)({
      filename: `${CONFIG.LOGS_PATH}/app/app_infos_${formatedDate}.log`,
      exitOnError: false,
      emitErrs: false,
      json: false,
      timestamp: true,
      prepend: true,
    }),
  ],
})

const appError = new winston.Logger({
  level: 'error',
  transports: [
    new winston.transports.Console({
      timestamp: true,
    }),
    new winston.transports.File({
      filename: `${CONFIG.LOGS_PATH}/app/app_errors_${formatedDate}.log`,
      exitOnError: false,
      emitErrs: false,
      json: false,
      timestamp: true,
      prepend: true,
    }),
  ],
})

const loggers = {
  appInfo,
  appError,
}

module.exports = loggers
