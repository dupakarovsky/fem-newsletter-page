import { motion } from "framer-motion";
import { useState } from "react";
import { Spinner } from "./Spinner";
import { Button } from "./Button";

export function Form({ setIsSubmited, setInitialDelay }) {
    const [email, setEmail] = useState("");
    const [isValidated, setIsValidated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex =
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        const isValidEmail = emailRegex.test(email);

        if (isValidEmail) {
            setIsValidated(true);
            setIsLoading(true);
            setInitialDelay(0.25);
            setTimeout(() => {
                setIsLoading(false);
                setIsValidated(false);
                setIsSubmited(true);
            }, 1500);
        } else {
            setIsError(true);
        }
        console.log("state: ", { email, isValidEmail, isLoading, isError });
    };

    const handleChange = (e) => {
        setIsError(false);
        setEmail(e.target.value);
    };

    return (
        <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="form-input-wrapper">
                <label className="form-label" htmlFor="input-email">
                    <div className="form-labels">
                        <motion.span
                            layout
                            layoutId="slide"
                            transition={{ layout: { duration: 0.15 } }}
                            className="form-label-email"
                        >
                            Email address
                        </motion.span>
                        {isError && (
                            <motion.span
                                layout
                                layoutId="slide"
                                transition={{ layout: { duration: 0.15 } }}
                                className="form-label-error"
                            >
                                Valid email required
                            </motion.span>
                        )}
                    </div>
                </label>
                <input
                    className="form-input"
                    type="email"
                    name="input-email"
                    id="input-email"
                    placeholder={"email@company.com"}
                    onChange={handleChange}
                    data-iserror={isError}
                />
            </div>
            <Button type={"submit"} isValidated={isValidated}>
                {isLoading ? <Spinner /> : "Subscribe to our monthly newsletter"}
            </Button>
        </form>
    );
}
