// ----IMPORTS----
import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from '../utils/error';
import {saveAuthToken, clearAuthToken} from '../utils/auth';


// ----ACTIONS----
//AUTHORIZATION
export const SET_AUTH_TOKEN = 'app/auth/SET_AUTH_TOKEN';
export const CLEAR_AUTH = 'app/auth/CLEAR_AUTH';
export const LOGGED_OUT= 'app/auth/LOGGED_OUT';
export const AUTH_REQUEST = 'app/auth/AUTH_REQUEST';
export const AUTH_SUCCESS = 'app/auth/AUTH_SUCCESS';
export const AUTH_ERROR = 'app/auth/AUTH_ERROR';

//INFO
export const LANDING_INFO_CLICK = 'app/auth/LANDING_INFO_CLICK';

//PROFILE
export const PROFILE_REQUEST= 'app/auth/PROFILE_REQUEST'
export const PROFILE_LOAD = 'app/auth/PROFILE_LOAD';
export const PROFILE_EDIT_CLICK = 'app/auth/PROFILE_EDIT_CLICK';
export const PROFILE_IMAGE_UPDATE_CLICK= 'app/auth/PROFILE_IMAGE_UPDATE_CLICK';
export const PROFILE_UPDATE_REQUEST = 'app/auth/PROFILE_UPDATE_REQUEST';
export const PROFILE_UPDATE_SUCCESS= 'app/auth/PROFILE_UPDATE_SUCCESS';
export const PROFILE_IMAGE_UPDATE_REQUEST = 'app/auth/PROFILE_IMAGE_UPDATE_REQUEST';
export const PROFILE_SUCCESS = 'app/auth/PROFILE_SUCCESS';
export const PROFILE_ERROR = 'app/auth/PROFILE_ERROR';

//LUNCH GROUP
export const LUNCH_GROUP_GET_FILTER = 'app/auth/LUNCH_GROUP_FILTER';
export const LUNCH_GROUP_GET_REQUEST = 'app/auth/LUNCH_GROUP_REQUEST';
export const LUNCH_GROUP_GET_SUCCESS = 'app/auth/LUNCH_GROUP_GET_SUCCESS';
export const LUNCH_GROUP_GET_ERROR = 'app/auth/LUNCH_GROUP_GET_ERROR';

export const LUNCH_GROUP_CREATE_CLICK = 'app/auth/LUNCH_GROUP_CREATE_CLICK';
export const LUNCH_GROUP_CREATE_CANCEL= 'app/auth/LUNCH_GROUP_CREATE_CANCEL';
export const LUNCH_GROUP_CREATE_REQUEST= 'app/auth/LUNCH_GROUP_CREATE_REQUEST';
export const LUNCH_GROUP_CREATE_SUCCESS= 'app/auth/LUNCH_GROUP_CREATE_SUCCESS';
export const LUNCH_GROUP_CREATE_ERROR= 'app/auth/LUNCH_GROUP_CREATE_ERROR';

export const LUNCH_GROUP_JOIN_REQUEST= 'app/auth/LUNCH_GROUP_JOIN_REQUEST';
export const LUNCH_GROUP_JOIN_SUCCESS= 'app/auth/LUNCH_GROUP_JOIN_SUCCESS';
export const LUNCH_GROUP_JOIN_ERROR= 'app/auth/LUNCH_GROUP_JOIN_ERROR';

export const LUNCH_GROUP_LEAVE_REQUEST= 'app/auth/LUNCH_GROUP_LEAVE_REQUEST';
export const LUNCH_GROUP_LEAVE_SUCCESS= 'app/auth/LUNCH_GROUP_LEAVE_SUCCESS';
export const LUNCH_GROUP_LEAVE_ERROR= 'app/auth/LUNCH_GROUP_LEAVE_ERROR';

export const LUNCH_GROUP_EDIT_CLICK = 'app/auth/LUNCH_GROUP_EDIT_CLICK';
export const LUNCH_GROUP_EDIT_CANCEL= 'app/auth/LUNCH_GROUP_EDIT_CANCEL';
export const LUNCH_GROUP_EDIT_REQUEST= 'app/auth/LUNCH_GROUP_EDIT_REQUEST';
export const LUNCH_GROUP_EDIT_SUCCESS= 'app/auth/LUNCH_GROUP_EDIT_SUCCESS';
export const LUNCH_GROUP_EDIT_ERROR= 'app/auth/LUNCH_GROUP_EDIT_ERROR';

