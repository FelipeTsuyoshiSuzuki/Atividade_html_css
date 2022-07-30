function downloadPDF() {
    const item = document.querySelector(".Content");
  
    var opt = {
      margin: 1,
      filename: "myfile.pdf",
      html2canvas: { scale: 5 },
      jsPDF: { unit: "in", format: "a3", orientation: "landscape" },
    };
  
    html2pdf().set(opt).from(item).save();
  }