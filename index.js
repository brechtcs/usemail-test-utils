var nodemailer = require('nodemailer')

module.exports.sendMail = sendMail

function sendMail (port, data) {
  var mail = Object.assign({
    from: 'Someone <some@example.com>',
    to: 'Another <other@example.com>',
    subject: 'Literally anything',
    text: '...'
  }, data)

  return nodemailer.createTransport({
    host: '127.0.0.1',
    port: port,
    secure: false,
    ignoreTLS: true
  }).sendMail(mail)
}
