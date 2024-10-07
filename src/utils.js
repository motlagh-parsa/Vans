import {redirect} from "react-router-dom";

export async function RequireAuth({pathName}) {
    const isLoggedIn = (localStorage.getItem('token'));
    if (!isLoggedIn) {
        throw redirect(`/login?message=You must log in first&pathName=${pathName}`);
    }
}