import Image from "next/image";

export function Loading ():JSX.Element {
  return (
    <Image 
      src="/loading.gif" 
      alt="Gif carregando"
      width={200}
      height={200}
    />
  )
}