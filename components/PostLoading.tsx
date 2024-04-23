export default function PostLoading() {
  const renderArray = new Array(5).fill(null);

  return (
    <div className="my-10 space-y-10 w-full max-w-[40rem] px-2 md:px-0">
      {renderArray.map((_, index) => (
        <div key={index} className="rounded-md  gap-y-2 max-w-[40rem] w-full ">
          <div className="animate-pulse flex flexr-row space-x-4">
            <div className="rounded-sm bg-gray-100 h-16 w-10"></div>
            <div className="flex-1 space-y-2 py-1">
              <div className="h-3 bg-gray-100 rounded w-28"></div>
              <div className="h-6 bg-gray-100 rounded w-80"></div>
              <div className="space-y-2">
                <div className="flex  gap-2 h-4">
                  <div className="bg-gray-100 rounded w-28"></div>
                  <div className="bg-gray-100 rounded w-4"></div>
                  <div className="bg-gray-100 rounded w-28"></div>
                  <div className="bg-gray-100 rounded w-16"></div>
                  <div className="bg-gray-100 rounded w-10 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
