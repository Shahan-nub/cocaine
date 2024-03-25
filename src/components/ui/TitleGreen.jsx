"use client"

export default function TitleGreen({title}) {
  return (
    <h1 className="my-1 bg-gradient-to-r from-color-1 via-green-300 to-color-1 inline-block text-transparent bg-clip-text font-bold lg:text-4xl text-lg lg:mx-10 mx-4 font-sans py-2 lg:py-4">
          {title}
    </h1>
  )
}
