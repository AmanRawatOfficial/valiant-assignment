/* eslint-disable react/prop-types */

import FileDownload from "js-file-download";

export default function DownloadResume({ children, filename }) {
    function downloadFile() {
        fetch(`http://127.0.0.1:8000/api/users/download/${filename}`, {})
            .then((response) => response.blob())
            .then((blob) => {
                FileDownload(blob, filename);
            });
    }

    return (
        <div
            role="button"
            className=" hover:text-green-600"
            onClick={downloadFile}
        >
            {children}
        </div>
    );
}
