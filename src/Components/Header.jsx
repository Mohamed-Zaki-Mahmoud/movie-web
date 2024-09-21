import '../Header.css'
export default function Header(){
    return (
        <header className="header">
        <div className="logo">
          <h1>MovieHub</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/movies">Movies</a></li>
            <li><a href="/tv-shows">TV Shows</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search for movies..." />
          <button type="submit">Search</button>
        </div>
      </header>

    );
}