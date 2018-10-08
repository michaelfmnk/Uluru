import { FEED, SETTINGS, PROFILE } from 'data/routes';
import React from 'react';
import { RssFeed, Settings, Person } from '@material-ui/icons';

export const getAsideMenu = () => ([
    { path: FEED, label: 'Feed', icon: <RssFeed /> },
    { path: PROFILE, label: 'Profile', icon: <Person /> },
    { path: SETTINGS, label: 'Settings', icon: <Settings /> },
]);
