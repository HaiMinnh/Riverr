import { TokenCyber } from "./tokenCyber";

export const getAllJobApi = async () => {
    const res = await fetch('https://fiverrnew.cybersoft.edu.vn/api/cong-viec',{
        headers:{
            tokenCybersoft:TokenCyber,
        },
        next:{revalidate:10}
    });
    const data = await res.json();
    console.log(data)
    return data.content;
}

export const searchJobAction = async (keyword) => {
    const res = await fetch(`https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${keyword}`,{
        headers:{
            tokenCybersoft:TokenCyber,
        },
        next:{revalidate:10}
    });
    const data = await res.json();
    console.log(data);
    return data.content;
}

export const getJobMenu = async () => {
    const res = await fetch('https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-menu-loai-cong-viec',{
        headers:{
            tokenCybersoft:TokenCyber,
        },
        next:{revalidate:10}
    });
    const data = await res.json();
    console.log(data)
    return data.content;
}

export const getDetailJob = async (codeId) => {
    const res = await fetch(`https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-chi-tiet-loai-cong-viec/${codeId}`,{
        headers:{
            tokenCybersoft:TokenCyber,
        },
        next:{revalidate:10}
    });
    const data = await res.json();
    console.log(data)
    return data.content;
}

export const getJobDetailType = async (id) => {
    const res = await fetch(`https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`,{
        headers:{
            tokenCybersoft:TokenCyber,
        },
        next:{revalidate:10}
    });
    const data = await res.json();
    console.log(data)
    return data;
}

export const onlyGetDetailJob= async (id) => {
    const res = await fetch(`https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-cong-viec-chi-tiet/${id}`,{
        headers:{
            tokenCybersoft:TokenCyber,
        },
        next:{revalidate:10}
    });
    const data = await res.json();
    console.log(data)
    return data;
}