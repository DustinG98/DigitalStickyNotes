
import { axiosWithAuth } from '../../../auth/axiosWithAuth';

export const addNoteGroup = async (noteGroup) => {
    const user_id = localStorage.getItem("user_id")
    await axiosWithAuth().post(`/${user_id}/notes`, noteGroup)
       .then(res => {
           console.log(res)
       })
       .catch(err => {
           console.log(err)
       })
}