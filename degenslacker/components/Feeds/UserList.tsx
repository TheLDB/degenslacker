import { motion } from 'framer-motion';
import { UserIcon, PlusIcon } from '@heroicons/react/24/solid';
interface IUserList {
    users: {
        userID: string;
        displayName: string;
        userName: string;
        pfp: string;
    }[]
}

const UserList = (props: IUserList) => {
    return (
        <div className="w-full md:w-3/5 lg:w-2/5 2xl:w-1/4 h-auto flex flex-col">
            <div className="w-full h-20 flex items-center justify-end space-x-2">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.25 }} className="p-2 border-[3px] rounded-xl border-white flex justify-center items-center hover:cursor-pointer">
                    <PlusIcon className="w-10 h-10 text-white stroke-2 stroke-white" />
                </motion.div>
            </div>
            <div className="w-full h-auto max-h-[750px] overflow-y-scroll flex flex-col border-[3px] border-white rounded-xl">
                {props.users.map(user => (
                    <div key={user.userID} className="w-full h-24 p-2 border-b-[3px] border-white flex items-center flex-shrink-0 hover:cursor-pointer">
                        <div className="w-1/6 h-full flex justify-center items-center">

                            <img src={user.pfp} className="w-12 rounded-full" />
                        </div>
                        <div className="w-4/6 h-full p-2 flex flex-col justify-center">
                            <h1 className="font-sf-pro font-semibold text-xl text-white">{user.displayName}</h1>
                            <h1 className="font-sf-pro font-normal text-md text-gray-200">@{user.userName}</h1>
                        </div>
                        <div className="w-1/6 h-full p-2 flex justify-center items-center">
                            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.25 }} className="p-2 border-[3px] rounded-xl border-white flex justify-center items-center hover:cursor-pointer">
                                <UserIcon className="w-8 h-8 text-white stroke-2 stroke-white" />
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default UserList;