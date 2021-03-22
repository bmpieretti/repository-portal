import * as RepoService from '../services/repo';
import { fetchRepos as fetchRepoActions } from '../store/repos';

export const fetchRepos = () => async (dispatch) => {
  dispatch(fetchRepoActions({ state: 'loading' }));
  try {
    const data = await RepoService.fetchRepos();
    dispatch(fetchRepoActions({ state: 'done', data }));
  } catch (error) {
    dispatch(fetchRepoActions({ state: 'error', error }));
  }
};
