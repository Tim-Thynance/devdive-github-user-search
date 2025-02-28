import { useState } from "react";
import "./index.css";
import "./App.css";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import HeroSection from "./components/HeroSection";
import GithubDataFetch from "./lib/GitSearch";

interface UserData {
  avatar_url: string;
  login: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

function App() {
  const [user, setUser] = useState<UserData | null>(null);
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors

    try {
      const data: UserData | null = await GithubDataFetch(username);
      if (data) {
        setUser(data);
      } else {
        setError("User not found!");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Nav />
      <SearchBar 
        handleSearch={handleSearch}
        setUsername={setUsername}
        username={username}
        error={error}
        loading={loading}
      />
      {user && <HeroSection user={user} />}
    </div>
  );
}

export default App;
