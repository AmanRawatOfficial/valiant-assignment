/* eslint-disable react/prop-types */

export default function DownloadResume({ children, filename }) {
    return (
        <div role="button" className=" hover:text-green-600">
            <a
                href={`http://127.0.0.1:8000/${filename}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        </div>
    );
}
