
import { axiosWithAuth } from '../../../auth/axiosWithAuth';


export const addNoteGroupBackend = async (noteGroup) => {
    const user_id = localStorage.getItem("user_id")
    let data;
    await axiosWithAuth().post(`/${user_id}/notes`, noteGroup)
       .then(res => {
           data = res.data;
       })
       .catch(err => {
           console.log(err)
       })
    return data;
}