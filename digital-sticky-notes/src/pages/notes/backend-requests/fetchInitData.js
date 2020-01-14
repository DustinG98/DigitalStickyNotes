
import { axiosWithAuth } from '../../../auth/axiosWithAuth';

export const fetchInitData = async () => {
    const user_id = localStorage.getItem("user_id")
    let data;
    await axiosWithAuth().get(`/${user_id}/notes`)
       .then(res => {
           data = res.data
       })
    return data;
}