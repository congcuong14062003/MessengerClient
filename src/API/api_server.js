 const API_HOST = 'http://localhost:1406/apis';

// user API endpoints
const API_SIGNUP_POST = API_HOST + '/users/signup';
const API_LOGIN_POST = API_HOST + '/users/login';
const API_GET_ALL_USERS = API_HOST + '/users/all-user';
const API_LOGOUT = API_HOST + '/users/logout';

const API_GET_ALL_MEDIA = (id) => `${API_HOST}/users/all-media/${id}`;


const API_SIGNUP_SOCIALNETWORK_POST = API_HOST + '/users/social-network/signup';
const API_GET_USER_BY_ID = (id) => `${API_HOST}/users/info/${id}`;
const API_UPDATE_USER = `${API_HOST}/users/update-profile`;
const API_UPDATE_USER_PASSWORD = `${API_HOST}/users/reset-password`;
const API_DELETE_USER = (id) => `${API_HOST}/users/delete/${id}`;
const API_CHECK_EXIST_USER = (id) => `${API_HOST}/users/is-existed/${id}`;

// setting user
const API_UPDATE_SETTING_USER = `${API_HOST}/users/update-setting`;
const API_GET_USER_SETTING = `${API_HOST}/users/get-setting/`;

//User face recognition profile
const API_CREATE_FACE_RECOGNITION_BY_ID = `${API_HOST}/users/create-face-recognition/`;
const API_GET_FACE_RECOGNITION_BY_ID = `${API_HOST}/users/get-face-recognition/`;
const API_DELETE_FACE_RECOGNITION_BY_ID = `${API_HOST}/users/delete-face-recognition/`;
const API_ALL_FACE_RECOGNITION = `${API_HOST}/users/get-all-face-recognition`;
const API_ALL_FACE_RECOGNITION_BY_ID = `${API_HOST}/users/get-all-face-recognition-by-id`;
const API_LOGIN_FACE_RECOGNITION = `${API_HOST}/users/login-face-recognition`;

// friend API endpoints
const API_LIST_FRIEND = API_HOST + '/friends/list-friends';
const API_LIST_FRIEND_BY_ID = (id) => `${API_HOST}/friends/list-friend-user/${id}`;
const API_LIST_FRIEND_SUGGEST = API_HOST + '/friends/list-friends-suggest';
const API_LIST_INVITED_FRIEND = API_HOST + '/friends/list-invited-friends-suggest';
const API_LIST_FRIEND_INVITE = API_HOST + '/friends/list-friend-invite';

const API_ADD_FRIEND = (id) => `${API_HOST}/friends/add-friend/${id}`;
const API_ACCEPT_INVITE = (id) => `${API_HOST}/friends/accept-add-friend/${id}`;
const API_CHECK_IF_FRIEND = (id) => `${API_HOST}/friends/check-friend/${id}`;
const API_CHECK_FRIEND_REQUEST = (id) => `${API_HOST}/friends/check-request/${id}`;
const API_CANCEL_FRIEND_REQUEST = (id) => `${API_HOST}/friends/cancel-request/${id}`;

////// messages
const API_SEND_MESSAGE = (id) => API_HOST + '/messages/send-message/' + id;
const API_GET_MESSAGES = (id) => `${API_HOST}/messages/all-messages/${id}`;
const API_UPDATE_IS_READ = (id) => `${API_HOST}/messages/update-isseen/${id}`;
const API_DELETE_ALL_MESSAGE = (id) =>
    API_HOST + "/messages/delete-all-messenger/" + id;
  const API_DELETE_MESSAGE = (id) =>
    API_HOST + "/messages/delete-messenger/" + id;
  const API_DELETE_MESSAGE_OWNER_SIDE = (id) =>
    API_HOST + "/messages/delete-messenger-by-owner-side/" + id;


