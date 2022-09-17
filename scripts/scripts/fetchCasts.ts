import axios from "axios";
import Web3 from "web3";
import { establishContract } from "./helpers/establishContract";

import dotenv from 'dotenv';

const fetchCasts = async () => {
    dotenv.config();
    const web3 = new Web3(process.env.INFURA_API_KEY as string);

    const farcasterContract = await establishContract();

    const users: string[] = [
        "dwr",
        "lndnnft"
    ];

    users.forEach(async user => {
        const encodedName = web3.utils.utf8ToHex(user);
        const hostAddress = await farcasterContract.methods.getDirectoryUrl(encodedName).call();
        const userInfo = await axios.get(hostAddress);
        const castList = await axios.get(userInfo.data.body.addressActivityUrl);
        console.log(castList.data[0]);
    })
}

fetchCasts().catch(e => console.log(e));