import ConnectedDesktopButtons from "./Navigation/ConnectedDesktopButtons";

const Navbar = (props: { connected: boolean }) => {
    return (
        <div className="w-full h-full">
            {/* Desktop Navbar */}
            <div className="w-full h-full hidden sm:flex">
                <div className="w-1/2 h-full p-4 flex items-center">
                    <h1 className="font-sf-pro text-4xl text-white font-semibold">Degenslacker</h1>
                    <h1 className="font-sf-pro text-xl text-white font-semibold">.xyz</h1>
                </div>
                <div className="w-1/2 h-full p-4 flex items-center justify-end">
                    {props.connected ? <ConnectedDesktopButtons /> : <h1>hi</h1>}
                </div>
            </div>
            {/* Desktop Navbar */}
        </div>
    )
}

export default Navbar;