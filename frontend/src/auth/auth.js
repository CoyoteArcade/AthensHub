import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
  createUserWithEmailAndPassword
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        return error;
    }
};

const logout = async () => {
    try {
        await auth.signOut();
        localStorage.removeItem('athensHubUser');
    } catch (error) {
        return error;
    }
};

const register = async (email, password, username) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, { displayName: username });
        return user;
    } catch (error) {
        return error;
    }
};

export { login, register, logout };