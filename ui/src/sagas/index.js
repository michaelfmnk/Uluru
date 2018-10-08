import { fork, takeLatest, select, put } from 'redux-saga/effects';
import { LOGIN, VERIFY_USER, SIGN_OUT } from 'actions/session';
import { LIKE_FEED_ITEM, loadFeed, SEND_COMMENT } from 'actions/feed';
import { getCurrentUser } from 'actions/users';
import { successAction } from 'actions/actionTypes';
import { saveTokenToStore, deleteTokenFromStore } from 'utils/session';
import { getToken } from 'selectors/session';


function* saveToken() {
    const token = yield select(getToken);
    saveTokenToStore(token);
}

function* getUser() {
    yield put(getCurrentUser());
}

function* watchLogin() {
    yield takeLatest(successAction(LOGIN), saveToken);
    yield takeLatest(successAction(LOGIN), getUser);
}

function* watchVerifyUser() {
    yield takeLatest(successAction(VERIFY_USER), saveToken);
    yield takeLatest(successAction(VERIFY_USER), getUser);
}

function* watchSignOut() {
    yield takeLatest(SIGN_OUT, deleteTokenFromStore);
}

function* watchLike() {
    yield takeLatest(successAction(LIKE_FEED_ITEM), fetchFeed);
}

function* fetchFeed() {
    yield put(loadFeed());
}

function* watchComment() {
    yield takeLatest(successAction(SEND_COMMENT), fetchFeed);
}

export default function* rootSaga() {
    yield fork(watchLogin);
    yield fork(watchVerifyUser);
    yield fork(watchSignOut);
    yield fork(watchLike);
    yield fork(watchComment);
}
