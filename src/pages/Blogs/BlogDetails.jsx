import React from "react";
import titleImg from "../../assets/fleet-header-img.png";
import {useLoaderData, Link} from "react-router";
import Container from "../../shared/Container";
import {FaCarSide, FaArrowLeft} from "react-icons/fa";
import ButtonSecondary from "../../shared/ButtonSecondary";
import usePageTitle from "../../hooks/usePageTitle";

const BlogDetails = () => {
  const blog = useLoaderData();
  usePageTitle(`${blog.title}`);
  if (!blog) {
    return <p className="text-center py-20 text-accent">Blog not found.</p>;
  }

  return (
    <div>
      <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
        <Container>
          <div className="flex flex-col md:flex-row text-white gap-6">
            <div className="py-15 md:py-20  flex-1 text-center md:text-left ">
              <span className="text-3xl md:text-5xl font-bold py-3 px-8 bg-black/50 text-white rounded-xl font-playfair">
                Blog Details
              </span>
              <p className="mt-8 text-sm md:text-base">
                Campbelltown Taxi Cabs is a Sydney based maxi cab service
                established in 2010. We provide affordable, reliable, and safe
                transport for families, groups, and business travelers. Our
                fleet includes sedans, SUVs, maxi vans, luxury cars, and
                wheelchair accessible taxis. We operate 24/7 across all Sydney
                suburbs and offer airport transfers, cruise transfers, corporate
                trips, and baby seat taxis.
              </p>
              <Link to="/book-a-taxi" className="mt-4 inline-block">
                <ButtonSecondary>Book A Taxi Cab</ButtonSecondary>
              </Link>
            </div>
            <div className="flex flex-1 items-center pb-10 md:pb-0">
              <img src={titleImg} alt="Campbelltown Taxi Cabs title bg" />
            </div>
          </div>
        </Container>
      </div>

      {/* Blog details */}
      <div>
        <Container>
          <div className=" ">
            <div className="flex flex-col md:flex-row bg-light p-3 md:p-6 mt-20 mb-10 rounded-xl items-center gap-5 md:gap-10">
              <div className=" overflow-hidden flex-1 text-center md:text-left">
                <div className=" mx-auto py-5 md:py-10">
                  {/* Creative Category Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4 md:mb-8">
                    <FaCarSide className="text-sm" />
                    <span className="font-medium">{blog.category}</span>
                  </div>

                  {/* Creative Title */}
                  <h1 className="font-playfair text-primary font-semibold text-3xl md:text-5xl text-center md:text-left md:mb-6">
                    {blog.title}
                  </h1>

                  {/* Elegant Description */}
                  <p className="text-sm md:text-xl text-accent mb-8 leading-relaxed">
                    {blog.description}
                  </p>
                </div>
              </div>

              {/* Creative Image Container */}
              <div className=" flex-1">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="relative w-full h-40 md:h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Creative Content Layout */}
            <div className="mx-auto px-4 mt-16 pb-20 bg-light p-3 md:p-6 mb-20 rounded-xl">
              <div className="space-y-8">
                {/* Content with Creative Elements */}
                <div className="space-y-6 text-accent leading-relaxed">
                  <p className="text-base md:text-lg text-center">
                    {blog.description}
                  </p>

                  {/* Creative Section Divider */}
                  <div className="relative my-4 md:my-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-4 text-accent">•</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-secondary text-center md:text-left">
                    The Importance of This Topic
                  </h3>

                  <p className="text-sm md:text-base text-justify md:text-left">
                    {blog.content}
                  </p>
                </div>

                {/* Creative Back Button */}
                <div className="mt-4 md:mt-12 pt-6 text-center md:text-left border-t border-gray-200">
                  <Link
                    to="/blogs"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80  transition-colors font-medium"
                  >
                    <FaArrowLeft />
                    <span>Back to Blogs</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BlogDetails;
