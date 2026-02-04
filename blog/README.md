# Blog Workflow

This folder contains simple, static HTML posts.

## Add a Post
1. Duplicate the template section below into a new file named `YYYY-MM-DD-your-title.html`.
2. Update the title, description, date, and content.
3. Add the post link to `blog/index.html` and the homepage `index.html` if desired.

## Post Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Post Title | Tibo Vanleke</title>
    <meta name="description" content="One-sentence summary.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Space+Grotesk:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #f7f3ee;
            --bg-2: #eef6f2;
            --card: #ffffff;
            --text-main: #1a1a1a;
            --text-muted: #5f5f5f;
            --accent: #0b6e4f;
            --line: rgba(0, 0, 0, 0.08);
            --shadow: 0 20px 50px rgba(14, 43, 34, 0.12);
            --radius: 18px;
        }

        body {
            font-family: "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            background:
                radial-gradient(800px 500px at 10% 0%, var(--bg-2), transparent 60%),
                radial-gradient(700px 500px at 90% 10%, #fef3c7, transparent 55%),
                var(--bg);
            color: var(--text-main);
            margin: 0;
            line-height: 1.7;
            min-height: 100vh;
        }

        .page {
            max-width: 760px;
            margin: 0 auto;
            padding: 48px 20px 80px;
        }

        header {
            margin-bottom: 26px;
        }

        .top-link {
            display: inline-flex;
            margin-bottom: 18px;
            color: var(--accent);
            font-weight: 600;
            text-decoration: none;
        }

        h1 {
            font-family: "Fraunces", serif;
            font-size: clamp(2rem, 3vw, 2.8rem);
            margin: 0 0 10px;
        }

        .meta {
            color: var(--text-muted);
        }

        article {
            background: var(--card);
            border: 1px solid var(--line);
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            padding: 28px;
        }

        h2 {
            margin-top: 26px;
            font-size: 1.3rem;
        }

        footer {
            margin-top: 28px;
            padding-top: 18px;
            border-top: 1px solid var(--line);
            color: var(--text-muted);
            font-size: 0.95rem;
        }
    </style>
</head>
<body>
    <div class="page">
        <a class="top-link" href="/blog/">← Back to blog</a>
        <header>
            <h1>Post Title</h1>
            <div class="meta">Month Day, Year · X min read</div>
        </header>

        <article>
            <p>
                Opening paragraph.
            </p>

            <h2>Section</h2>
            <p>
                Content goes here.
            </p>
        </article>

        <footer>
            Want to respond? Send a note to tibo@vanleke.com.
        </footer>
    </div>
</body>
</html>
```
