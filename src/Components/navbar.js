export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Landguru
      </a>
      <ul>
        <li className="active">
        <a href="/">Home</a>
        </li>
        <li className="active">
        <a href="/">Advertise</a>
        </li>
        <li className="active">
        <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  )
}