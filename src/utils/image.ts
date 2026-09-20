/**
 * Utility helper to resolve static assets and images correctly
 * whether running in local dev (/), AI Studio preview, or GitHub Pages subpath (/repo-name/)
 */
export function getAssetUrl(path: string | undefined | null): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  
  // Clean path: strip leading slashes
  let cleanPath = path.trim();
  while (cleanPath.startsWith('/')) {
    cleanPath = cleanPath.slice(1);
  }
  
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  
  return `${cleanBase}${cleanPath}`;
}

export function deepResolveImageUrls<T>(obj: T): T {
  if (!obj) return obj;
  if (typeof obj === 'string') {
    if (
      obj.startsWith('/images/') || 
      obj.startsWith('images/') || 
      obj.endsWith('.jpg') || 
      obj.endsWith('.png') || 
      obj.endsWith('.webp')
    ) {
      return getAssetUrl(obj) as unknown as T;
    }
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => deepResolveImageUrls(item)) as unknown as T;
  }
  if (typeof obj === 'object') {
    const res: any = {};
    for (const key of Object.keys(obj)) {
      res[key] = deepResolveImageUrls((obj as any)[key]);
    }
    return res;
  }
  return obj;
}
