import { TokenCyber } from "./tokenCyber";

export const getBigDataApi= async (url,keyword) => {
    const res = await fetch(`${url}/${keyword}`,{
        headers:{
            tokenCybersoft:TokenCyber,
        },
        next:{revalidate:10}
    });
    const data = await res.json();
    console.log(data)
    return data;
}