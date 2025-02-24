import { useContext, useState } from "react";
import "./SearchBar.css";
import { GithubDataFetch } from "../lib/GitSearch";
import { UserDetailContext } from "../context/UserDetailContext";

function SearchBar() {
    // console.log({GithubDataFetch})
    const [username, setUsername] = useState<string>("");
    const [user, setUser] = useState<any | null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const { userDetail, setUserDetail } = useContext(UserDetailContext);
    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        console.log({ username });

        try {
            const user = await GithubDataFetch(username);
            setUserDetail(user);
            setLoading(false);
            setUsername("");
        } catch (err: any) {
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="section">
            <div className="search-container">
                <form action="" onSubmit={handleSearch}>
                    <i className="fa fa-search"></i>
                    <input
                        className="search-bar"
                        value={username}
                        type="text"
                        placeholder="Search Github Username..."
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button disabled={loading} type="submit" className="btn-search">
                        {" "}
                        {loading ? "Search..." : "Search"}
                    </button>
                </form>
            </div>
        </div>
    );
}
export default SearchBar;
