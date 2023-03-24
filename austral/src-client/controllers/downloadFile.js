export const downloadFile = (path, fileName) => {
    const downloadLink = document.createElement('a');
    downloadLink.href = path;
    downloadLink.target = '_blank';
    downloadLink.download = fileName;

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
};


