var nodemailer = require('nodemailer')

module.exports.sendMail = sendMail

function sendMail (port, data) {
  var mail = Object.assign({
    from: 'some@example.com',
    to: 'other@example.com',
    subject: 'Literally anything',
    text: '...'
  }, data)

  var at = mail.from.indexOf('@')
  var domain = mail.from.substring(at + 1)

  return nodemailer.createTransport({
    name: domain,
    host: '127.0.0.1',
    port: port,
    secure: false,
    ignoreTLS: true
  }).sendMail(mail)
}