export const LUNCH_GROUP_DELETE_REQUEST= 'app/auth/LUNCH_GROUP_DELETE_REQUEST';
export const LUNCH_GROUP_DELETE_SUCCESS= 'app/auth/LUNCH_GROUP_DELETE_SUCCESS';
export const LUNCH_GROUP_DELETE_ERROR= 'app/auth/LUNCH_GROUP_DELETE_ERROR';

// ----ACTION CREATORS----
//AUTHORIZATION
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const loggedOut = () => ({
    type: LOGGED_OUT
});

export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
    
});

export const authError = error => ({
    type: AUTH_ERROR,
    error
});

// INFO
export const landingInfoClick = () => ({
    type: LANDING_INFO_CLICK
});


//PROFILE
export const profileLoad = () => ({
    type: PROFILE_LOAD
});

export const profileRequest = () => ({
    type: PROFILE_REQUEST
});

export const profileEditClick = () => ({
    type: PROFILE_EDIT_CLICK
});

export const profileImageUpdateClick = () => ({
    type: PROFILE_IMAGE_UPDATE_CLICK
});

export const profileUpdateRequest = () => ({
    type: PROFILE_UPDATE_REQUEST
    
});

export const profileUpdateSuccess = profileUpdate => ({
    type: PROFILE_UPDATE_SUCCESS,
    profileUpdate
});


export const profileSuccess = profileInfo => ({
    type: PROFILE_SUCCESS,
    profileInfo
});

export const profileError = error => ({
    type: PROFILE_ERROR,
    error
});

export const profileImageUpdateRequest = () => ({
    type: PROFILE_IMAGE_UPDATE_REQUEST
});


//LUNCHGROUP
export const lunchGroupGetRequest = (groupId) => ({
    type: LUNCH_GROUP_GET_REQUEST,
    groupId
});

export const lunchGroupGetFilter = (searchTerm) => ({
    type: LUNCH_GROUP_GET_FILTER,
    searchTerm
});

export const lunchGroupGetSuccess = groupResults => ({
    type: LUNCH_GROUP_GET_SUCCESS,
    groupResults
});

export const lunchGroupGetError = error => ({
    type: LUNCH_GROUP_GET_ERROR,
    error
});

export const lunchGroupCreateClick = () => ({
    type: LUNCH_GROUP_CREATE_CLICK
});

export const lunchGroupCreateRequest = () => ({
    type: LUNCH_GROUP_CREATE_REQUEST
});

export const lunchGroupCreateSuccess = newLunchGroup => ({
    type: LUNCH_GROUP_CREATE_SUCCESS,
    newLunchGroup
});

export const lunchGroupCreateError = error => ({
    type: LUNCH_GROUP_CREATE_ERROR,
    error
});

export const lunchGroupJoinRequest = () => ({
    type: LUNCH_GROUP_JOIN_REQUEST
});

export const lunchGroupJoinSuccess = newLunchGroup => ({
    type: LUNCH_GROUP_JOIN_SUCCESS,
    newLunchGroup
});

export const lunchGroupJoinError = error => ({
    type: LUNCH_GROUP_JOIN_ERROR,
    error
});

export const lunchGroupLeaveRequest = () => ({
    type: LUNCH_GROUP_LEAVE_REQUEST
});

export const lunchGroupLeaveSuccess = (updatedLunchGroups) => ({
    type: LUNCH_GROUP_LEAVE_SUCCESS,
    updatedLunchGroups
});

export const lunchGroupLeaveError = error => ({
    type: LUNCH_GROUP_LEAVE_ERROR,
    error
});

export const lunchGroupEditClick= editGroupId => ({
    type: LUNCH_GROUP_EDIT_CLICK,
    editGroupId
});

export const lunchGroupEditCancel = () => ({
    type: LUNCH_GROUP_EDIT_CANCEL
});

export const lunchGroupEditRequest = () => ({
    type: LUNCH_GROUP_EDIT_REQUEST
});

export const lunchGroupEditSuccess = updatedGroups => ({
    type: LUNCH_GROUP_EDIT_SUCCESS,
    updatedGroups
});

export const lunchGroupEditError = error => ({
    type: LUNCH_GROUP_EDIT_ERROR,
    error
});

export const lunchGroupDeleteRequest = (groupId) => ({
    type: LUNCH_GROUP_DELETE_REQUEST,
    groupId
    
});

