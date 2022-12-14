import Web3 from "web3";
import dotenv from 'dotenv';

const establishContract = async () => {
    dotenv.config();

    const web3 = new Web3(process.env.INFURA_API_KEY as string);
    const farcasterAddress: string = "0xe3Be01D99bAa8dB9905b33a3cA391238234B79D1";
    const farcasterABI = '[{"name":"getDirectoryUrl","inputs":[{"internalType":"bytes32","name":"username","type":"bytes32"}],"outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToUsername","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}]';
    const farcasterContract = new web3.eth.Contract(JSON.parse(farcasterABI), farcasterAddress);

    return farcasterContract;
}

export { establishContract };