const API_GET_CONVERSATIONS = `${API_HOST}/messages/conversations`;
const API_CHECK_EXIST_KEY_PAIR = `${API_HOST}/messages/check-exists-keypair`;
const API_CHECK_KEY_FRIEND = (id) => `${API_HOST}/messages/check-exists-keypair-friend/${id}`;
const API_POST_KEY_PAIR = `${API_HOST}/messages/create-keypair`;
const API_DELETE_KEY_PAIR = `${API_HOST}/messages/delete-keypair`;
const API_POST_DECODE_PRIVATE_KEY_PAIR = `${API_HOST}/messages/post-decode-private-key`;
const API_DECODE_MESSAGE = `${API_HOST}/messages/decode-message`;

////// POST
const API_CREATE_POST = API_HOST + '/posts/create-post';
const API_DELETE_POST = (id) =>  `${API_HOST}/posts/delete-post/${id}`;
const API_UPDATE_POST = (id) =>  `${API_HOST}/posts/edit-post/${id}`;
const API_POST_DETAIL = (id) =>  `${API_HOST}/posts/post-detail/${id}`;
const API_GET_POSTS = API_HOST + '/posts/list-post';
const API_GET_POSTS_BY_ID = (id) => `${API_HOST}/posts/list-post-by-user/${id}`;

// comment post
const API_CREATE_COMMENT_POST = (id) => `${API_HOST}/posts/create-comment-post/${id}`;
const API_CREATE_SUB_COMMENT = (id) => `${API_HOST}/posts/create-sub-comment-post/${id}`;
const API_LIST_COMMENT_POST = (id) => `${API_HOST}/posts/list-comment-post/${id}`;

// react post
const API_CREATE_REACT_POST = (id) => `${API_HOST}/posts/create-react-post/${id}`;
const API_DELETE_REACT_POST = (id) => `${API_HOST}/posts/delete-react-post/${id}`;
// comment post
const API_HEART_COMMENT_BY_COMMENT_ID = (id) =>
  `${API_HOST}/posts/heart-comment/${id}`;

const API_HEART_SUB_COMMENT_BY_COMMENT_ID = (id) =>
  `${API_HOST}/posts/heart-sub-comment/${id}`;
const API_DELETE_COMMENT_POST_BY_COMMENT_ID = (id) =>
  `${API_HOST}/posts/delete-comment/${id}`;

const API_DELETE_SUB_COMMENT_POST_BY_SUB_COMMENT_ID = (id) =>
  `${API_HOST}/posts/delete-sub-comment/${id}`;

////// STORY
const API_CREATE_STORY = API_HOST + '/stories/create-story';
const API_LIST_STORY = API_HOST + '/stories/list-story';
const API_DELETE_STORY_BY_ID = (id) => `${API_HOST}/stories/delete/${id}`;
const API_STORY_BY_ID = (id) => `${API_HOST}/stories/story-by-id/${id}`;
const API_CREATE_HEART_STORY = (id) => `${API_HOST}/stories/create-heart-story/${id}`;

////// Thông báo
const API_CREATE_NOTIFICATION = API_HOST + '/notices/create-notice';
const API_DELETE_NOTIFICATION_BY_ID = (id) => API_HOST + '/notices/delete-notice/' + id;
const API_LIST_NOTIFICATION = API_HOST + '/notices/list-notice';
const API_DELETE_ALL_NOTIFICATION = API_HOST + '/notices/delete-all';
const API_DELETE_ALL_NOTICE_CURRRENT = API_HOST + '/notices/delete-notice-current';




// User infomanation API endpoint
const API_GET_INFO_USER_PROFILE_BY_ID = (id) => `${API_HOST}/users/info-profile/${id}`;
const API_GET_INFO_OWNER_PROFILE_BY_ID = `${API_HOST}/users/info-profile/`;

//Token
// const API_LOGOUT = API_HOST + '/token/delete';
const API_ROTATION_TOKEN = API_HOST + '/token/create';
const API_DECODE_TOKEN = API_HOST + '/token/decode-refresh-token';

