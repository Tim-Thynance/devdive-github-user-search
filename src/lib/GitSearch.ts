export const GithubDataFetch = async(username:string)=>{
    console.log({username});
    
    if(!username.trim()) throw new Error('username is required');
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error('User not found')
        const user = await response.json(); 
        console.log({key:user});
    return user;
}