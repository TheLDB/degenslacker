import axios from "axios";
import { establishContract } from "./helpers/establishContract";
import Web3 from "web3";

const fetchCasts = async () => {
    const web3 = new Web3("https://rinkeby.infura.io/v3/cb9a5524d5984ff7bd82bf793e6900f1");

    const farcasterContract = await establishContract();

    const users: string[] = [
        "dwr",
        "lndnnft"
    ];

    users.forEach(async user => {
        const encodedName = web3.utils.utf8ToHex(user);
        const hostAddress = await farcasterContract.methods.getDirectoryUrl(encodedName).call();
        const userInfo = await axios.get(hostAddress);
        console.log(userInfo.data.body.addressActivityUrl);
        const castList = await axios.get(userInfo.data.body.addressActivityUrl);
        console.log(castList.data[0]);
    })
}

fetchCasts().catch(e => console.log(e));