export const BACK_END_URL={
  SERVER_URL:'https://screamer-resume-back.herokuapp.com',
  SERVER_API_VERSION:1,
  API_PREFIX:'/api/v',
  ENDPOINTS:{
    JAVA_CV_PDF_FILE:'/resource/CV/Java',
    MESSAGE:'/message',
    USER_RESUME:'/user/resume',
    RESUME:'/resume',
    PUBLIC_MESSAGE:'/message/public'
  }
}
export const API_URL = BACK_END_URL.SERVER_URL.concat(BACK_END_URL.API_PREFIX).concat(String(BACK_END_URL.SERVER_API_VERSION));
export const MY_CURRENT_RESUME_ID = "fc39a3ca-71b4-4722-8639-09fa1919953a";
