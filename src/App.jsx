import "./css/App.css";
import { useState } from "react";

import { Newsletter } from "./components/Newsletter";
import { Column } from "./components/Column";
import { ContentList, ContentItem } from "./components/ContentList";
import { Form } from "./components/Form";
import { Image } from "./components/Image";
import { Message } from "./components/Message";
import { motion, AnimatePresence } from "framer-motion";

function App() {
    const [isSubmited, setIsSubmited] = useState(false);
    const [initialDelay, setInitialDelay] = useState(0.25);

    return (
        <div className="app">
            <AnimatePresence>
                {!isSubmited ? (
                    <motion.div
                        className={"motion"}
                        key={"newsletter"}
                        initial={{ y: 500, opacity: 0 }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                delay: initialDelay,
                            },
                        }}
                        exit={{ y: -500, opacity: 0 }}
                    >
                        <Newsletter>
                            <Column type="content">
                                <ContentList>
                                    <ContentItem text={"Product discovery and bulding what it matters"} />
                                    <ContentItem text={"Measuring to ensure updates are a success"} />
                                    <ContentItem text={"And much more"} />
                                </ContentList>
                                <Form setIsSubmited={setIsSubmited} setInitialDelay={setInitialDelay} />
                            </Column>
                            <Column type="image">
                                <Image
                                    desktop={"/illustration-sign-up-desktop.svg"}
                                    mobile={"/illustration-sign-up-mobile.svg"}
                                    mediaSize="600px"
                                    alt={"Graphical abstarct image"}
                                />
                            </Column>
                        </Newsletter>
                    </motion.div>
                ) : (
                    <motion.div
                        className={"motion"}
                        key={"message"}
                        initial={{ y: 500, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { delay: 0.25 } }}
                        exit={{ y: -500, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <Message setIsSubmited={setIsSubmited} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
export default App;
