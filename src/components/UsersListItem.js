import React from 'react'
import { GoTrashcan } from 'react-icons/go';
import { useThunk } from '../hooks/use-thunk';
import { removeUser } from '../store';
import Button from './Button';
import ExpandablePanal from './ExpandablePanal';
import AlbumsList from './AlbumsList';

const UsersListItem = ({ user }) => {
    const [doRemoveUser, isLoading, isError] = useThunk(removeUser)

    const handleClick = () => {
        doRemoveUser(user)
    };

    const header = <>
            <Button className="mr-3" loading={isLoading} onClick={handleClick} >
                <GoTrashcan />
            </Button>
            {isError && <div>Error deleting user. </div>}
            {user.name}
        </>

    return (
        <ExpandablePanal header={header}>
            <AlbumsList user={user} />
        </ExpandablePanal>
  )
}

export default UsersListItem