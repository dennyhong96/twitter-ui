import TwitterLogo from "../components/icons/TwitterLogo";
import HomeIcon from "../components/icons/Nav/HomeIcon";

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen grid grid-cols-3">
      <nav>
        <div>
          <TwitterLogo className="fill-current w-8" />
        </div>
        <ul>
          <li>
            <span>
              <HomeIcon className="fill-current w-6" />
            </span>
            <span>Home</span>
          </li>
        </ul>
      </nav>
      <main>Tweets</main>
      <aside>Links</aside>
    </div>
  );
}
