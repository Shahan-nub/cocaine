"use client"
export default function TitleGray({title}) {
  return (
    <h1 className="my-2 lg:my-2 bg-gradient-to-r from-slate-300 via-white to-slate-300 inline-block text-transparent bg-clip-text font-bold lg:text-5xl text-xl lg:mx-10 mx-4 font-sans py-2 lg:py-4">
      {title}
    </h1>
  );
}
