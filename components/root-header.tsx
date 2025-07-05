export default function RootHeader() {
  return (
    <header className="m-4 flex flex-col items-center justify-start gap-4 sm:flex-row sm:justify-between">
      <h1 className="text-xl font-bold">charlotte zhuang</h1>

      <nav>
        <ul className="flex flex-wrap gap-2">
          <li>
            <a
              href="https://www.linkedin.com/in/charlotte-zhuang/"
              className="underline hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md p-2"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/charlotte-zhuang"
              className="underline hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md p-2"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/charlottechipcookie/"
              className="underline hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md p-2"
            >
              Instagram
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
