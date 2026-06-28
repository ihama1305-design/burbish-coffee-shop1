const sectionSelect = document.querySelector("#sectionSelect");
const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
const sections = Array.from(document.querySelectorAll(".section[id]"));
const dialog = document.querySelector("#menuDialog");
const dialogImage = document.querySelector("#dialogImage");
const dialogTitle = document.querySelector("#menuDialogTitle");
const dialogClose = document.querySelector(".dialog-close");
const dialogTools = Array.from(document.querySelectorAll(".dialog-tool"));
let menuZoom = 1;

function setDialogMode(mode) {
  if (!dialogImage) return;

  dialogImage.classList.remove("fit-height", "fit-width", "zoomed");
  dialogImage.classList.add(mode);

  dialogTools.forEach((tool) => {
    tool.classList.toggle("is-active", tool.dataset.fit && mode === `fit-${tool.dataset.fit}`);
  });
}

function setMenuZoom(nextZoom) {
  menuZoom = Math.min(1.85, Math.max(0.85, nextZoom));
  dialogImage.style.setProperty("--menu-zoom", menuZoom.toFixed(2));
  setDialogMode("zoomed");
}

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

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".reveal").forEach((section) => {
    revealObserver.observe(section);
  });
} else {
  document.querySelectorAll(".reveal").forEach((section) => {
    section.classList.add("is-visible");
  });
}

document.querySelectorAll("[data-menu-image]").forEach((button) => {
  button.addEventListener("click", () => {
    const source = button.getAttribute("data-menu-image");
    const title = button.getAttribute("data-menu-title") || "Menu page";

    dialogImage.src = source;
    dialogImage.alt = title;
    dialogTitle.textContent = title;
    menuZoom = 1;
    dialogImage.style.setProperty("--menu-zoom", "1");
    setDialogMode("fit-height");

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      window.open(source, "_blank", "noopener,noreferrer");
    }
  });
});

dialogTools.forEach((tool) => {
  tool.addEventListener("click", () => {
    if (tool.dataset.fit) {
      menuZoom = 1;
      dialogImage.style.setProperty("--menu-zoom", "1");
      setDialogMode(`fit-${tool.dataset.fit}`);
    }

    if (tool.dataset.zoom === "in") {
      setMenuZoom(menuZoom + 0.15);
    }

    if (tool.dataset.zoom === "out") {
      setMenuZoom(menuZoom - 0.15);
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
    dialogImage.removeAttribute("style");
    menuZoom = 1;
  });
}
