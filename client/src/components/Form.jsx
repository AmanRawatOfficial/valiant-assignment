/* eslint-disable react/prop-types */

export default function Form({ children, onSubmit }) {
    return (
        <form
            encType="multipart/form-data"
            onSubmit={onSubmit}
            className="py-6 px-10 bg-white border border-gray-200 rounded-md text-sm w-[30rem]"
        >
            {children}
        </form>
    );
}
