import { useRouter } from "next/router";
import ConnectedDesktopButtons from "./Navigation/ConnectedDesktopButtons";
import DisconnectedDesktopButtons from "./Navigation/DisconnectedDesktopButtons";

const Navbar = (props: { connected: boolean; env: string; }) => {
    const router = useRouter();
    return (
        <div className="w-full h-full">
            {/* Desktop Navbar */}
            <div className="w-full h-full hidden sm:flex">
                <div onClick={() => router.push("/")} className="w-1/2 h-full p-4 flex items-center hover:cursor-pointer">
                    <h1 className="font-sf-pro text-4xl text-white font-semibold">Degenslacker</h1>
                    <h1 className="font-sf-pro text-xl text-white font-semibold">.xyz</h1>
                </div>
                <div className="w-1/2 h-full p-4 flex items-center justify-end">
                    {props.connected ? <ConnectedDesktopButtons env={props.env} /> : <DisconnectedDesktopButtons />}
                </div>
            </div>
            {/* Desktop Navbar */}
        </div>
    )
}

export default Navbar;