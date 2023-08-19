import { motion } from "framer-motion";

export function Image({ desktop, mobile, mediaSize = "600px", alt = "" }) {
    const pictureVariant = {
        start: {
            clipPath: `circle(0px at 0px 0px)`,
        },
        finish: {
            clipPath: `circle(800px at 0px 0px)`,
            transition: {
                delay: 0.5,
                duration: 0.5,
            },
        },
    };

    return (
        <motion.picture className="image splash" initial={"start"} animate={"finish"} variants={pictureVariant}>
            <source srcSet={desktop} media={`(width >= ${mediaSize})`} />
            <source srcSet={mobile} media={`(width < ${mediaSize})`} />
            <img className={"image splash"} src={desktop} alt={alt} />
        </motion.picture>
    );
}
