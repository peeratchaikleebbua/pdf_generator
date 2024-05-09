// components/PDFDownloadButton.js

import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "./pdfDocument";

const PDFDownloadButton = () => (
  <PDFDownloadLink document={<PDFDocument />} fileName="document.pdf">
    {({ blob, url, loading, error }) =>
      loading ? "Loading document..." : "Download PDF"
    }
  </PDFDownloadLink>
);

export default PDFDownloadButton;
