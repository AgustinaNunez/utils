import { formatDateWithTimezone } from './dates'

describe('formatDateWithTimezone', () => {
  test('debe formatear correctamente la fecha con la zona horaria válida', () => {
    const dateToFormat = '2000-05-30 10:00:00'
    const timezoneUser = 'Europe/Paris'

    const formattedDate = formatDateWithTimezone(dateToFormat, timezoneUser)

    expect(formattedDate).toBe('30-05-2000 12:00:00')
  })

  // TODO: could be tested in a loop in the same previous test
  it('should format date for a valid time zone', () => {
    const dateToFormat = '2000-05-30 10:00:00'
    const timezoneUser = 'America/Argentina/Cordoba'

    const formattedDate = formatDateWithTimezone(dateToFormat, timezoneUser)

    expect(formattedDate).toBe('30-05-2000 07:00:00')
  })

  it('should throw error', () => {
    const dateToFormat = '2000-05-30'
    const timezoneUser = ''

    try {
      expect(formatDateWithTimezone(dateToFormat, timezoneUser)).toThrowError()
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })
})
