const API_KEY="dd";
const REDIRECT_URI= "http://localhost:3000/kakaologin";

export const KAKAO_AUTH_URL=`https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;