import FloatingButton from "@components/floating-button";
import Item from "@components/item";
import Layout from "@components/layout";
import { Item as PrItem } from "@prisma/client";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import useSWR from "swr";
import cats from "../public/local.png";

export interface ItemWithCount extends PrItem {
  _count: {
    favs: number;
  };
}

interface ProductResponse {
  ok: boolean;
  items: ItemWithCount[];
}

const Home: NextPage = () => {
  const { data } = useSWR<ProductResponse>("api/items");
  return (
    <Layout seoTitle="Enter Page" title="Home" hasTabBar>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col space-y-5 divide-y">
        {data?.items?.map((item) => (
          <Item
            id={item.id}
            key={item.id}
            title={item.name}
            price={item.price}
            comments={1}
            hearts={item._count.favs}
          />
        ))}
        <FloatingButton href="/items/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
      <Image src={cats} placeholder="blur" quality={5} />
    </Layout>
  );
};

export default Home;
