export function Icon({ id, ...rest }) {
    return (
        <svg {...rest}>
            <use href={`symbol-defs.svg#${id}`} />
        </svg>
    );
}
