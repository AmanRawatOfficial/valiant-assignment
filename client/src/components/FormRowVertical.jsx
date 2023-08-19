/* eslint-disable react/prop-types */

export default function FormRowVertical({ children, label }) {
    return (
        <div className="flex flex-col gap-2 py-3 px-0">
            <label htmlFor={children.props.id} className="font-medium">
                {label}
            </label>
            {children}
        </div>
    );
}
