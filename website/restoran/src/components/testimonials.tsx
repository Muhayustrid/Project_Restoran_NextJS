'use client';

import { useEffect, useState } from 'react';
import Swiper from 'swiper';

// Import Swiper modules
import { Autoplay, Pagination } from 'swiper/modules';

// Import CSS
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import { fetchTestimonials, Testimonial } from '@/lib/api';

// Daftarkan modul


export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  Swiper.use([Autoplay, Pagination]);
  useEffect(() => {
    async function loadTestimonials() {
      const data = await fetchTestimonials();
      setTestimonials(data);
    }
    loadTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;

    // Inisialisasi Swiper di class .swiper
    const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: { delay: 3000 },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });

    return () => swiper.destroy(true, true);
  }, [testimonials]);

  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title">
        <h2>TESTIMONIALS</h2>
        <p>
          What Are They <span className="description-title">Saying About Us</span>
        </p>
      </div>

      <div className="container">
        <div className="swiper">
          <div className="swiper-wrapper">
            {testimonials.map((t) => (
              <div key={t.id} className="swiper-slide">
                <div className="testimonial-item">
                  <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6">
                      <div className="testimonial-content">
                        <p>
                          <i className="bi bi-quote quote-icon-left" />
                          <span>{t.comment}</span>
                          <i className="bi bi-quote quote-icon-right" />
                        </p>
                        <h3>{t.name}</h3>
                        <h4>{t.role}</h4>
                        <div className="stars">
                          {Array.from({ length: t.rating }, (_, i) => (
                            <i key={i} className="bi bi-star-fill" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 text-center">
                      <img
                        src={t.photo || 'assets/img/testimonials/default.jpg'}
                        className="img-fluid testimonial-img"
                        alt={t.name}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
  );
}
