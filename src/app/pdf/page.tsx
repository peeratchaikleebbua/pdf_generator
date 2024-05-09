"use client";

import React from "react";
import PDFDocument from "@/components/pdfDocument";
import PDFDownloadButton from "@/components/pdfDownloadButton";
import { PDFViewer } from "@react-pdf/renderer";

export default function pdfPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PDFViewer
        style={{ width: "100%", height: "100%", marginBottom: "1rem" }}
      >
        <PDFDocument />
      </PDFViewer>
      <PDFDownloadButton />
    </div>
  );
}
