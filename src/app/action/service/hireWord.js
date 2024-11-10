import { TokenCyber } from "./tokenCyber"

export const hireWord = async (token, idJob, idUser,date) => {
    const res = await fetch("https://fiverrnew.cybersoft.edu.vn/api/thue-cong-viec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            token: token,
            tokenCybersoft: TokenCyber
        },
        body: JSON.stringify({
            "maCongViec": idJob,
            "maNguoiThue": idUser,
            "ngayThue": date 
        }),
        next: { revalidate: 10 }
    })
    const data = await res.json()
    return data
}