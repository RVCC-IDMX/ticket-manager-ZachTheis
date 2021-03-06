/* eslint-disable comma-dangle */
const chalk = require('chalk');
const TicketManager = require('./event-emitters/ticketManager');
const EmailService = require('./event-emitters/emailService');
const DatabaseService = require('./event-emitters/databaseService');

const listenerUpdate = chalk.redBright.bold;

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.on('buy', (email, price, timestamp) => {
  emailService.send(email);
  databaseService.save(email, price, timestamp);
});

ticketManager.on('error', (error) => {
  console.log(
    chalk.yellow.bold.bgRed(`Gracefully handling our error: ${error}`)
  );
});

console.log(
  listenerUpdate(
    `We have ${ticketManager.listenerCount(
      'buy'
    )} listener(s) for the buy event`
  )
);
console.log(
  listenerUpdate(
    `We have ${ticketManager.listenerCount(
      'error'
    )} listener(s) for the error event`
  )
);

const onBuy = () => {
  console.log(chalk.grey.dim.strikethrough('I will be removed soon'));
};

ticketManager.on('buy', onBuy);

console.log(
  listenerUpdate(
    `We added a new event listener bringing our total count for the buy event to: ${ticketManager.listenerCount(
      'buy'
    )}`
  )
);
ticketManager.buy('test@gmail.com', 20);

ticketManager.off('buy', onBuy);

console.log(
  listenerUpdate(
    `We now have: ${ticketManager.listenerCount(
      'buy'
    )} listener(s) for the buy event`
  )
);
ticketManager.buy('test@email.com', 20);

ticketManager.removeAllListeners('buy');
console.log(
  listenerUpdate(
    `We have ${ticketManager.listenerCount('buy')} listeners for the buy event`
  )
);
ticketManager.buy('test@email.com', 20);
console.log(chalk.greenBright.bold.underline('The last ticket was bought'));
