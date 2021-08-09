import Head from "next/head";
import { FormEvent, useCallback, useState } from "react";
import { SearchResults } from "../components/SearchResults";

type ResultsProps = {
  totalPrice: number;
  data: any[];
};

type ProductProps = {
  id: number;
  price: number;
  title: string;
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState<ResultsProps>({
    totalPrice: 0,
    data: [],
  });

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const products = data.map((product: ProductProps) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formatter.format(product.price),
      };
    });

    const totalPrice = data.reduce((total: number, product: ProductProps) => {
      return total + product.price;
    }, 0);

    setResponse({ totalPrice, data:products });
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

      <SearchResults
        results={response.data}
        totalPrice={response.totalPrice}
        onAddToWishList={addToWishList}
      />
    </>
  );
}
