export const getUsersData = (state) => {
    return state.partnersPage.users
}
export const getPageSize = (state) => {
    return state.partnersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.partnersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.partnersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.partnersPage.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.partnersPage.followingInProgress
}

