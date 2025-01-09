"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
}

interface ProductDetailProps {
    params: {
        id: string;
    }
}

const ProductDetail = ({params} : ProductDetailProps) => {
   const [product, setProduct] = useState<Product | null>(null);
   const { id } = params;

    useEffect (() => {
        
        if( id ){
            const fetchProduct = async () => {
                try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if(!response.ok){
                    throw new Error("Something went wrong");
                }
                const data = await response.json();
                setProduct(data);
            } catch(error) {
                console.error("Error fetching data:" , error);
            }
        };

        fetchProduct();
        }
    }, [id]);

    if(!product){
        return <div className="font-bold">Loading...</div>
    }

return (
    <div className="mt-10 mb-10 md:mb-6 lg:mb-6 h-auto">
        <h1 className="text-3xl font-bold text-center pb-5">Product Detail Page</h1>
        <div className="flex flex-col justify-center align items-center">
        <div className="p-2">
        <Image src={product.image} alt={product.title} width={300} height={400} />
        </div>
        <div className="text-center">
        <h1 className="text-[24px] text-blue-900 font-bold px-2 mt-14">{product.title}</h1>
        <p className="text-[20px] text-red-700 p-5">{product.description}</p>
        </div>
        
        </div>
        <div className="text-center">
        <Link href="/Client-Side">
        <button className='bg-black hover:bg-white text-white text-center hover:text-black hover:font-bold p-2 rounded-md mt-3 mb-1'>Go To Products</button>
        </Link>
        </div>
    </div>
)
}
export default ProductDetail;
