const axios = require('axios');

const url = 'https://bitcoin.drpc.org/'; // Replace with your actual Bitcoin RPC endpoint
const auth = { username: 'your_username', password: 'your_password' }; // Replace with your credentials

const payload = {
  jsonrpc: '1.0',
  id: 'btc-api',
  method: 'getblockcount',
  params: []
};

axios.post(url, payload, { auth })
  .then(response => {
    console.log('The latest block number is', response.data.result);
  })
  .catch(error => {
    console.error('Error fetching block number:', error);
  });