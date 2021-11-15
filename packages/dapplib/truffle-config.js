require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remember smile hidden clog off talk'; 
let testAccounts = [
"0x014a2b34552cdde5da8e3b3f7f72fb0736e7effd7e7ed7bf7e6e3fe36da24404",
"0xa09e97826aefe93e46acbbcb900b30aa85931ccc008df2f8513ae3eba34ff904",
"0x88c28b0abb3768a74057458752d8a02002374b35d0b160a4a6e826144d8be4f0",
"0x5aa49d725d83028dfa0d97cf8dbcc92e937fddf35a2ff55c2a0da5dbb9d82556",
"0xa7c5ad1e5920bae78d0024a3edd03bc61d6e3482ce74f2a1e5d5a54e32ebedbf",
"0xbabf85a9f984b40cfe091bebacfa871b66db1faabcac01934c9cf5f0eaeb85b0",
"0x5ddc447078a8616dce3deb4a627646a94ec1bf7c47e8c954c2f280d128784a92",
"0xc1dc7f48e77d081ce8b0cfe26df72f90c700e17f36a9ed5fd979be021844c678",
"0x1d03a08a0c159b97f7867442b70a216830a12aa6918e0e2a192990fd07a4de45",
"0x07f457afb62cefed91f9be6f751965f7e3c911e2f7b990bb3f9930eb9fe57f2f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

