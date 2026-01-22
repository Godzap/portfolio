
export const getImagePath = (path: string) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    if (path.startsWith('http') || path.startsWith('//')) return path;

    // Ensure no double slashes if basePath has trailing slash or path has leading slash
    const cleanBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;

    return `${cleanBasePath}${cleanPath}`;
};