export const lunchGroupDeleteSuccess = () => ({
    type: LUNCH_GROUP_DELETE_SUCCESS,
});

export const lunchGroupDeleteError = error => ({
    type: LUNCH_GROUP_DELETE_ERROR,
    error
});

// ----INITIAL STATE----
const initialState = {
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null,
    currentUserId: null,
    groupResults: null,
    groupId: null,
    error: null,
    profileUpToDate: false,
    profileEdit: false,
    profileImageEdit: false,
    createLunchGroup: false,
    lunchGroupUpdated: false,
    authLoading: false,
    loading:false,
    searchTerm:'',
    editGroupId: null,
    infoForChef: false,
};


// ----REDUCER----
export default function authReducer(state=initialState, action) {
    if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    } else if (action.type === CLEAR_AUTH) {
        return Object.assign({}, state, {
            authToken: null,
            currentUser: null
        });
    } else if (action.type === LOGGED_OUT) {
        return Object.assign({}, initialState, {
            initialState
        });
    } else if (action.type === AUTH_REQUEST) {
        return Object.assign({}, state, {
            authLoading: true,
            loading:true,
            error: null,
        });
    } else if (action.type === AUTH_SUCCESS) {
        return Object.assign({}, state, {
            authLoading: false,
            loading: false,
            currentUser: action.currentUser,
            currentUserId: action.currentUser.id
        });
    } else if (action.type === AUTH_ERROR) {
        return Object.assign({}, state, {
            authLoading: false,
            error: action.error
        });
    } else if (action.type === LANDING_INFO_CLICK) {
        return Object.assign({}, state, {
            infoForChef: (!state.infoForChef)
        });
    } else if (action.type === PROFILE_LOAD) {
        return Object.assign({}, state, {
            loading:true,
        });
    } else if (action.type === PROFILE_REQUEST) {
        return Object.assign({}, state, {
            loading: true
    });
    } else if (action.type === PROFILE_EDIT_CLICK) {
            return Object.assign({}, state, {
                profileEdit: (!state.profileEdit),
                profileImageEdit:false
        });
    } else if (action.type === PROFILE_IMAGE_UPDATE_CLICK) {
        return Object.assign({}, state, {
            profileImageEdit: (!state.profileImageEdit)
    });
    } else if (action.type === PROFILE_UPDATE_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === PROFILE_UPDATE_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            currentUser: action.profileUpdate, 
            profileEdit: false,
            profileUpToDate: false,
            profileImageEdit:false
        });
    } else if (action.type === PROFILE_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            currentUser: action.profileInfo, 
            profileUpToDate: true
        });
    } else if (action.type === PROFILE_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if (action.type === LUNCH_GROUP_GET_REQUEST) {
        return Object.assign({}, state, {
            loading:true,
            error: null,
        });
    } else if (action.type === LUNCH_GROUP_GET_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            groupResults: action.groupResults, 
            lunchGroupUpdated: false,
        });
    } else if (action.type === LUNCH_GROUP_GET_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error, 
        });    
    } else if (action.type === LUNCH_GROUP_GET_FILTER) {
        return Object.assign({}, state, {
           searchTerm: action.searchTerm
        });
    } else if (action.type === LUNCH_GROUP_CREATE_CLICK) {
        return Object.assign({}, state, {
            createLunchGroup: (!state.createLunchGroup)
        });
    } else if (action.type === LUNCH_GROUP_CREATE_REQUEST) {
         return Object.assign({}, state, {
            loading: true,
        });
    } else if (action.type === LUNCH_GROUP_CREATE_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            groupResults: [...state.groupResults, action.newLunchGroup],
            profileEdit: false,
       });
    } else if (action.type === LUNCH_GROUP_CREATE_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if (action.type === LUNCH_GROUP_JOIN_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
        });
    } else if (action.type === LUNCH_GROUP_JOIN_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            groupResults: action.newLunchGroup,
        });        
    } else if (action.type === LUNCH_GROUP_JOIN_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if (action.type === LUNCH_GROUP_LEAVE_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
        });
    } else if (action.type === LUNCH_GROUP_LEAVE_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            groupResults: action.updatedLunchGroups
        });        
    } else if (action.type === LUNCH_GROUP_LEAVE_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if (action.type === LUNCH_GROUP_EDIT_CLICK) {
        return Object.assign({}, state, {
            editGroupId: action.editGroupId
        });        
    } else if (action.type === LUNCH_GROUP_EDIT_CANCEL) {
        return Object.assign({}, state, {
           editGroupId: null,
        });
    } else if (action.type === LUNCH_GROUP_EDIT_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
        });
    } else if (action.type === LUNCH_GROUP_EDIT_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            groupResults: action.updatedGroups,
            editGroupId: null
        });      
    } else if (action.type === LUNCH_GROUP_EDIT_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            editGroupId: null,
            error: action.error
        });    
    } else if (action.type === LUNCH_GROUP_DELETE_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if (action.type === LUNCH_GROUP_DELETE_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            groupId: action.groupId
        });
    } else if (action.type === LUNCH_GROUP_DELETE_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            groupResults: deleteSingleGroup(state.groupResults, state.groupId),
            groupId: null
        });        
    } else if (action.type === LUNCH_GROUP_DELETE_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    return state;
}

