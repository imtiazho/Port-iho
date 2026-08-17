import { useState, useEffect } from "react";

const GITHUB_USERNAME = "imtiazho";
const CACHE_KEY = `github_stats_cache_${GITHUB_USERNAME}_v5`;
const CACHE_TTL = 15 * 60 * 1000; // 15 minutes TTL

export function useGitHubData(username = GITHUB_USERNAME) {
  const [data, setData] = useState({
    publicRepos: 106,
    totalContributions: 712,
    loading: true,
    isLive: false,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchGitHubStats() {
      // 1. Check local cache
      try {
        const cachedRaw = localStorage.getItem(CACHE_KEY);
        if (cachedRaw) {
          const cached = JSON.parse(cachedRaw);
          const age = Date.now() - (cached.timestamp || 0);
          if (age < CACHE_TTL && cached.data) {
            if (isMounted) {
              setData({ ...cached.data, loading: false, isLive: true });
            }
            return;
          }
        }
      } catch (err) {
        console.warn("GitHub cache read error:", err);
      }

      // 2. Fetch live profile stats & contribution count from GitHub API
      try {
        const [userRes, contribRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`).catch(
            () => null
          ),
        ]);

        if (!userRes.ok) {
          throw new Error(`GitHub API error: ${userRes.status}`);
        }

        const userData = await userRes.json();
        const contribData = contribRes?.ok ? await contribRes.json() : null;

        const publicRepos = userData.public_repos ?? 106;
        let totalContributions = 712;

        if (contribData?.total) {
          totalContributions =
            contribData.total?.lastYear ??
            contribData.total?.[new Date().getFullYear()] ??
            712;
        }

        const liveData = {
          publicRepos,
          totalContributions,
          loading: false,
          isLive: true,
        };

        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ timestamp: Date.now(), data: liveData })
          );
        } catch (cErr) {
          console.warn("Failed to write to localStorage:", cErr);
        }

        if (isMounted) {
          setData(liveData);
        }
      } catch (err) {
        console.error("Error fetching live GitHub stats:", err);
        if (isMounted) {
          setData({
            publicRepos: 106,
            totalContributions: 712,
            loading: false,
            isLive: false,
          });
        }
      }
    }

    fetchGitHubStats();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return data;
}
