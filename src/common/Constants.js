import {Platform} from 'react-native';


const ENVIRONMENT =  'development'; //config will be set in the build process

const DEBUG = ENVIRONMENT === 'development'; 

const OS_Type = Platform.OS;

const ANDROID_APP_ID = ' Write you package name here'; // package name

const ANDROID_RATE_URL = `https://play.google.com/store/apps/details?id=${ANDROID_APP_ID}`;

const ANDROID_MORE_APPS_URL = 'market://search?q=pub:NAME HERE';

const SHARE_MESSAGE = 'this is a share message';
  
const logErrors = 'true'; // Log errors in crashlytics

const REFRESH_QUERY_PARAM = '?refresh=true';

export default {
    DEBUG,
    OS_Type,
    ANDROID_APP_ID,
    ANDROID_RATE_URL,
    ANDROID_MORE_APPS_URL,
    SHARE_MESSAGE,
    logErrors,
    REFRESH_QUERY_PARAM
};
