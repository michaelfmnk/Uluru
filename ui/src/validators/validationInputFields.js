import { trimString } from 'utils/formatter';
/* eslint-disable */
export const PATTERN_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export const email = (value) => matchesEmail(value) ? undefined : l('Email is not valid');

export const isEmpty = value => !trimString(value);

export const matchesEmail = value => PATTERN_EMAIL.test(value);

export const required = value => isEmpty(value) ? l('This field is required') : undefined;

export const match = (value, all) => {
    return value !== all.get('password') ? 'Passwords do not match' : undefined;
};
