import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export default async function ShowPopupLoginWithGoogle() {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    const auth = getAuth();
    auth.useDeviceLanguage();

    provider.setCustomParameters({
        'login_hint': 'user@example.com'
    });

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("user:", user);
        return {
            user_id: user.providerData[0].uid,
            user_name: user.providerData[0].displayName,
            user_email: user.providerData[0].email,
            created_at: user.metadata.createdAt,
            user_password: user.providerData[0].email,
            media: {
                media_type: 'avatar',
                media_link: user.providerData[0].photoURL
            },
            type_account: 'google'
        };
    } catch (error) {
        console.error('Error Code:', error.code);
        console.error('Error Message:', error.message);
        const email = error.customData?.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error('Error Email:', email);
        console.error('Credential used:', credential);

    }
}
