/**
 * Download resume as PDF
 * Place cv.pdf in the public directory
 */
export const downloadResume = () => {
  try {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "cv.pdf";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading resume:", error);
    throw new Error("Failed to download resume. Please try again.");
  }
};

/**
 * Open resume in new tab
 */
export const openResume = () => {
  try {
    window.open("/cv.pdf", "_blank", "noopener,noreferrer");
  } catch (error) {
    console.error("Error opening resume:", error);
    throw new Error("Failed to open resume. Please try again.");
  }
};
