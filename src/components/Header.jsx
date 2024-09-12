export function Header() {
  return (
    <header className="text-center text-white bg-dark">
      <h1 className="pt-2">
        Markdown Previewer <i className="bi bi-markdown-fill"></i>
      </h1>
      <p className="d-flex justify-content-center align-items-center gap-2 pb-2">
        <spa className="align-bottom">
          Code by
          <a
            className="ms-1 link-offset-2 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
            href="https://www.linkedin.com/in/isaacmendozadev/"
          >
            IsaacMendozaDev
          </a>
        </spa>
        <span>
          <a
            className="text-white "
            href="https://github.com/IsaacMendozaDev/react-markdown-previewer"
          >
            <i className="bi bi-github ms-2 fs-4"></i>
          </a>
        </span>
      </p>
    </header>
  );
}
