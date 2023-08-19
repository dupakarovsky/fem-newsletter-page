export function Column({ children, type = "content" }) {
    const style = type === "image" ? "column image" : "column content";
    return <div className={style}>{children}</div>;
}
