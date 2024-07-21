"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  author: string;
  publishedAt: string;
}

const NewsPage = () => {
  const [news, setnews] = useState([]);
  const [loading, setloading] = useState(true);
  const apikey = "3374ce70450a424790d0e34abc78d453";

  useEffect(() => { 
    console.log(apikey);
    const query = `https://newsapi.org/v2/everything?q=agriculture&sortBy=relevancy&searchIn=title&language=en&pageSize=30&apiKey=3374ce70450a424790d0e34abc78d453`;

    fetch(query)
      .then((response) => response.json())
      .then((data) => {
        setnews(data.articles || []);
        console.log(data.articles);
        console.log("news fetched successfully");
        
        setloading(false);
      })
      .catch((error) => {
        console.error("error fetching news articles", error);
        setloading(false);
      });
  }, []);

  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6  flex-grow lg:px-8 lg:py-14 mx-auto">
        <Head>
          <title>News Page</title>
          <meta
            name="description"
            content="Latest news related to agriculture"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-black">
            Latest News on Agriculture
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Discover the latest developments and stories in agriculture.
          </p>
        </div>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article: any, index: any) => (
              <a
                key={index}
                className=" flex flex-col  border-blue-400 border-2  hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5   hover:shadow-black/40"
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="aspect-w-16 aspect-h-11">
                  <img
                    className="w-auto object-cover rounded-xl"
                    src={article.urlToImage}
                    alt={article.title}
                  />
                </div>
                <div className="my-6">
                  <h3 className="text-xl font-semibold text-black group-hover:text-blue-600">
                    {article.title}
                  </h3>
                  <p className="mt-5 text-gray-600 ">
                    {article.description
                      ? article.description.substring(0, 100)
                      : "No description available"}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-x-3">
                  <div>
                    <p className="text-xs text-gray-700 dark:text-neutral-400">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NewsPage;
