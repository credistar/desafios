const express = require('express');
const crypto = require('crypto');

const database = require('./database/connection');
const Payment = require('./models/Payment');

const app = express();
const port = 3000;

app.use(express.json());

database.connection();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/process-payment', async (req, res) => {
  const { creditCardNumber, cardholderName, cvv, value } = req.body;

  const creditCardNumberEncrypted = crypto.createHash('sha256').update(creditCardNumber).digest('base64');
  const cardholderNameEncrypted = crypto.createHash('sha256').update(cardholderName).digest('base64');
  const cvvEncrypted = crypto.createHash('sha256').update(cvv).digest('base64');

  try {
    await Payment.create({
      creditCardNumber: creditCardNumberEncrypted,
      cardholderName: cardholderNameEncrypted,
      cvv: cvvEncrypted,
      value
    });

    console.log('SUCCESS: Pagamento processado com sucesso');
    return res.status(200).json({ message: 'Pagamento processado com sucesso' });
  } catch (err) {
    console.log('ERROR: Falha ao processar pagamento');
    return res.status(400).send({ message: 'Falha ao processar pagamento' });
  }
});

app.listen(port, () => {
  console.log(`🔥 Server started at http://localhost:${port}`)
});