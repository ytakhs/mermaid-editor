import  Head  from "next/head";

const title = "Mermaid Editor";

export function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="mermaid editor" />
      </Head>

      <header>
        <h1>{title}</h1>
      </header>

      <main>
        { children }
      </main>

      <footer></footer>
    </div>
  );
}
