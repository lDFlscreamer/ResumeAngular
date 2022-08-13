export const BACK_END_URL={
  SERVER_URL:'https://screamer-resume-back.herokuapp.com',
  SERVER_API_VERSION:1,
  API_PREFIX:'/api/v',
  ENDPOINTS:{
    JAVA_CV_PDF_FILE:'/resource/CV/Java',
    MESSAGE:'/message'
  }
}
export const API_URL = BACK_END_URL.SERVER_URL.concat(BACK_END_URL.API_PREFIX).concat(String(BACK_END_URL.SERVER_API_VERSION));
