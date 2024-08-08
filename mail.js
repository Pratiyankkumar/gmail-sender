const fs = require('fs')


const credentials = (userGmail, userPass) => {
  fs.writeFileSync('credentials.json', JSON.stringify({
    userGmail,
    userPass
  }))
}

const data = (receiverGmail, subject, body) => {
  fs.writeFileSync('data.json', JSON.stringify({
    receiverGmail,
    subject,
    body
  }))
}



module.exports = {
  credentials,
  data
}
