# Research-note workflow

This folder contains standalone HTML research notes. The shared reading design lives in
/assets/note.css; article files keep their own content and metadata.

## Add a note

1. Create YYYY-MM-DD-your-title.html.
2. Add a descriptive title and meta description.
3. Use the structure below and link /assets/note.css after any page-specific styles.
4. Add one .archive-entry[data-note] to blog/index.html.
5. Update the latest-note feature, visible note count, date range, and homepage link when relevant.
6. Check the index search, every internal link, and desktop/mobile rendering before publishing.

## Article shell

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Post title | Tibo Vanleke</title>
        <meta name="description" content="One-sentence summary.">
        <link rel="stylesheet" href="/assets/note.css">
    </head>
    <body>
        <div class="page">
            <a class="top-link" href="/blog/">← Back to research notes</a>
            <header>
                <h1>Post title</h1>
                <div class="meta">Month Day, Year · X min read</div>
            </header>
            <article>
                <h2>Abstract</h2>
                <p>Opening paragraph.</p>
            </article>
            <footer>
                Want to respond? Email tibo@vanleke.com.
            </footer>
        </div>
    </body>
    </html>

## Archive entry

    <a
        class="archive-entry"
        href="/blog/YYYY-MM-DD-your-title.html"
        data-note
        data-search="plain-language search terms"
    >
        <time datetime="YYYY-MM-DD">D Mon YYYY</time>
        <h3>Post title</h3>
        <span class="archive-entry__arrow" aria-hidden="true">→</span>
    </a>
