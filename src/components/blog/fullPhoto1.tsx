export default function FullPhoto1({ img }: { img: string }) {
  return (
    <section className="px-[13%] py-0 max-lgx:px-[4%] max-md:px-0">
      <div className="px-[15px] w-full mx-auto">
        <div className="row justify-center">
          <div className="px-[15px] flex-[0_0_auto] w-full max-w-full">
            <img
              src={`/images/${img}`}
              alt=""
              className="w-full max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