// OTP API endpoints
const API_CREATE_OTP = API_HOST + '/otp/create';
const API_CREATE_LINK_OTP = API_HOST + '/otp/link/create';
const API_CREATE_OTP_SIGNUP = API_HOST + '/otp/signup/create';
const API_VERIFY_OTP = API_HOST + '/otp/verify';
// GROUP API ENDPOINT
const API_GROUP_CREATE = API_HOST + "/group/channel/create";
const API_LIST_GROUP_BY_USERID = (id) =>
  API_HOST + "/group/members/list-all-group/" + id;
const API_GROUP_DETAIL = (id) => API_HOST + "/group/channel/details/" + id;
const API_UPDATE_GROUP = (id) => API_HOST + "/group/channel/update/" + id;
const API_DELETE_GROUP = (id) => API_HOST + "/group/channel/delete/" + id;
const API_LIST_GROUP_BY_OWNER = API_HOST + "/group/members/list-all-group/";
const API_LIST_MEMBERS_GROUP = (id) =>
  API_HOST + "/group/members/list-members-group/" + id;
const API_LIST_MEMBERS_OFFICAL_GROUP = (id) =>
  API_HOST + "/group/members/list-members-offical-group/" + id;
const API_LIST_MEMBERS_UNAPPROVED_GROUP = (id) =>
  API_HOST + "/group/members/list-members-unapproved-group/" + id;
const API_CHECK_ROLE_MEMBER_GROUP = (id) =>
  API_HOST + "/group/members/check-role/" + id;
const API_INVITE_MEMBER_GROUP = (id) =>
  API_HOST + "/group/members/invited-group/" + id;
const API_ACCEPT_INVITE_MEMBER_GROUP = (id) =>
  API_HOST + "/group/members/accept-invited-group/" + id;
const API_REFUSE_INVITE_MEMBER_GROUP = (id) =>
  API_HOST + "/group/members/refuse-invited-group/" + id;

const API_LEAVE_GROUP = (id) =>
  API_HOST + "/group/members/leave-group/" + id;
const API_SET_ADMIN_MEMBER_GROUP = (id) =>
  API_HOST + "/group/members/set-admin-group/" + id;



// api bài viết nhóm
const API_GROUP_POST_CREATE = (post_id) => API_HOST + "/group/posts/create/" + post_id;
const API_LIST_GROUP_ACCEPTED_POST = (group_id) => API_HOST + "/group/posts/list-post-accepted/" + group_id;
const API_LIST_GROUP_UNAPPROVED_POST = (group_id) => API_HOST + "/group/posts/list-post-unapproved/" + group_id;
const API_ACCEPT_GROUP_POST = (group_post_id) => API_HOST + "/group/posts/accept-post/" + group_post_id;
const API_REFUSE_GROUP_POST = (group_post_id) => API_HOST + "/group/posts/refuse-post/" + group_post_id;
const API_LIST_POST_GROUP_JOINED =  API_HOST + "/group/posts/list-post-all-group";
const API_LIST_SUGGESST_GROUP =  API_HOST + "/group/members/list-suggest-group";

