import { useState } from "react";
import { useRouter } from "next/router";
import { ChevronRightIcon, UserIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
const Feeds = (props: { token: string; }) => {
    const router = useRouter();

    const [feeds, setFeeds] = useState<{
        id: string;
        name: string;
        href: string;
        userCount: number;
        active: boolean;
    }[]>([
        {
            id: "1",
            name: "Feed 1",
            href: "/feeds/1",
            userCount: 8,
            active: true
        },
        {
            id: "2",
            name: "Feed 2",
            href: "/feeds/2",
            userCount: 24,
            active: false
        }
    ])
    // * Fetch Feeds & update feeds state
    return (
        <div className="w-full md:w-3/5 lg:w-2/5 2xl:w-1/4 h-auto p-2 flex flex-col space-y-6">
            {feeds.map(feed => (
                <div key={feed.id} onClick={() => router.push(feed.href)} className="w-full h-36 border-[3px] border-white rounded-xl flex hover:cursor-pointer">
                    <div className="w-3/4 h-full p-4 flex flex-col space-y-2">
                        <h1 className="font-sf-pro font-semibold text-white text-3xl">{feed.name}</h1>
                        <div className="flex space-x-2 items-center">
                            <UserIcon className="w-5 h-5 text-white stroke-4" />
                            <h1 className="font-sf-pro font-semibold text-white text-lg">{feed.userCount} users monitored</h1>
                        </div>
                        <div className="flex space-x-2 items-center">
                            {feed.active ? <CheckIcon className="w-5 h-5 text-white stroke-[3px] stroke-white" /> : <XMarkIcon className="w-5 h-5 text-white stroke-[3px] stroke-white" />}
                            <h1 className="font-sf-pro font-semibold text-white text-lg">{feed.active ? "Active" : "Disabled"}</h1>
                        </div>
                    </div>
                    <div className="w-1/4 h-full flex justify-center items-center">
                        <div className="p-1 border-[3px] border-white rounded-xl flex justify-center items-center">
                            <ChevronRightIcon className="w-10 h-10 text-white stroke-2 stroke-white" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Feeds;