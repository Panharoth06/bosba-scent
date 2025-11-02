import Image from "next/image"


const BestSellling = () => {
    return (
        <section>
            <h2 className="text-center font-serif text-3xl md:text-5xl leading-tight text-balance text-primary mb-3">
                Our Best Selling Products
            </h2>
            <div className="flex justify-center items-center">
                <Image
                    className="rounded-lg"
                    src={"/images/product1.png"}
                    alt="Best selling products images"
                    height={300}
                    width={300}
                />
            </div>
        </section>
    )
}

export default BestSellling