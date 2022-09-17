import { Cog8ToothIcon, PlusIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const ConnectedDesktopButtons = (props: { env: string; }) => {
    return (
        <div className="flex space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.25 }} className="p-2 border-[3px] rounded-xl border-white flex justify-center items-center hover:cursor-pointer">
                <Cog8ToothIcon className="w-10 h-10 text-white" />
            </motion.div>
            {props.env === "landing" && (
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.25 }} className="p-2 border-[3px] rounded-xl border-white flex justify-center items-center hover:cursor-pointer">
                    <PlusIcon className="w-10 h-10 text-white stroke-2 stroke-white" />
                </motion.div>
            )}
        </div>
    )
}

export default ConnectedDesktopButtons;