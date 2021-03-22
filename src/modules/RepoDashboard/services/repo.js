const API_URL = import.meta.env.SNOWPACK_PUBLIC_API_URL;

// TODO: Do some validation on the response via data classes?
export const fetchRepos = async () => {
  const response = await fetch(`${API_URL}/api/repos`);
  if (response.status !== 200) throw new Error('Error fetching repo list');
  const data = await response.json();
  return data;
};
