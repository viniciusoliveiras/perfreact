import Head from "next/head";
import { FormEvent, useCallback, useState } from "react";
import { SearchResults } from "../components/SearchResults";

export default function Home() {
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState([]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    setResponse(data);
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <>
      <Head>
        <title>Performando apps com ReactJS</title>
      </Head>

      <h1>Search</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">Buscar</button>
      </form>

      <SearchResults results={response} onAddToWishList={addToWishList} />
    </>
  );
}
