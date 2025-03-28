export default function Section4({ data }: { data?: any }) {
  return (
    <section className="px-[8%] py-0 max-2xl:px-[4%] max-xxl:px-[2%] max-md:px-0">
      <div className="px-[15px] w-full mx-auto">
        <div className="row">
          <div className="px-[15px] flex-[0_0_auto] w-full max-w-full">
            <img
              className="w-full rounded-[8px] max-w-full h-auto"
              src={`/images/${data?.detailPhoto2}`}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
