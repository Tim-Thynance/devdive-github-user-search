import { useContext, useState } from "react";
import "./SearchBar.css";
import  GithubDataFetch  from "../lib/GitSearch"; // Function to fetch data

interface SearchBarProps{
    handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
    setUsername: (e: string) => void;
    username: string;
    error: string;
    loading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch, setUsername, username, loading }) => {

    return (
        <>
        <div className="section">
            <div className="search-container">
                <form onSubmit={handleSearch}>
                    <i className="fa fa-search"></i>
                    <input
                        className="search-bar"
                        value={username}
                        type="text"
                        placeholder="Search Github Username..."
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button disabled={loading} type="submit" className="btn-search">
                        {loading ? "Searching..." : "Search"}
                    </button>
                </form>
            </div>

        </div>
        </>
    );
}

export default SearchBar;
