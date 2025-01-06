import Image from "next/image";

const Service = async () => {
    const data = await fetch('https://dummyjson.com/products')
    const posts = await data.json()
  return (
    <>
      <div className="p-[15px] w-[400px] bg-red-400 rounded-lg">
            <>
            <Image
                src={posts.products[0].thumbnail}
                alt="Picture of the author"
                width={500} height={500}
              />
            
            </>

   
      </div>
    </>
  );
};

export default Service;
