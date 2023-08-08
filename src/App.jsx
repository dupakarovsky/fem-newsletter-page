import "./css/App.css";
import { useState } from "react";
import { motion } from "framer-motion";

function App() {
    return (
        <div className="app">
            <Newsletter>
                <Column type="content">
                    <ContentList>
                        <ContentItem text={"Product discovery and bulding what it matters"} />
                        <ContentItem text={"Measuring to ensure updates are a success"} />
                        <ContentItem text={"And much more"} />
                    </ContentList>
                    <Form />
                </Column>
                <Column type="image">
                    <Image url={"/illustration-sign-up-desktop.svg"} alt={"Graphical abstarct image"} />
                </Column>
            </Newsletter>
            {/* <Message /> */}
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
            <Icon url={"/icon-list.svg"} />
            <p>{text}</p>
        </li>
    );
}

function Form() {
    return (
        <form className="form">
            <div className="form-input-wrapper">
                <label className="form-label" htmlFor="input-email">
                    Email address
                </label>
                <input
                    className="form-input"
                    type="email"
                    name="input-email"
                    id="input-eamil"
                    placeholder={"email@company.com"}
                />
            </div>
            <Button type={"submit"}>Subscribe to our monthly newsletter</Button>
        </form>
    );
}

function Button({ children, type, onClick }) {
    return (
        <button type={type} className={`btn ${type}`} onClick={onClick}>
            {children}
        </button>
    );
}

function Icon({ url }) {
    return <img src={url} alt="" />;
}

function Image({ url, alt = "" }) {
    // const sourceSet = sources
    //     .split(",")
    //     .map((sources, idx) => {
    //         return sources + ` 60${idx}w`;
    //     })
    //     .join(",");

    return <img className="image splash" src={url} alt={alt} />;
}

function Spinner() {
    return <div className="spinner"></div>;
}

function Message() {
    return (
        <div>
            <Image url={"/icon-success.svg"} />
            <h2>Thanks for subscribing!</h2>
            <p>
                A confirmation email has been sent to <span>ash@loremimpsum.com</span>. Please open it and click the
                button inside to confirm your subscription
            </p>

            <Button type={"confirmation"}>Dismiss Message</Button>
        </div>
    );
}
