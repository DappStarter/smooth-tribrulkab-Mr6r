require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hidden swift trip lizard riot situate clump include problem bracket seed'; 
let testAccounts = [
"0xb06c29e3bd909eeff6f796dfc83f15f5f0a329398ff4030b24e19741435e8528",
"0xdc5afbff554194792dfa60406d3f5305e60027f33a679aad4da2610bf097a409",
"0x442db629bfeff8bf85ae8d8c215dee18821ae6e53a86f2fd5ef6e41f4cb8fe8d",
"0xd395738842d1eb0ea1bdf9dfc93e6e58d34bfa30bfa2f4809585754be3cf2b4d",
"0xc6d8623f2e838512023b6ae19d35ed4d271a718219b79de478d7ad5444fd4cf8",
"0x2c559a7723d881629994aea0d1be3e5bb31c234eec0225d8953cd849a88d88ea",
"0x33668863f0892cd644c132eeb94a18721234be26eb54b3bac785c5ed1c0e10a7",
"0x4a85524cc9baf477d0e8484a23c58300c9b8fec9a984a960d69ff28a83242718",
"0x5b30a75d5835559293b1bc255a7bb4e8e1ee3498f93af9464d221b0a399c7633",
"0xeefdc5acfc4d8982c2f2b018c5e00617378b532e28711bd77d601bacf849978a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

