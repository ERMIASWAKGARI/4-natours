const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });
//Environment variable
// console.log(app.get('env'));
console.log(process.env);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
