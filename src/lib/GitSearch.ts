const GithubDataFetch = async (username: string) => {
  if (!username.trim()) throw new Error("username is required");
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) throw new Error("User not found");

  return await response.json();
};

export default GithubDataFetch;
