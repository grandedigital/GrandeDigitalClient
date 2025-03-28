export default function Section2({ data }: { data?: any }) {
  return (
    <section className="pl-[8%] pr-[8%] py-0 max-2xl:pl-[4%] max-2xl:pr-[4%] max-xxl:pl-[2%] max-xxl:pr-[2%] max-md:px-[0]">
      <div className="px-[15px] w-full mx-auto">
        <div className="row">
          <div className="px-[15px] flex-[0_0_auto] w-full max-w-full">
            <img
              className="w-full rounded-[8px] max-w-full h-auto"
              src={`/images/${data?.detailPhoto1}`}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
