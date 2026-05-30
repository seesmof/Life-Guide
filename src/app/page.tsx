import Text from "@/components/Text";

const Page = () => {
  return (
    <div className="min-h-screen bg-linear-to-br to-sky-50">
      <div className="container mx-auto max-w-3xl p-3 flex flex-col gap-3">
        <h1 className="mt-5 lg:mt-12 md:text-lg lg:text-xl xl:text-3xl font-bold">
          <em>#</em> How to live this life?
        </h1>
        <Text />
      </div>
    </div>
  );
};

export default Page;
