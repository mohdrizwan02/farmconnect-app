export default function Newssection() {
    return (
      <>
        <span className="flex items-center mt-10">
          <span className="h-px flex-1 bg-black"></span>
          <span className="shrink-0 px-6">News Updates</span>
          <span className="h-px flex-1 bg-black"></span>
        </span>
        <section className="overflow-hidden px-10 mb-10 bg-white sm:grid sm:grid-cols-2 sm:items-center">
          <div className="p-8 md:p-12 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-xl text-center md:text-left ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                News Updates
              </h2>
  
              <p className="hidden text-gray-500 md:mt-4 md:block">
                LOADING....
              </p>
  
              <div className="mt-4 md:mt-8">
                <a
                  href="../../farmer/news"
                  className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Explore News
                </a>
              </div>
            </div>
          </div>
  
          <img
            alt=""
            src="/newsbanner.jpg"
            className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
          />
        </section>
      </>
    );
  }
  