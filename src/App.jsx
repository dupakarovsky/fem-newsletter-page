import "./css/App.css";
import { useState } from "react";
import { motion } from "framer-motion";

function App() {
    const [isSubmited, setIsSubmited] = useState(false);

    return (
        <div className="app">
            {!isSubmited ? (
                <Newsletter>
                    <Column type="content">
                        <ContentList>
                            <ContentItem text={"Product discovery and bulding what it matters"} />
                            <ContentItem text={"Measuring to ensure updates are a success"} />
                            <ContentItem text={"And much more"} />
                        </ContentList>
                        <Form setIsSubmited={setIsSubmited} />
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
            ) : (
                <Message />
            )}
        </div>
    );
}
export default App;

function Newsletter({ children }) {
    return <div className="newsletter">{children}</div>;
}

function Column({ children, type = "content" }) {
    const style = type === "image" ? "column image" : "column content";
    return <div className={style}>{children}</div>;
}

function ContentList({ children }) {
    return (
        <div className="content">
            <h1 className="content-title">Stay Updated!</h1>
            <p className="content-text">Join 60.000+ product managers receiving monthly updates on: </p>
            <ul>{children}</ul>
        </div>
    );
}

function ContentItem({ text }) {
    return (
        <li className="content-item">
            <Icon id={"icon-list"} width={21} height={21} />
            <p>{text}</p>
        </li>
    );
}

function Form({ setIsSubmited }) {
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
            setTimeout(() => {
                // Display Message comp after 2 seconds.
                //! TODO;
                // remove loading  state

                setIsLoading(false);
                setIsValidated(false);
                setIsSubmited(true);
            }, 3000);
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
                        <span className="form-label-email">Email address</span>
                        {isError && <span className="form-label-error">Valid email required</span>}
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

function Button({ children, type, onClick, isValidated }) {
    return (
        <button type={type} className={`btn`} onClick={onClick} disabled={isValidated}>
            {children}
        </button>
    );
}

function Icon({ id, ...rest }) {
    return (
        <svg {...rest}>
            <use href={`symbol-defs.svg#${id}`} />
        </svg>
    );
}

function Image({ desktop, mobile, mediaSize = "600px", alt = "" }) {
    return (
        <picture className="image splash">
            <source srcSet={desktop} media={`(width >= ${mediaSize})`} />
            <source srcSet={mobile} media={`(width < ${mediaSize})`} />
            <img className={"image splash"} src={desktop} alt={alt} />
        </picture>
    );
}

function Message() {
    return (
        <div className="message">
            <SuccessIcon />
            <div className="message-content">
                <h2 className="message-title">Thanks for subscribing!</h2>
                <p className="message-text">
                    A confirmation email has been sent to <span>ash@loremimpsum.com</span>. Please open it and click the
                    button inside to confirm your subscription
                </p>
            </div>
            <Button type={"dismiss"}>Dismiss Message</Button>
        </div>
    );
}

function SuccessIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <defs>
                <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6A3A" />
                    <stop offset="100%" stopColor="#FF527B" />
                </linearGradient>
            </defs>
            <g fill="none">
                <circle cx="32" cy="32" r="32" fill="url(#a)" />
                <path stroke="#FFF" strokeWidth="4" d="m18.286 34.686 8.334 7.98 19.094-18.285" />
            </g>
        </svg>
    );
}

function Spinner() {
    return (
        <svg
            className="spinner"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="white"
        >
            <title>spinner</title>
            <path d="M12 4c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM20.485 7.515c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM26 16c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM22.485 24.485c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM14 28c0 0 0 0 0 0 0-1.105 0.895-2 2-2s2 0.895 2 2c0 0 0 0 0 0 0 1.105-0.895 2-2 2s-2-0.895-2-2zM5.515 24.485c0 0 0 0 0 0 0-1.105 0.895-2 2-2s2 0.895 2 2c0 0 0 0 0 0 0 1.105-0.895 2-2 2s-2-0.895-2-2zM4.515 7.515c0 0 0 0 0 0 0-1.657 1.343-3 3-3s3 1.343 3 3c0 0 0 0 0 0 0 1.657-1.343 3-3 3s-3-1.343-3-3zM1.75 16c0-1.243 1.007-2.25 2.25-2.25s2.25 1.007 2.25 2.25c0 1.243-1.007 2.25-2.25 2.25s-2.25-1.007-2.25-2.25z"></path>
        </svg>
    );
}
