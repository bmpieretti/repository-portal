const REPOS = {
  FETCH_REPOS: 'FETCH_REPOS'
};

export const fetchRepos = (data) => ({
  type: REPOS.FETCH_REPOS,
  payload: {
    ...data
  }
});

const initialState = {
  data: null,
  state: 'loading',
  error: null
};

export const getRepos = (store) => ({
  ...store.repoStore
});

export const getRepoById = (store) => (id) =>
  store.repoStore.find(({ id: repoId }) => id === repoId);

export default (state = initialState, action) => {
  switch (action.type) {
    case REPOS.FETCH_REPOS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
