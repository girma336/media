 import {  useEffect } from "react";
 import { useSelector } from "react-redux";
 import  fetchUsers from "../store/thunks/fetchUsers";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { addUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";


const UsersList = () => {
    const [doFetchUser, isLoadingUser, loadingUserError] = useThunk(fetchUsers)
    const [doAddUser, addIsLoadingUser, addLoadingError] = useThunk(addUser)
    const { data } =  useSelector(state => state.users)
  console.log(data)
    useEffect(() => {
        doFetchUser()
    }, [doFetchUser]);

   const handleUserAdd = () => {
      doAddUser()
   }

   let content;
   if (isLoadingUser) {
      content = <Skeleton times={6} className="h-10 w-full" />
   }else if(loadingUserError) {
      content = <div>Error fetching data ....</div>
   }else {   
      content = data.map((user) => {
      return (<UsersListItem key={user.id} user={user} />)
   })
}
    return (
      <div>
         <div className="flex flex-row justify-between m-3">
            <h1 className="m-2 text-xl">Users</h1>
            <Button loading={addIsLoadingUser} onClick={handleUserAdd}>
               + Add User
            </Button>
            {addLoadingError && 'Error creating user...'}
         </div>
         {content}
      </div>
    )
 }

 export default UsersList;