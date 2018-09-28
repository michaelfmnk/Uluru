import { FEED, SETTINGS } from 'data/routes';
import React from 'react';
import { PhotoCamera, Settings } from '@material-ui/icons';

export const getAsideMenu = () => ([
    { path: FEED, label: 'Feed', icon: <PhotoCamera /> },
    { path: SETTINGS, label: 'Settings', icon: <Settings /> },
]);
