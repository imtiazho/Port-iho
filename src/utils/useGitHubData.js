import { useState, useEffect } from "react";

const GITHUB_USERNAME = "imtiazho";

export function useGitHubData(username = GITHUB_USERNAME) {
  const [data, setData] = useState({
    publicRepos: 106,
    totalContributions: 719,
    loading: false,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    // Safety fallback timer: Ensure loading is never blocked for more than 1 second
    const timer = setTimeout(() => {
      if (isMounted) {
        setData((prev) => ({ ...prev, loading: false }));
      }
    }, 1000);

    async function fetchLiveGitHubUser() {
      try {
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        const headers = {};
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        const userRes = await fetch(`https://api.github.com/users/${username}`, {
          headers,
        });

        // Graceful handling for 403 (Rate limit exceeded) or other non-OK status codes
        if (userRes.status === 403 || !userRes.ok) {
          console.warn(
            `GitHub API status ${userRes.status} received. Fallback values (106 repos, 719 contributions) applied.`
          );
          if (isMounted) {
            setData({
              publicRepos: 106,
              totalContributions: 719,
              loading: false,
              error: `GitHub API status ${userRes.status}`,
            });
          }
          return;
        }

        const userData = await userRes.json();
        if (isMounted) {
          setData({
            publicRepos: userData.public_repos ?? 106,
            totalContributions: 719,
            loading: false,
            error: null,
          });
        }
      } catch (err) {
        console.warn("Network or rate-limit error when fetching GitHub stats:", err);
        if (isMounted) {
          setData({
            publicRepos: 106,
            totalContributions: 719,
            loading: false,
            error: err.message,
          });
        }
      }
    }

    fetchLiveGitHubUser();

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [username]);

  return data;
}
