const API_URL = import.meta.env.SNOWPACK_PUBLIC_API_URL;

const repoMapper = (data) => {
  if (!Array.isArray(data)) throw new Error();

  return data.map((item) => ({
    id: item.Id,
    cloneCount: item.Clone_count,
    commitCount: item.Commit_count,
    contributionCount: item.Contribution_count,
    lastActivity: item.Last_activity,
    name: item.Name,
    riskScore: item.Risk_score,
    size: item.Size,
    type: item.Type,
    url: item.Url
  }));
};

export const fetchRepos = async () => {
  try {
    const response = await fetch(`${API_URL}/api/repos`);
    if (response.status !== 200) throw new Error();
    const data = await response.json();
    return repoMapper(data);
  } catch {
    throw new Error('Error fetching repo list');
  }
};
