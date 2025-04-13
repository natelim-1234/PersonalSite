import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';  // Import pdfjs to set the worker path
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // Optional for annotations
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
const PdfViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) setPageNumber(pageNumber + 1);
  };

  const goToPrevPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  return (
    <div>
      <Document file={file} onLoadSuccess={onLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>

      <div>
        <button onClick={goToPrevPage} disabled={pageNumber <= 1}>Previous</button>
        <button onClick={goToNextPage} disabled={pageNumber >= numPages}>Next</button>
      </div>

      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
};

export default PdfViewer;