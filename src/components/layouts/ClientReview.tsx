'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft, FaRegStar, FaStar } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const fakeReviews = [
  {
    text: 'Amazing service! Highly recommend.',
    author: 'John Doe',
    position: 'CEO, Company',
    rating: 5,
    image:
      'https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg',
  },
  {
    text: 'Amazing service! Highly recommend.',
    author: 'John Doe',
    position: 'CEO, Company',
    rating: 5,
    image:
      'https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg',
  },
  {
    text: 'Professional team and quick support.',
    author: 'Sarah Smith',
    position: 'Marketing Manager',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    text: 'Great experience working with them!',
    author: 'Michael Brown',
    position: 'Product Owner',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    text: 'Great experience working with them!',
    author: 'Michael Brown',
    position: 'Product Owner',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    text: 'Delivered project on time and with quality.',
    author: 'Emma Johnson',
    position: 'Project Manager',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const ClientReview = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Client Reviews
        </h1>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={700}
        loop={true}
        breakpoints={{
          480: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="client-review-swiper"
      >
        {fakeReviews.map((review, idx) => (
          <SwiperSlide key={idx} className="md:pt-16">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg relative border border-gray-200 dark:border-gray-700 h-full flex flex-col justify-between min-h-[350px] shadow-md dark:shadow-none transition-colors duration-300">
              <FaQuoteLeft className="absolute top-4 left-4 text-[1.3rem] text-gray-400 dark:text-gray-300" />

              <div className="flex justify-center">
                <img
                  src={review.image}
                  alt={review.author}
                  className="w-[100px] h-[100px] object-cover rounded-full border-4 border-gray-300 dark:border-gray-600"
                  onError={e => {
                    e.currentTarget.src =
                      'https://randomuser.me/api/portraits/lego/1.jpg';
                  }}
                />
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-[0.9rem] mt-6 text-center">
                {review.text}
              </p>

              <div className="flex items-start mt-5 justify-between">
                <div>
                  <h2 className="text-[1.2rem] font-[600] text-gray-900 dark:text-white">
                    {review.author}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-[1rem]">
                    {review.position}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) =>
                    index < review.rating ? (
                      <FaStar
                        key={index}
                        className="text-[1.3rem] text-yellow-400"
                      />
                    ) : (
                      <FaRegStar
                        key={index}
                        className="text-[1.3rem] text-yellow-400"
                      />
                    ),
                  )}
                </div>
              </div>

              <FaQuoteLeft className="absolute bottom-4 right-4 rotate-180 text-[1.3rem] text-gray-400 dark:text-gray-300" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-horizontal
          > .swiper-pagination-bullets
          .swiper-pagination-bullet,
        .swiper-pagination-horizontal.swiper-pagination-bullets
          .swiper-pagination-bullet {
          background: #00b795;
          opacity: 1;
        }
        .client-review-swiper .swiper-pagination-bullet-active {
          background: #00b795;
        }
        .swiper-pagination {
          margin-top: 20px;
          position: relative !important;
        }
      `}</style>
    </div>
  );
};

export default ClientReview;
