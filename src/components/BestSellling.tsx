'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BestSellingSection() {

    return (
        <section className="py-20">
            {/* Trigger element */}
            <div className="h-1" />

            {/* Animated heading */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
                className='text-center'
            >
                <h2 className="font-serif text-3xl md:text-5xl leading-tight text-balance text-primary mb-3">
                    Our Best Selling Products
                </h2>
            </motion.div>

            <div className="flex justify-center items-center py-10 px-6 md:px-12 lg:px-24">
                <Image
                    className="rounded-lg shadow-lg"
                    src="/images/product1.png"
                    alt="Best selling products"
                    width={300}
                    height={300}
                />
            </div>
        </section>
    );
}