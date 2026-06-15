document.documentElement.classList.add("js");

const revealItems = [...document.querySelectorAll("[data-reveal]")];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
    revealItems.forEach((item, index) => {
        item.style.setProperty("--delay", `${Math.min(index * 70, 320)}ms`);
    });

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.18,
                rootMargin: "0px 0px -8% 0px"
            }
        );

        revealItems.forEach((item) => revealObserver.observe(item));
    } else {
        revealItems.forEach((item) => item.classList.add("is-visible"));
    }
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

const noteLinks = [
    ...new Set(
        [...document.querySelectorAll('.archive-grid a[href^="/blog/"][href$=".html"]')]
            .map((link) => link.getAttribute("href"))
            .filter(Boolean)
    )
];

document.querySelectorAll("[data-random-note]").forEach((link) => {
    if (!noteLinks.length) {
        return;
    }

    const pickNote = () => {
        const currentNote = window.location.pathname.replace(/index\.html$/, "");
        const alternatives = noteLinks.filter((href) => href !== currentNote);
        const options = alternatives.length ? alternatives : noteLinks;
        return options[Math.floor(Math.random() * options.length)];
    };

    link.href = pickNote();
    link.addEventListener("click", () => {
        link.href = pickNote();
    });
});
