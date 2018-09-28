import { saveData, extractData, deleteData } from 'utils/localeStore';

const JWT_TOKEN_KEY = 'authToken';

export function saveTokenToStore(data) {
    saveData(JWT_TOKEN_KEY, data);
}

export function extractTokenFromStore() {
    return extractData(JWT_TOKEN_KEY);
}

export function deleteTokenFromStore() {
    deleteData(JWT_TOKEN_KEY);
}
