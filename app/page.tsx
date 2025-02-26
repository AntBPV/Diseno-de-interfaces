import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen w-screen">
      <section
        className="flex flex-col flex-wrap bg-white rounded-lg w-1/2 p-4 pt-8 pb-8 gap-2 overflow-clip
       text-black"
      >
        <span className="flex flex-col">
          <h1 className="text-2xl font-bold">Appearance</h1>
          <h2 className="text-gray-600">
            Set or customize preferences for the system
          </h2>
        </span>

        <span className="w-full h-1 rounded-full bg-slate-200 mt-2 mb-2" />

        <span className="grid grid-cols-6">
          <span className="flex flex-col col-start-1 col-end-4">
            <h1 className="text-xl font-bold">Language</h1>
            <h2 className="text-gray-600">Change system language</h2>
          </span>
          <button
            type="button"
            className="flex col-start-5 col-end-7 px-4 py-2 font-bold border border-gray-300 bg-white items-center justify-center w-full rounded-md text-sm hover:bg-gray-200"
          >
            Language
          </button>
        </span>

        <span className="w-full h-1 rounded-full bg-slate-200 mt-2 mb-2" />

        <span className="flex flex-col">
          <h1 className="font-bold text-xl">Interface Items</h1>
          <h2 className="text-gray-600">
            Determine your application appearance
          </h2>
          <span className="grid grid-cols-3 gap-3 pr-4 pl-4">
            <button className="border rounded-lg p-2 flex flex-col items-center hover:border-blue-300">
              <Image src="/auto.png" alt="" width={50} height={50} />
              <span className="mt-1">Auto</span>
            </button>
            <button className="border rounded-lg p-2 flex flex-col items-center hover:border-blue-300">
              <Image src="/light.png" alt="" width={50} height={50} />
              <span className="mt-1">Light</span>
            </button>
            <button className="border rounded-lg p-2 flex flex-col items-center hover:border-blue-300">
              <Image src="/dark.png" alt="" width={50} height={50} />
              <span className="mt-1">Dark</span>
            </button>
          </span>
        </span>

        <span className="w-full h-1 rounded-full bg-slate-200 mt-2 mb-2" />

        <span className="grid grid-cols-6">
          <span className="flex flex-col col-start-1 col-end-4">
            <h1 className="text-xl font-bold">Accent Color</h1>
            <h2 className="text-gray-600">Put your favorite accent color</h2>
          </span>
          <span className="flex flex-row col-start-5 col-end-7 gap-3 justify-end mt-3">
            <button type="button" className="w-6 h-6 bg-red-500 rounded-full" />
            <button
              type="button"
              className="w-6 h-6 bg-yellow-500 rounded-full"
            />
            <button
              type="button"
              className="w-6 h-6 bg-green-500 rounded-full"
            />
            <button
              type="button"
              className="w-6 h-6 bg-blue-500 rounded-full"
            />
            <button
              type="button"
              className="w-6 h-6 bg-pink-500 rounded-full"
            />
          </span>
        </span>

        <span className="w-full h-1 rounded-full bg-slate-200 mt-2 mb-2" />

        <section className="flex flex-col">
          <span className="flex flex-row justify-between m-2">
            <h1 className="font-bold text-xl">Reduce motion</h1>
            <input
              type="checkbox"
              id="switch-1"
              className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
          </span>

          <span className="w-full h-1 rounded-full bg-slate-100 mt-2 mb-2" />

          <span className="flex flex-row justify-between m-2">
            <h1 className="font-bold text-xl">Auto-Play</h1>
            <input
              type="checkbox"
              id="switch-1"
              className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
          </span>

          <span className="w-full h-1 rounded-full bg-slate-100 mt-2 mb-2" />

          <span className="flex flex-row justify-between m-2">
            <h1 className="font-bold text-xl">High Quality Photo</h1>
            <input
              type="checkbox"
              id="switch-1"
              className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
          </span>
        </section>

        <span className="w-full h-1 rounded-full bg-slate-200 mt-2 mb-2" />

        <section className="grid grid-cols-6 ml-3 mr-3 justify-between gap-2">
          <button className="text-gray-400 font-bold col-start-1 col-end-2">
            Reset to default
          </button>
          <button className="text-gray-600 border rounded-lg border-gray-400 font-bold p-3 col-start-5 col-end-6">
            Cancel
          </button>
          <button className="text-white bg-blue-500 border rounded-lg border-gray-400 font-bold p-3 col-start-6 col-end-7">
            Apply
          </button>
        </section>
      </section>
    </main>
  );
}