export {
    API_SIGNUP_POST,
    API_LOGIN_POST,
    API_LOGOUT,
    API_GET_ALL_USERS,
    API_GET_USER_BY_ID,
    API_GET_INFO_USER_PROFILE_BY_ID,
    API_GET_INFO_OWNER_PROFILE_BY_ID,
    API_UPDATE_USER,
    API_UPDATE_USER_PASSWORD,
    API_DELETE_USER,
    // setting user
    API_UPDATE_SETTING_USER,
    API_GET_USER_SETTING,
    API_GET_ALL_MEDIA,

    
    API_CHECK_EXIST_USER,
    API_ADD_FRIEND,
    API_ACCEPT_INVITE,
    API_SIGNUP_SOCIALNETWORK_POST,
    API_DECODE_TOKEN,
    API_ROTATION_TOKEN,
    API_CREATE_OTP,
    API_CREATE_LINK_OTP,
    API_CREATE_OTP_SIGNUP,
    API_VERIFY_OTP,
    API_LIST_FRIEND_INVITE,
    API_CHECK_FRIEND_REQUEST,
    API_CANCEL_FRIEND_REQUEST,
    API_GET_MESSAGES,
    API_CHECK_EXIST_KEY_PAIR,
    API_POST_KEY_PAIR,
    API_POST_DECODE_PRIVATE_KEY_PAIR,
    API_DECODE_MESSAGE,
    //api face
    API_CREATE_FACE_RECOGNITION_BY_ID,
    API_GET_FACE_RECOGNITION_BY_ID,
    API_DELETE_FACE_RECOGNITION_BY_ID,
    API_LOGIN_FACE_RECOGNITION,
    API_ALL_FACE_RECOGNITION,
    // api friend
    API_LIST_FRIEND,
    API_LIST_FRIEND_BY_ID,
    API_LIST_FRIEND_SUGGEST,
    API_LIST_INVITED_FRIEND,
    API_CHECK_IF_FRIEND,
    // api messages
    API_GET_CONVERSATIONS,
    API_SEND_MESSAGE,
    API_UPDATE_IS_READ,
    API_DELETE_KEY_PAIR,
    API_CHECK_KEY_FRIEND,
    API_DELETE_MESSAGE_OWNER_SIDE,
    API_DELETE_MESSAGE,
    API_DELETE_ALL_MESSAGE,
    // api post
    API_CREATE_POST,
    API_DELETE_POST,
    API_UPDATE_POST,
    API_POST_DETAIL,
    API_CREATE_SUB_COMMENT,
    API_GET_POSTS,
    API_GET_POSTS_BY_ID,
    API_CREATE_COMMENT_POST,
    API_LIST_COMMENT_POST,
    API_CREATE_REACT_POST,
    API_DELETE_REACT_POST,
    API_HEART_COMMENT_BY_COMMENT_ID,
    API_HEART_SUB_COMMENT_BY_COMMENT_ID,
    API_DELETE_COMMENT_POST_BY_COMMENT_ID,
    API_DELETE_SUB_COMMENT_POST_BY_SUB_COMMENT_ID,
    // api story
    API_CREATE_STORY,
    API_LIST_STORY,
    API_STORY_BY_ID,
    API_CREATE_HEART_STORY,
    API_DELETE_STORY_BY_ID,
    // api notice,
    API_LIST_NOTIFICATION,
    API_CREATE_NOTIFICATION,
    API_DELETE_NOTIFICATION_BY_ID,
    API_DELETE_ALL_NOTIFICATION,
    API_DELETE_ALL_NOTICE_CURRRENT,
    //api group
    API_GROUP_CREATE,
    API_LIST_GROUP_BY_USERID,
    API_GROUP_DETAIL,
    API_UPDATE_GROUP,
    API_DELETE_GROUP,
    API_LIST_GROUP_BY_OWNER,
    API_LIST_MEMBERS_GROUP,
    API_LIST_MEMBERS_OFFICAL_GROUP,
    API_LIST_MEMBERS_UNAPPROVED_GROUP,
    API_CHECK_ROLE_MEMBER_GROUP,
    API_INVITE_MEMBER_GROUP,
    API_ACCEPT_INVITE_MEMBER_GROUP,
    API_REFUSE_INVITE_MEMBER_GROUP,
    API_SET_ADMIN_MEMBER_GROUP,
    API_LEAVE_GROUP,

    API_GROUP_POST_CREATE,
    API_LIST_GROUP_ACCEPTED_POST,
    API_LIST_GROUP_UNAPPROVED_POST,
    API_REFUSE_GROUP_POST,
    API_ACCEPT_GROUP_POST,
    API_LIST_POST_GROUP_JOINED,
    API_LIST_SUGGESST_GROUP,
    API_ALL_FACE_RECOGNITION_BY_ID
};