// ----ACTION FUNCIONS----
export const getUserInfo = (authToken) => dispatch => {
    const decodedToken =jwtDecode(authToken);
    const userId = decodedToken.user.id
    dispatch(profileRequest())
    return (
        fetch(`${API_BASE_URL}/users/${userId}`, {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authToken}`
            }
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(profileInfo => {
                dispatch(profileLoad())
                dispatch(profileSuccess(profileInfo))
            })
    )
};

//INFO FUNCTION
export const infoClick = () => (dispatch) => {
    dispatch(landingInfoClick());
}

//PROFILE FUNCTIONS
export const profileEditToggle = () => (dispatch) => {
    dispatch(profileEditClick());
}

export const profileImageEditToggle = () => (dispatch) => {
    dispatch(profileImageUpdateClick());
}

export const updateProfile = profile => (dispatch, getState) => {
    dispatch(profileUpdateRequest());
    const { authToken , currentUserId } = getState().auth;
    const chefId = currentUserId
    
    return fetch(`${API_BASE_URL}/users/${chefId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
            profile
        })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(updatedProfile => {
        dispatch(profileUpdateSuccess(updatedProfile))
    })
    .catch(err => {
        console.log(err);
        const {code} = err;
        const message =
            code === 401
                ? 'Cannot update'
                : 'please try again';
        dispatch(profileError(err));
        return Promise.reject(
            new SubmissionError({
                _error: message
            })
        );
    })
};

export const uploadProfileImage = profileImage => (dispatch, getState) => {
    const { authToken , currentUserId } = getState().auth;
    const userId = currentUserId
    
    dispatch(profileImageUpdateRequest());
    return (
            fetch(`${API_BASE_URL}/users/profileImage/${userId}`, {
                method: 'PUT',
                headers: {
                        Authorization: `Bearer ${authToken}`,
                },
                body: profileImage,
        
            })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json()))
        .then(updatedProfile => {
            dispatch(profileUpdateSuccess(updatedProfile))
        })
        .catch(err => {
            console.log(err);
            const {code} = err;
            const message =
                code === 401
                    ? 'Cannot update'
                    : 'please try again';
            dispatch(profileError(err));
            return Promise.reject(
                new SubmissionError({
                    _error: message
                })
            );
        })
};


//LUNCHGROUP FUNCTIONS
export const lunchGroupCreateToggle = () => (dispatch) => {
    dispatch(lunchGroupCreateClick());
}

export const getLunchGroupResults = () => dispatch => {
    dispatch(lunchGroupGetRequest())
    return (
        fetch(`${API_BASE_URL}/groups/`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            }
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(groupInfo => {
            dispatch(lunchGroupGetSuccess(groupInfo))
        }) 
        .catch(err => {
            console.log(err);
            const {code} = err;
            const message =
                code === 401
                    ? 'Cannot get group results'
                    : 'please try again';
            dispatch(lunchGroupGetError(err));
            return Promise.reject(
                new SubmissionError({
                    _error: message
            })
            );
        })
    )
};

