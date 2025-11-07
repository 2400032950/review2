// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs button");
  const sections = document.querySelectorAll(".card");
  
  // Hide all cards except the first three (default visible)
  const showSection = (index) => {
    sections.forEach((card, i) => {
      if (i < 3) {
        // main grid cards (Scholarship, Aid, Profile)
        card.style.display = index === 0 ? "block" : "none";
      } else {
        // status updates card (last one)
        card.style.display = index === 2 ? "block" : "none";
      }
    });

    // If User Profile tab clicked
    if (index === 3) {
      sections.forEach((card, i) => {
        card.style.display = i === 2 ? "block" : "none";
      });
    }

    // If Financial Aid Awards tab clicked
    if (index === 1) {
      sections.forEach((card, i) => {
        card.style.display = i === 1 ? "block" : "none";
      });
    }

    // If Scholarship Applications tab clicked
    if (index === 0) {
      sections.forEach((card, i) => {
        card.style.display = i === 0 ? "block" : "none";
      });
    }
  };

  // Initialize default visible section (Scholarship Applications)
  showSection(0);

  // Add event listeners to each tab
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((btn) => btn.classList.remove("active"));
      tab.classList.add("active");
      showSection(index);
    });
  });
});
