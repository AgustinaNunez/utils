import { formatDateWithTimezone } from './dates'

jest.mock('moment-timezone', () => {
  const moment = require('moment')

  const mockDate = moment('2000-05-30 10:00:00', 'YYYY-MM-DD HH:mm:ss')
  const mockUtc = jest.fn(() => mockDate)
  const mockTz = jest.fn((timezoneUser: Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<Readonly<string>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>) => {
    const tz = moment.tz?.zone(timezoneUser)
    if (tz) {
      mockDate.utcOffset(tz.utcOffset(mockDate.valueOf()))
    }
    return mockDate
  })

  mockDate.utc = mockUtc
  mockDate.tz = mockTz
  return mockDate
})

describe('formatDateWithTimezone', () => {
  test('debe formatear correctamente la fecha con la zona horaria válida', () => {
    const dateToFormat = '2000-05-30 10:00:00'
    const timezoneUser = 'Europe/Paris'

    const formattedDate = formatDateWithTimezone(dateToFormat, timezoneUser)

    expect(formattedDate).toBe('30-05-2000 10:00:00')
  })
})
