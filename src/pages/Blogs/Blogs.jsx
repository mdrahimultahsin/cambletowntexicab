import titleImg from "../../assets/campbelltown-pages-hero-img.png";
import Container from "../../shared/Container";
import {FaCarSide, FaHandPointer} from "react-icons/fa";
import {Link, useLocation} from "react-router";
import {IoCallSharp} from "react-icons/io5";
import ButtonSecondary from "../../shared/ButtonSecondary";
import {useEffect, useState} from "react";
import usePageTitle from "../../hooks/usePageTitle";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogsData(data));
  }, []);
  const location = useLocation();
  usePageTitle("Blogs");
  return (
    <div>
      {location.pathname === "/blogs" && (
        <div className="bg-linear-to-r from-[#04A9E9] to-[#003E60]">
          <Container>
            <div className="flex flex-col md:flex-row text-white  md:gap-6">
              <div className="py-10 md:py-20  flex-1 text-center md:text-left ">
                <span className="text-2xl md:text-4xl font-bold py-3 px-8 bg-black/50 text-white rounded-xl font-playfair">
                  Blogs
                </span>
                <p className="mt-8 text-sm md:text-base">
                  Campbelltown Taxi Cabs is a Sydney based maxi cab service
                  established in 2010. We provide affordable, reliable, and safe
                  transport for families, groups, and business travelers. Our
                  fleet includes sedans, SUVs, maxi vans, luxury cars, and
                  wheelchair accessible taxis. We operate 24/7 across all Sydney
                  suburbs and offer airport transfers, cruise transfers,
                  corporate trips, and baby seat taxis.
                </p>
                <div className="flex py-4 gap-4 justify-center md:justify-start">
                  <Link to="/book-a-taxi" className=" ">
                    <ButtonSecondary className="flex gap-2 items-center border-2 border-transparent hover:border-white">
                      <FaHandPointer />
                      Book Online
                    </ButtonSecondary>
                  </Link>
                  <a href="tel:1300450428" className="">
                    <ButtonSecondary className="flex gap-2 items-center bg-transparent! border-2 hover:bg-secondary!">
                      <IoCallSharp className="" /> 1300 450 428
                    </ButtonSecondary>
                  </a>
                </div>
              </div>
              <div className="flex flex-1 items-center pb-10 md:pb-0">
                <img
                  className="w-full"
                  src={titleImg}
                  alt="Campbelltown Taxi Cabs title img"
                />
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* blogs container */}
      <div className="py-15">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-5 md:mb-10">
            <h2 className="font-playfair text-primary font-semibold text-4xl md:text-5xl text-center">
              Latest Blog and Articles
            </h2>
            <p className="text-accent max-w-3xl mx-auto mt-5 text-sm md:text-lg">
              Stay informed with our latest insights, tips, and news about the
              automotive world and beyond.
            </p>
          </div>

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {blogsData.map((post) => (
              <Link
                key={post.id}
                to={`${location.pathname === "/blogs" ? "/blogs/" : "/blogs/"}${
                  post.id
                }`}
              >
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

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>

                  <div className="p-3 md:p-6">
                    <h3 className="text-xl font-bold text-secondary mb-3 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-accent text-sm mb-6 line-clamp-3">
                      {post.description}
                    </p>
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
