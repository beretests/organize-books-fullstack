import Link from "next/link";
import Books from "./components/Books";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Books />
      <button className="btn btn-primary">Button</button>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
