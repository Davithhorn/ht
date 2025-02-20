const getElBYId = (id: string) => document.getElementById(id);

const clickId = (id: string) => getElBYId(id)?.click();

export {getElBYId, clickId}