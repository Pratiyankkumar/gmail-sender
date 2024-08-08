const yargs = require('yargs')
const mail = require('./mail.js')
const mainImported = require('./sendMail.js')

yargs.command({
  command: 'addmail',
  describe: 'Add senders Email',
  demandOption: true,
  builder: {
    gmail: {
      describe: 'Senders gmail',
      demandOption: true,
      type: 'string'
    },
    password: {
      describe: 'Sneders Gmail App password',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    mail.credentials(argv.gmail, argv.password)
  }
})

yargs.command({
  command: 'writemail',
  describe: 'write mail to receiver',
  builder: {
    gmail: {
      describe: 'Receivers Gmail',
      demandOption: true,
      type: 'string'
    },
    subject: {
      describe: 'Subject for your mail',
      demandOption: false,
      type: 'string'
    },
    body: {
      describe: 'Body of your gmail',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    mail.data(argv.gmail, argv.subject, argv.body)
  }
})

yargs.command({
  command: 'send',
  describe: 'Send mail to receiver',
  handler: () => {
    mainImported.main()
  }
})

yargs.parse();