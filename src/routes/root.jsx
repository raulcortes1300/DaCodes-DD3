export default function RootComponent() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Hello, Tailwind CSS!</h1>
        <p className="mt-2">
          This is a simple React component using Tailwind CSS.
        </p>
        <button className="border border-green-500 text-white px-4 py-2 mt-4 hover:bg-green-600">
          Click me
        </button>
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      {/* <div className="flex flex-row content-between justify-between">
        <div>Hi there</div>
        <div>Hi there</div>
      </div> */}
      <div id="detail"></div>
    </>
  );
}
