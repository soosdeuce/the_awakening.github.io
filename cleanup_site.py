from pathlib import Path

root = Path('.')
style_new = root / 'css' / 'style-new.css'
style_css = root / 'css' / 'style.css'

if style_new.exists():
    try:
        style_css.write_bytes(style_new.read_bytes())
        print('style.css updated')
    except Exception as exc:
        print('style.css update failed:', exc)
else:
    print('style-new.css missing')

html_files = sorted(root.glob('*.html'))
for html_path in html_files:
    original = html_path.read_text(encoding='utf-8')
    text = original

    text = text.replace(
        '<script src="https://cdn.tailwindcss.com"></script>\n    <link rel="stylesheet" href="css/style.css" />',
        '    <link rel="stylesheet" href="css/style-new.css" />'
    )
    text = text.replace('href="css/style.css"', 'href="css/style-new.css"')
    text = text.replace('href="#footer"', 'href="contact.html"')

    if '<footer class="footer" id="footer">' in text:
        start = text.index('<footer class="footer" id="footer">')
        end = text.index('</footer>', start) + len('</footer>')
        text = text[:start] + text[end:]

    if text != original:
        html_path.write_text(text, encoding='utf-8')
        print('updated', html_path.name)
