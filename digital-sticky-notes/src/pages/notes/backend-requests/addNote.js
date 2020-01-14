
import { axiosWithAuth } from '../../../auth/axiosWithAuth';

export const addNote = async (noteGroupId, note) => {
    const user_id = localStorage.getItem("user_id")
    await axiosWithAuth().post(`/${user_id}/notes/${noteGroupId}/`, note)
       .then(res => {
           console.log(res)
       })
       .catch(err => {
           console.log(err)
       })
}