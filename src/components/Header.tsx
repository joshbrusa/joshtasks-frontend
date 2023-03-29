import githubLogo from "../assets/githubLogo.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-2xl">Josh Tasks</h1>
      <a
        href="https://github.com/stars/joshbrusa/lists/joshtasks"
        target="_blank"
      >
        <img className="h-8 w-8" src={githubLogo} />
      </a>
    </header>
  );
}
