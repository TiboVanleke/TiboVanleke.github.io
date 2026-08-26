document.documentElement.classList.add("js");

const menuButton = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("[data-site-nav]");

function setMenu(open) {
    if (!menuButton || !siteNav) {
        return;
    }

    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    siteNav.dataset.open = String(open);
    document.body.classList.toggle("menu-open", open);
}

if (menuButton && siteNav) {
    menuButton.addEventListener("click", () => {
        setMenu(menuButton.getAttribute("aria-expanded") !== "true");
    });

    siteNav.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            setMenu(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setMenu(false);
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 840) {
            setMenu(false);
        }
    });
}

const currentPath = window.location.pathname.replace(/index\.html$/, "");

document.querySelectorAll("[data-nav]").forEach((link) => {
    const href = link.getAttribute("href");

    if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.endsWith(".pdf")) {
        return;
    }

    const normalizedHref = href.replace(/index\.html$/, "");
    const isCurrent = normalizedHref === "/" ? currentPath === "/" : currentPath.startsWith(normalizedHref);

    if (isCurrent) {
        link.setAttribute("aria-current", "page");
    }
});

const noteItems = [...document.querySelectorAll("[data-note]")];
const noteSearch = document.querySelector("[data-note-search]");
const noteCount = document.querySelector("[data-note-count]");
const archiveEmpty = document.querySelector("[data-archive-empty]");

function updateNoteCount(count) {
    if (noteCount) {
        noteCount.textContent = String(count);
    }
}

if (noteSearch && noteItems.length) {
    updateNoteCount(noteItems.length);

    noteSearch.addEventListener("input", () => {
        const query = noteSearch.value.trim().toLocaleLowerCase();
        let visibleCount = 0;

        noteItems.forEach((item) => {
            const searchText = (item.dataset.search || item.textContent).toLocaleLowerCase();
            const matches = !query || searchText.includes(query);
            item.hidden = !matches;

            if (matches) {
                visibleCount += 1;
            }
        });

        updateNoteCount(visibleCount);

        if (archiveEmpty) {
            archiveEmpty.hidden = visibleCount !== 0;
        }
    });
}

document.querySelectorAll("[data-random-note]").forEach((link) => {
    if (!noteItems.length) {
        return;
    }

    const noteLinks = noteItems
        .map((item) => item.getAttribute("href"))
        .filter(Boolean);

    const pickNote = () => noteLinks[Math.floor(Math.random() * noteLinks.length)];

    link.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = pickNote();
    });
});

document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
});
