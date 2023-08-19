import { Icon } from "./Icon";

export function ContentList({ children }) {
    return (
        <div className="content">
            <h1 className="content-title">Stay Updated!</h1>
            <p className="content-text">Join 60.000+ product managers receiving monthly updates on: </p>
            <ul>{children}</ul>
        </div>
    );
}
export function ContentItem({ text }) {
    return (
        <li className="content-item">
            <Icon id={"icon-list"} width={21} height={21} />
            <p>{text}</p>
        </li>
    );
}
