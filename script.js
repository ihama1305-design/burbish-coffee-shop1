const sectionSelect = document.querySelector("#sectionSelect");
const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
const sections = Array.from(document.querySelectorAll(".section[id]"));
const dialog = document.querySelector("#menuDialog");
const dialogImage = document.querySelector("#dialogImage");
const dialogTitle = document.querySelector("#menuDialogTitle");
const dialogClose = document.querySelector(".dialog-close");

if (sectionSelect) {
  sectionSelect.addEventListener("change", (event) => {
    const target = document.querySelector(event.target.value);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const active = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!active) return;

      const id = `#${active.target.id}`;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === id);
      });

      if (sectionSelect && sectionSelect.value !== id) {
        sectionSelect.value = id;
      }
    },
    {
      rootMargin: "-35% 0px -45% 0px",
      threshold: [0.2, 0.45, 0.7],
    }
  );

  sections.forEach((section) => observer.observe(section));
}

document.querySelectorAll("[data-menu-image]").forEach((button) => {
  button.addEventListener("click", () => {
    const source = button.getAttribute("data-menu-image");
    const title = button.getAttribute("data-menu-title") || "Menu page";

    dialogImage.src = source;
    dialogImage.alt = title;
    dialogTitle.textContent = title;

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      window.open(source, "_blank", "noopener,noreferrer");
    }
  });
});

if (dialogClose) {
  dialogClose.addEventListener("click", () => dialog.close());
}

if (dialog) {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  dialog.addEventListener("close", () => {
    dialogImage.removeAttribute("src");
    dialogImage.alt = "";
  });
}
