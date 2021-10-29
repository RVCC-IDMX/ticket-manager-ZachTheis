class DatabaseService {
  // eslint-disable-next-line class-methods-use-this
  save(email, price, timestamp) {
    console.log(
      // eslint-disable-next-line comma-dangle
      `Running query: INSERT INTO orders VALUES (email, price, created) VALUES (${email}, ${price}. ${timestamp})`
    );
  }
}

module.exports = DatabaseService;
