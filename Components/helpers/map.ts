const handleGetDirections = (lat: number, lng: number) => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(directionsUrl, "_blank");
};

export {handleGetDirections}