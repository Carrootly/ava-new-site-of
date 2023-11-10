import { GoogleOAuthProvider } from 'react-oauth/google';

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const redirectUri = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

const oauthProvider = new GoogleOAuthProvider({
  clientId: googleClientId,
  redirectUri: redirectUri,
  // Other OAuth parameters here
});

// Use oauthProvider to initiate the OAuth flow
