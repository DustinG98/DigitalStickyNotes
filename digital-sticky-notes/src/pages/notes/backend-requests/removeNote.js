
import { axiosWithAuth } from '../../../auth/axiosWithAuth';

export const removeNoteBe = async (noteGroupId, noteId) => {
    const user_id = localStorage.getItem("user_id")
    await axiosWithAuth().delete(`/${user_id}/notes/${noteGroupId}/${noteId}`)
       .then(res => {
           console.log(res)
       })
       .catch(err => {
           console.log(err)
       })
}