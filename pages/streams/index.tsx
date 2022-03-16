import { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "../../components/floating-button";
import Layout from "../../components/layout";

const Stream: NextPage = () => {
  return (
    <Layout hasTabBar title="Stream">
      <div className="space-y-4 divide-y-[1px] py-10">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <Link key={i} href={`/streams/${i}`}>
            <a className="block px-4  pt-4">
              <div className="aspect-video w-full rounded-md bg-slate-300 shadow-sm" />
              <h1 className="mt-2 text-2xl font-bold text-gray-900">
                Let&apos;s try cucumbers!
              </h1>
            </a>
          </Link>
        ))}
        <FloatingButton href="/streams/create">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Stream;
