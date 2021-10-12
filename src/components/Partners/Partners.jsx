import React from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User'


let Partners = (props) => {

    return <div>

        <div>
            <Paginator
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize} />
        </div>

        <div>
            <User
                users={props.users}
                follow={props.follow}
                unFollow={props.unFollow}
                followingInProgress={props.followingInProgress} />
        </div>
    </div>
}

export default Partners