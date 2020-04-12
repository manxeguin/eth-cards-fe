import Web3 from 'web3';

import DBZCollectible from '../abis/DBZCollectible.json';

export const loadWeb3 = async () => {
  if (!window.ethereum && !window.web3) {
    throw new Error('NOT_WEB3_DETECTED');
  }
  window.web3 = new Web3(window.ethereum || window.web3.currentProvider);
  const accounts = await window.web3.currentProvider.enable();
  const networkId = await window.web3.eth.net.getId();
  return {
    accounts,
    networkId,
  };
};

export const loadSmartContract = async networkId => {
  const { web3 } = window;
  const networkData = DBZCollectible.networks[networkId];
  const { abi } = DBZCollectible;
  return networkData ? new web3.eth.Contract(abi, networkData.address) : null;
};

export const loadCard = async (contract, index) =>
  contract.methods.cards(index).call();

export const loadAllCards = async contract =>
  contract.methods.getCards().call();
