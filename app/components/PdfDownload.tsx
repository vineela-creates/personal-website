const PdfDownload: React.FC<PDFLinkProps> = ({
  pdfUrl,
  className = "",
  children = "Download PDF",
}) => {
  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(pdfUrl, "_blank");
  };

  return (
    <>
      <a
        href={pdfUrl}
        onClick={handleDownload}
        className={`group/link text-teal-800 hover:text-blue-800 font-bold ${className}`}
      >
        {children}
      </a>
    </>
  );
};
export default PdfDownload;
