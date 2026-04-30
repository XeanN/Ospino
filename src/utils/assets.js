    // Esta función detecta automáticamente tu 'base' (/Delycorp/) y se la pone a la imagen
    export const getAssetUrl = (path) => {
    // Si la ruta ya empieza con http (es de internet), la dejamos igual
    if (path.startsWith('http')) return path;
    
    // Si no, le agregamos la base del proyecto
    // import.meta.env.BASE_URL es "/Delycorp/" automáticamente
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
    };