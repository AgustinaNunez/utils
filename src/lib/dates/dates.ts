import momentTimezone from 'moment-timezone'

const DB_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss'

/**
 * Obtiene la fecha y hora en UTC en la zona horaria especificada
 * @param {string} dateToFormat e.g. '2000-05-30 10:00:00'
 * @param {string} timezoneUser e.g. 'Europe/Paris'
 * @returns string e.g. '2000-05-30 12:00:00'
 */
const formatDateWithTimezone = (dateToFormat: string, timezoneUser: string): string => {
  const dateUTC = momentTimezone.utc(dateToFormat, DB_DATE_FORMAT)
  const dateWithTimezone = dateUTC.tz(timezoneUser)
  return dateWithTimezone.format('DD-MM-YYYY HH:mm:ss')
}

const dates = {
  formatDateWithTimezone,
}

export default dates