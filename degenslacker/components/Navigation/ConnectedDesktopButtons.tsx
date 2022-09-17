import { Cog8ToothIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const ConnectedDesktopButtons = () => {
    return (
        <div className="flex">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.25 }} className="p-2 border-[3px] rounded-xl border-white flex justify-center items-center hover:cursor-pointer">
                <Cog8ToothIcon className="w-10 h-10 text-white" />
            </motion.div>
        </div>
    )
}

export default ConnectedDesktopButtons;