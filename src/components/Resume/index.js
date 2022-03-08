import React from "react";
import { Document, Page } from "react-pdf";

const Resume = () => {
  return (
    <div className="d-flex justify-content-center w-55 h-100">
      <h1 className="text-white">
        <Document file="../../assets/Resume.pdf">
          <Page pageNumber={2} />
        </Document>
      </h1>
    </div>
  );
};

export default Resume;
