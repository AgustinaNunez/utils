/**
 * Obtiene la fecha y hora en UTC en la zona horaria especificada
 * @param {string} dateToFormat e.g. '2000-05-30 10:00:00'
 * @param {string} timezoneUser e.g. 'Europe/Paris'
 * @returns string e.g. '2000-05-30 12:00:00'
 */
declare const formatDateWithTimezone: (dateToFormat: string, timezoneUser: string) => string;

declare const index_formatDateWithTimezone: typeof formatDateWithTimezone;
declare namespace index {
  export {
    index_formatDateWithTimezone as formatDateWithTimezone,
  };
}

export { index as dates };
