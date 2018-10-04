import { normalize } from 'normalizr';

export const normalizeEntityResponse = schema => (response) => {
    const res = { ...response };
    res.normalizedData = normalize(res.data, schema);
    return res;
};
