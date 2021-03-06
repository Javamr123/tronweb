let isTestNet = process.env.NET === 'testnet';

const ADDRESS_SIZE = isTestNet ? 35 : 34;
const ADDRESS_PREFIX = isTestNet ? "a0" : "1E";
const ADDRESS_PREFIX_BYTE = isTestNet ? 0xa0 : 0x1E;

module.exports = {
  ADDRESS_SIZE,
  ADDRESS_PREFIX,
  ADDRESS_PREFIX_BYTE,
};
