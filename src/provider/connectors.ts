import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Portis from '@portis/web3';

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: process.env.REACT_APP_INFURA_ID,
        },
    },
    portis: {
        package: Portis,
        options: {
            id: '0x3f71143ea4f604d35f79453dc74d5fc05a890a45',
        },
    },
};

export const web3Modal = new Web3Modal({
    providerOptions: providerOptions,
    theme: {
        background: '#282932',
        main: '#282932',
        secondary: '#90a4ae',
        border: '#41476b',
        hover: '#21222c',
    },
});

export const supportedChainId = Number(
    process.env.REACT_APP_SUPPORTED_NETWORK_ID
);

export const getSupportedChainId = () => {
    return supportedChainId;
};

export const getSupportedChainName = () => {
    return chainNameById[supportedChainId];
};

export const chainNameById = {
    '1': 'mainnet',
    '3': 'ropsten',
    '42': 'kovan',
};

export const isChainIdSupported = (chainId: number): boolean => {
    return supportedChainId === chainId;
};

const RPC_URLS: { [chainId: number]: string } = {
    1: process.env.REACT_APP_RPC_URL_1 as string,
    3: process.env.REACT_APP_RPC_URL_3 as string,
    42: process.env.REACT_APP_RPC_URL_42 as string,
};

export const SUBGRAPH_URLS: { [chainId: number]: string } = {
    1: process.env.REACT_APP_SUBGRAPH_URL_1 as string,
    3: process.env.REACT_APP_SUBGRAPH_URL_3 as string,
    42: process.env.REACT_APP_SUBGRAPH_URL_42 as string,
};

export const SUBGRAPH_URL =
    SUBGRAPH_URLS[process.env.REACT_APP_SUPPORTED_NETWORK_ID];

export const backupUrls = {};
backupUrls[supportedChainId] = RPC_URLS[supportedChainId];

export const SUPPORTED_WALLETS = {
    INJECTED: {
        isInjected: true,
        name: 'Injected',
        iconName: 'arrow-right.svg',
        description: 'Injected web3 provider.',
        href: null,
        color: '#010101',
        primary: true,
    },
    METAMASK: {
        isInjected: true,
        name: 'MetaMask',
        iconName: 'metamask.png',
        description: 'Easy-to-use browser extension.',
        href: null,
        color: '#E8831D',
    },
};
