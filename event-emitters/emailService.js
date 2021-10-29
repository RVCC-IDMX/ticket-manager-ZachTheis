const chalk = require('chalk');

class EmailService {
  // eslint-disable-next-line class-methods-use-this
  send(email) {
    console.log(
      chalk.grey.bgWhite('Sending email to') + chalk.yellow(` ${email}`)
    );
  }
}

module.exports = EmailService;
