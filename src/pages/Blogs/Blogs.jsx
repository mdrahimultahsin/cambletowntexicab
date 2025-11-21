import React from "react";
import titleImg from "../../assets/fleet-header-img.png";
import Container from "../../shared/Container";
import {
  FaCarSide,
  FaUserAlt,
  FaRegCalendarAlt,
  FaArrowRight,
  FaRegClock,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const Blogs = () => {
  const BlogsData = useLoaderData() || [];
  return (
    <div className="pb-30">
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white gap-6">
            <div className="py-15 md:py-30  flex-1 text-center md:text-left ">
              <span className="text-3xl md:text-5xl font-bold py-3 px-8 bg-black/50 text-white rounded-xl">
                Blogs
              </span>
              <p className="mt-8 text-sm md:text-base">
                Silver Cabs is a Sydney based maxi cab service established in
                2022. We provide affordable, reliable, and safe transport for
                families, groups, and business travelers. Our fleet includes
                sedans, SUVs, maxi vans, luxury cars, and wheelchair accessible
                taxis. We operate 24/7 across all Sydney suburbs and offer
                airport transfers, cruise transfers, corporate trips, and baby
                seat taxis.
              </p>
            </div>
            <div className="flex flex-1 items-center pb-10 md:pb-0">
              <img src={titleImg} alt="" />
            </div>
          </div>
        </Container>
      </div>

      {/* blogs container */}
      <div className="py-15">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-5 md:mb-10">
            <h2 className="font-playfair text-primary font-semibold text-4xl md:text-5xl text-center">
              Latest Blog & Articles
            </h2>
            <p className="text-accent max-w-3xl mx-auto mt-5 text-sm md:text-lg">
              Stay informed with our latest insights, tips, and news about the
              automotive world and beyond.
            </p>
          </div>

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {BlogsData.map((post) => (
              <Link to={`/blogs/${post.id}`}>
                <div
                  key={post.id}
                  className="rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white text-xs font-medium rounded-full">
                        <FaCarSide className="text-xs" />
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/70 text-white text-xs font-medium rounded-full">
                        <FaRegClock className="text-xs" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>

                  <div className="p-3 md:p-6">
                    <h3 className="text-xl font-bold text-secondary mb-3 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-accent text-sm mb-6 line-clamp-3">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-accent pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1.5">
                        <FaUserAlt className="text-primary" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaRegCalendarAlt className="text-primary" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Blogs;
