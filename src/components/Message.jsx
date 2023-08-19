import { Button } from "./Button";
import { SuccessIcon } from "./SuccessIcon";

export function Message({ setIsSubmited }) {
    const handleClick = () => {
        setIsSubmited(false);
    };

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
            <Button type={"dismiss"} onClick={handleClick}>
                Dismiss Message
            </Button>
        </div>
    );
}
