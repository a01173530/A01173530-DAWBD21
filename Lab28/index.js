const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis')

const { OAuth2 } = google.auth

const oAuth2Client = new OAuth2(
  'ID',
  'contraseña'
)

oAuth2Client.setCredentials({
  refresh_token: 'El token',
})

const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDay() + 2)

const eventEndTime = new Date()
eventEndTime.setDate(eventEndTime.getDay() + 4)
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)

const event = {
  summary: `Junta con Juan`,
  location: `Santiago de queretaro`,
  description: `Asesoria personal`,
  colorId: 1,
  start: {
    dateTime: eventStartTime,
    timeZone: 'America/Denver',
  },
  end: {
    dateTime: eventEndTime,
    timeZone: 'America/Denver',
  },
}

calendar.freebusy.query(
  {
    resource: {
      timeMin: eventStartTime,
      timeMax: eventEndTime,
      timeZone: 'America/Denver',
      items: [{ id: 'primary' }],
    },
  },
  (err, res) => {
    if (err) return console.error('Error Query: ', err)

    const eventArr = res.data.calendars.primary.busy

    if (eventArr.length === 0)
      return calendar.events.insert(
        { calendarId: 'primary', resource: event },
        err => {
          if (err) return console.error('Ha ocurrido un error:', err)
          return console.log('El evento se creo con exito')
        }
      )

    return console.log(`Ocupado`)
  }
)
