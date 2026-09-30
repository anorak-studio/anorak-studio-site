// Site-wide link rule (no extra npm dependency — just a small manual hast walk):
// an external link (http/https, or protocol-relative) always opens in a new tab,
// an internal link (relative, /path, #anchor, mailto:, tel:) always opens in the
// same tab. Applied to every markdown body rendered through <Content /> in
// src/pages/projets/[id].astro, so authors never have to think about it per link.
function isExternal(href) {
  if (!href) return false;
  return /^([a-z]+:)?\/\//i.test(href) && !href.startsWith('//localhost');
}

export default function rehypeLinkTargets() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === 'element' && node.tagName === 'a') {
        const props = (node.properties ??= {});
        if (isExternal(props.href)) {
          props.target = '_blank';
          props.rel = 'noopener noreferrer';
        } else {
          delete props.target;
          delete props.rel;
        }
      }
      if (node.children) node.children.forEach(visit);
    };
    visit(tree);
  };
}
