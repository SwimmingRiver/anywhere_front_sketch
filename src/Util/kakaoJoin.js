const API_KEY="b6b35fafd89b994c6bf5b2b7b10ef417";
const REDIRECT_URI= "http://localhost:3000/kakaologin";

export const KAKAO_AUTH_URL=`https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;