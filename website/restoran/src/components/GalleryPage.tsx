'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';               
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

// Fungsi fetchGallery dan tipe data GalleryItem 
import { fetchGallery, GalleryItem } from '@/lib/api';



export default function GallerySection() {
  // menyimpan data gallery
  Swiper.use([Autoplay, Pagination]);
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [swiperInstance, setSwiperInstance] = useState<Swiper | null>(null);

  // Fetch data gallery
  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchGallery();
        setItems(data);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    if (items.length === 0) return; 

    if (swiperInstance) {
      swiperInstance.destroy(true, true);
    }

    const newSwiper = new Swiper('.swiper-gallery', {
      loop: true,
      slidesPerView: 4,
      centeredSlides: true,
      autoplay: { delay: 3000 },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    setSwiperInstance(newSwiper);

    return () => {
      newSwiper.destroy(true, true);
    };
  }, [items]); 

  return (
    <section id="gallery" className="gallery section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Gallery</h2>
        <p>
          <span>Check</span>{' '}
          <span className="description-title">Our Gallery</span>
        </p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        {items.length >= 2 ? (
          <div className="swiper swiper-gallery">
            <div className="swiper-wrapper align-items-center">
              {/* Render slide berdasarkan data API */}
              {items.map((item) => (
                <div className="swiper-slide" key={item.id}>
                  <Link
                    className="glightbox"
                    data-gallery="images-gallery"
                    href={item.image || '#'}
                  >
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt={item.title || 'Gallery Image'}
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className="swiper-pagination" />
          </div>
        ) : (
          <p>Loading gallery...</p>
        )}
      </div>
    </section>
  );
}