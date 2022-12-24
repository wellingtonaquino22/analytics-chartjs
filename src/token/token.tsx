export const getToken = (token:string)=>{

    if (typeof window !== 'undefined') {
        let token = localStorage.getItem('cmd-token')
        return token
    }
}

