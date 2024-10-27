import { TokenCyber } from "./tokenCyber";

export const getAllUserApi = async () => {
    try {
        const res = await fetch('https://fiverrnew.cybersoft.edu.vn/api/users', {
            headers: {
                tokenCybersoft: TokenCyber,
            },
            next: { revalidate: 30 }
        });
        const data = await res.json();
        console.log(data)
        return data.content;
    } catch (error) {
        alert("Don't get Data from Api")
    }
}

export const searchUserApi = async (keyword) => {
    try {
        const res = await fetch(`https://fiverrnew.cybersoft.edu.vn/api/users/search/${keyword}`, {
            headers: {
                tokenCybersoft: TokenCyber,
            },
            next: { revalidate: 30 }
        });
        const data = await res.json();
        console.log(data)
        return data.content;
    } catch (error) {
        alert("Don't get Data from Api")
    }
}

export const deleteUserApi = async (id) => {
    try {
        const res = await fetch(`https://fiverrnew.cybersoft.edu.vn/api/users?id=${id}`, {
            method: 'DELETE',
            headers: {
                tokenCybersoft: TokenCyber,
            },
            next: { revalidate: 30 }
        });
        const data = await res.json();
        return data.content;
    } catch (error) {
        alert("Delete User Api")
    }
}