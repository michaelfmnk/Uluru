export function saveData(name, data) {
    try {
        localStorage.setItem(name, data);
    } catch (err) {
        console.error(err);
    }
}

export function extractData(name) {
    try {
        const item = localStorage.getItem(name);
        return item;
    } catch (err) {
        console.error(err);
    }
    return null;
}

export function deleteData(name) {
    try {
        localStorage.removeItem(name);
    } catch (err) {
        console.log(err);
    }
}
