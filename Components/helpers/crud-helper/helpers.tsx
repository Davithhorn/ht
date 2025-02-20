const apiUrl = (path: string) => process.env.NEXT_PUBLIC_API_URL + "/api/v1.0.0" + path;
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const fileUploadUrl = process.env.NEXT_PUBLIC_FILE_URL;

const imgUrl = (path?: string, preFix = "") => {
    if (!path) return null;
    return fileUploadUrl + preFix + path
};


const authGoogleUrl = baseUrl + "/oauth2/authorization/google";
const authFbUrl = baseUrl + "/oauth2/authorization/facebook";


export {
    apiUrl,
    imgUrl,
    baseUrl,
    fileUploadUrl,
    authGoogleUrl,
    authFbUrl
}