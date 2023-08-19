import { motion } from "framer-motion";

export function Button({ children, type, onClick, isValidated }) {
    return (
        <motion.button type={type} className={`btn`} onClick={onClick} disabled={isValidated}>
            {children}
        </motion.button>
    );
}