export const createNewGroup = (newLunchGroup) => (dispatch, getState) => {
    console.log('posting a new group')
    dispatch(lunchGroupCreateRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/groups/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(newLunchGroup)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(newGroup => {
        dispatch(lunchGroupCreateSuccess(newGroup))
        dispatch(lunchGroupCreateToggle())
    })
    .catch(err => {
        console.log(err);
        const {code} = err;
        const message =
            code === 401
                ? 'Cannot update'
                : 'please try again';
        dispatch(lunchGroupCreateError(err));
        return Promise.reject(
            new SubmissionError({
                _error: message
            })
        );
    })
};

export const filterLunchGroups = (searchTerm) => dispatch => {
    dispatch(lunchGroupGetFilter(searchTerm))
}

export const joinLunchGroup = (groupId) => (dispatch, getState) => {
    console.log(`joining a new group: ${groupId}`)
    dispatch(lunchGroupJoinRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/groups/members/${groupId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify()
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(newGroup => {
        dispatch(lunchGroupJoinSuccess(newGroup))
    })
    .catch(err => {
        console.log(err);
        const {code} = err;
        const message =
            code === 401
                ? 'Cannot join'
                : 'please try again';
        dispatch(lunchGroupJoinError(err));
        return Promise.reject(
            new SubmissionError({
                _error: message
            })
        );
    })
};

export const leaveLunchGroup = (groupId) => (dispatch, getState) => {
    console.log(`leaving lunch group: ${groupId}`)
    dispatch(lunchGroupLeaveRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/groups/members/${groupId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify()
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(updatedLunchGroups => {
        dispatch(lunchGroupLeaveSuccess(updatedLunchGroups))
    })
    .catch(err => {
        console.log(err);
        const {code} = err;
        const message =
            code === 401
                ? 'Not authorized or'
                : 'No longer a member of this group';
        dispatch(lunchGroupLeaveError(err));
        return Promise.reject(
            new SubmissionError({
                _error: message
            })
        );
    })
};

export const editLunchGroupClick= groupId => (dispatch) =>  {
    dispatch(lunchGroupEditClick(groupId));
};

export const editLunchGroupCancel= () => (dispatch) =>  {
    dispatch(lunchGroupEditCancel());
};


export const editLunchGroup = (groupUpdate) => (dispatch, getState) => {
    const { authToken, editGroupId} = getState().auth;
    console.log(`editing lunch group: ${editGroupId}`)
    dispatch(lunchGroupEditRequest());
    return fetch(`${API_BASE_URL}/groups/${editGroupId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(groupUpdate)
    })
    .then(res =>  res.json())
    .then(updatedLunchGroups => {
        dispatch(lunchGroupEditSuccess(updatedLunchGroups))
    })
    .catch(err => {
        console.log(err);
        const {code} = err;
        const message =
            code === 401
                ? 'Not authorized or'
                : 'cannot edit this group';
        dispatch(lunchGroupEditError(err));
        return Promise.reject(
            new SubmissionError({
                _error: message
            })
        );
    })
};


export const deleteLunchGroup = (groupId) => (dispatch, getState) => {
    console.log(`deleting lunch group: ${groupId}`)
    dispatch(lunchGroupDeleteRequest(groupId));
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/groups/${groupId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify()
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
        dispatch(lunchGroupDeleteSuccess())
    })
    .catch(err => {
        console.log(err);
        const {code} = err;
        const message =
            code === 401
                ? 'Not authorized or'
                : 'group no longer exists';
        dispatch(lunchGroupDeleteError(err));
        return Promise.reject(
            new SubmissionError({
                _error: message
            })
        );
    })
};



//AUTHENTICATION FUNCTIONS
// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken.user));
    saveAuthToken(authToken);
};



//}

export const login = (username, password) => dispatch => {
    dispatch(authRequest());
    console.log('user logging in')
    return (
        fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(({authToken}) => storeAuthInfo(authToken, dispatch))
            .catch(err => {
                const {code} = err;
                const message =
                    code === 401
                        ? 'Incorrect username or password'
                        : 'Unable to login, please try again';
                dispatch(authError(err));
                // Could not authenticate, so return a SubmissionError for Redux
                // Form
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                    })
                );
            })
    );
};

export const logout = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    console.log('Logging out')
    dispatch(clearAuth());
    clearAuthToken(authToken);
    dispatch(loggedOut)
}


export const refreshAuthToken = () => (dispatch, getState) => {
    dispatch(authRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            // Provide our existing token as credentials to get a new one
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            // We couldn't get a refresh token because our current credentials
            // are invalid or expired, or something else went wrong, so clear
            // them and sign us out
            dispatch(authError(err));
            dispatch(clearAuth());
            clearAuthToken(authToken);
        });
};

function deleteSingleGroup(groups, groupId){
    return groups.filter (groups => {
        return groups._id !== groupId
    })
}

