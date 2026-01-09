function toggleContent(idx) {
  // Mendapatkan elemen berdasarkan ID dinamis
  const content = document.getElementById("content-" + idx);
  const chev = document.getElementById("chev-" + idx);

  // Toggle visibilitas konten
  content.classList.toggle("active");

  // Toggle arah chevron
  if (content.classList.contains("active")) {
    chev.classList.remove("fa-chevron-down");
    chev.classList.add("fa-chevron-up");
  } else {
    chev.classList.remove("fa-chevron-up");
    chev.classList.add("fa-chevron-down");
  }
}
