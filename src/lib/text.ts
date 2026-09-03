const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (c) => ESCAPES[c]!);

/**
 * The YAML data files allow inline markdown links and nothing else, so this
 * escapes everything and then re-introduces just the anchors.
 */
export function inlineLinks(text: string): string {
  return escapeHtml(text).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_match, label: string, href: string) => {
    const external = /^https?:\/\//.test(href);
    const attrs = external ? ' target="_blank" rel="noopener"' : '';
    return `<a class="link" href="${href}"${attrs}>${label}</a>`;
  });
}
