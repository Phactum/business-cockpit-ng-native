export function extractTemplateParameter(href: string, templateParam: string): string | null {
  const urlSegments = href.split('/');
  const index = urlSegments.indexOf(templateParam);
  if (index !== -1 && index + 1 < urlSegments.length) {
    return urlSegments[index + 1]; // Return the segment following the template parameter
  }
  return null;
}
