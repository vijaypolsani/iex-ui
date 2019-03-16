export const GET_REPOS = 'market-watch/repos/LOAD'
export const GET_REPOS_SUCCESS = 'market-watch/repos/LOAD_SUCCESS'
export const GET_REPOS_FAIL = 'market-watch/repos/LOAD_FAIL'

export const GET_REPO_INFO = 'market-watch/repos/REPO_INFO'
export const GET_REPO_INFO_SUCCESS = 'market-watch/repos/REPO_INFO_SUCCESS'
export const GET_REPO_INFO_FAIL = 'market-watch/repos/REPO_INFO_FAIL'

export const GET_USER = 'market-watch/repos/USER'
export const GET_USER_SUCCESS = 'market-watch/repos/USER_SUCCESS'
export const GET_USER_FAIL = 'market-watch/repos/USER_FAIL'

const initalState = { repos: [], repoInfo: {}, user: {} }
export default function reducer (state = initalState, action) {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, loading: true }
    case GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data }
    case GET_REPOS_FAIL:
      return { ...state, loading: false, error: action.payload.error }
    case GET_REPO_INFO:
      return { ...state, loadingInfo: true }
    case GET_REPO_INFO_SUCCESS:
      return { ...state, loadingInfo: false, repoInfo: action.payload.data }
    case GET_REPO_INFO_FAIL:
      console.log(action.payload)
      return { ...state, loadingInfo: false, repoInfo: action.payload.error }
    case GET_USER:
      return { ...state, loadingProfile: true }
    case GET_USER_SUCCESS:
      return { ...state, loadingProfile: false, user: action.payload.data }
    case GET_USER_FAIL:
      console.log(action.payload)
      return { ...state, loadingProfile: false, user: action.payload.error }
    default:
      return state
  }
}

export function listRepos (user) {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `/users/${user}/repos`
      }
    }
  }
}
export function listRepoDetail (user, repo) {
  return {
    type: GET_REPO_INFO,
    payload: {
      request: {
        url: `/users/${user}/${repo}`
      }
    }
  }
}
export function getUser (user) {
  return {
    type: GET_USER,
    payload: {
      request: {
        url: `/users/${user}`
      }
    }
  }
}
