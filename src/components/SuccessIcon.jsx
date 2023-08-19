import { motion } from "framer-motion";

export function SuccessIcon() {
    return (
        <motion.svg
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 300, bounce: 0.5 }}
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
        >
            <defs>
                <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6A3A" />
                    <stop offset="100%" stopColor="#FF527B" />
                </linearGradient>
            </defs>
            <g fill="none">
                <circle cx="32" cy="32" r="32" fill="url(#a)" />
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1, transition: { delay: 0.75 } }}
                    stroke="#FFF"
                    strokeWidth="4"
                    d="m18.286 34.686 8.334 7.98 19.094-18.285"
                />
            </g>
        </motion.svg>
    );
}
