import { createSelector } from 'reselect';

export const getLocation = state => state.getIn(['routing', 'location']);
export const getPathname = createSelector(
    getLocation,
    location => location && location.get('pathname'),
);
