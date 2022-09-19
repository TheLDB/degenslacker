import Head from "next/head";
import { useState } from "react";
import UserList from "../../components/Feeds/UserList";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";

const FeedID = () => {
    const [connected, setConnected] = useState(true);
    const router = useRouter();
    const { id } = router.query;
    const [users, setUsers] = useState<{
        userID: string;
        displayName: string;
        userName: string;
        pfp: string;
    }[]>([
        {
            userID: "1",
            displayName: "Pushix",
            userName: "pushixx",
            pfp: "https://pbs.twimg.com/profile_images/1571141847254446085/msrFT_vm_400x400.jpg"
        },
        {
            userID: "2",
            displayName: "Dan",
            userName: "dwr",
            pfp: "https://pbs.twimg.com/profile_images/1571141847254446085/msrFT_vm_400x400.jpg"
        },
        {
            userID: "3",
            displayName: "Landon",
            userName: "lndnnft",
            pfp: "https://pbs.twimg.com/profile_images/1571141847254446085/msrFT_vm_400x400.jpg"
        },
        {
            userID: "1",
            displayName: "Pushix",
            userName: "pushixx",
            pfp: "https://pbs.twimg.com/profile_images/1571141847254446085/msrFT_vm_400x400.jpg"
        },
        {
            userID: "2",
            displayName: "Dan",
            userName: "dwr",
            pfp: "https://pbs.twimg.com/profile_images/1571141847254446085/msrFT_vm_400x400.jpg"
        },
        {
            userID: "3",
            displayName: "Landon",
            userName: "lndnnft",
            pfp: "https://pbs.twimg.com/profile_images/1571141847254446085/msrFT_vm_400x400.jpg"
        },
        {
            userID: "1",
            displayName: "Pushix",
            userName: "pushixx",
            pfp: "https://pbs.twimg.com/profile_images/1571141847254446085/msrFT_vm_400x400.jpg"
        },
        {
            userID: "2",
            displayName: "Dan",
            userName: "dwr",
            pfp: "https://pbs.twimg.com/profile_images/1571141847254446085/msrFT_vm_400x400.jpg"
        },
        {
            userID: "3",
            displayName: "Landon",
            userName: "lndnnft",
            pfp: "https://pbs.twimg.com/profile_images/1571141847254446085/msrFT_vm_400x400.jpg"
        },
        
    ]);
    return (
        <div className="w-screen h-screen bg-gradient-to-br from-site-orange via-site-purple to-site-blue">
            <Head>
                <title>
                    DegenSlacker Feed
                </title>
            </Head>
            <div className="w-full h-full bg-gradient-to-br from-site-orange via-site-purple to-site-blue flex justify-center items-center">
                <div className="w-full h-24 absolute top-0 right-0 left-0">
                    <Navbar connected={connected} env={"feed"} />
                </div>
            {connected ? <UserList users={users} />: <h1>asaaaa</h1>}
      </div>
        </div>
    )
}

export default FeedID;