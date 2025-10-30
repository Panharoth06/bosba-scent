import { products } from '@/data/perfume'
import ProductCard from './ProductCard'

const DisplayProducts = () => {
  return (
        <section>
          {/* Header */}
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-5xl leading-tight text-balance text-primary mb-3">
              Our Products
            </h2>
            <p className="text-muted-foreground text-pretty">
              Get the scent you want to feel
            </p>
          </div>
          <section
            id="collection"
            className="py-10 px-6 md:px-12 lg:px-24 bg-[#FAFAF8] flex flex-wrap justify-center gap-10"
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        </section>
  )
}

export default DisplayProducts
