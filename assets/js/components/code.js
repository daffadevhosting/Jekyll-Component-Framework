/**
 * Code Block — copy to clipboard
 */

export function initCode() {
  document.querySelectorAll('[data-code-block]').forEach((block) => {
    const btn = block.querySelector('[data-code-copy]');
    const label = block.querySelector('[data-code-copy-label]');
    const codeEl = block.querySelector('code');
    if (!btn || !codeEl) return;

    btn.addEventListener('click', async () => {
      const text = codeEl.textContent || '';

      try {
        await navigator.clipboard.writeText(text);
      } catch {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }

      if (label) {
        const original = label.textContent;
        label.textContent = 'Copied!';
        btn.setAttribute('aria-label', 'Copied');
        setTimeout(() => {
          label.textContent = original || 'Copy';
          btn.setAttribute('aria-label', 'Copy code');
        }, 2000);
      }
    });
  });
}
