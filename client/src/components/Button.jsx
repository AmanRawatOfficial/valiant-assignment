/* eslint-disable react/prop-types */

export default function Button({ children, size, variation }) {
    // Size API
    let sizes = "";
    switch (size) {
        case "small":
            sizes = "text-xs py-1 px-2 uppercase font-semibold text-center";
            break;
        case "medium":
            sizes = "text-sm py-3 px-4 font-medium";
            break;
        case "large":
            sizes = "text-base py-3 px-6 font-medium";
            break;
        default:
            sizes = "";
    }

    // Variation API
    let variations = "";
    switch (variation) {
        case "primary":
            variations = "bg-green-400 text-green-800";
            break;
        case "secondary":
            break;
        case "danger":
            variations = "bg-red-400 text-red-800";
            break;
    }

    return (
        <button
            className={`border-none rounded-sm shadow-sm text-sm ${sizes} ${variations}`}
        >
            {children}
        </button>
    );
}
