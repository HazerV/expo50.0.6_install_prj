import axios from "../axios";

export async function signUp ({name, lastname, middlename, phone, email, password, favorites_id}) {
    return await axios.post ('auth/signup', {
        name,
        lastname,
        middlename,
        phone,
        email,
        password,
        favorites_id
    })
}
