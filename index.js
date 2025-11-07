// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs button");
  const cards = document.querySelectorAll(".container .card, .status-card");
  const statusSection = document.querySelector(".status-card");

  // Assign each tab a corresponding section to display
  const sections = {
    "Scholarship Applications": document.querySelector(".container .card:nth-child(1)"),
    "Financial Aid Awards": document.querySelector(".container .card:nth-child(2)"),
    "Status Updates": document.querySelector(".status-card"),
    "User Profile": document.querySelector(".container .card.profile"),
  };

  // Initially show all sections (default view)
  Object.values(sections).forEach((sec) => (sec.style.display = "block"));

  // Add click listeners to each tab
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabs.forEach((btn) => btn.classList.remove("active"));
      tab.classList.add("active");

      // Hide all sections
      Object.values(sections).forEach((sec) => (sec.style.display = "none"));

      // Show selected section
      const sectionName = tab.textContent.trim();
      const activeSection = sections[sectionName];

      if (activeSection) {
        activeSection.style.display = "block";
      }
    });
  });

  // Optional: Display a friendly alert when clicking “Status” links
  const statusLinks = document.querySelectorAll("td a");
  statusLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Your scholarship application is currently under review.");
    });
  });
});
