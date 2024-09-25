import React from "react";

const BlogPage = () => {
  return (
    <div className="bg-white">
      <div className="flex p-2 px-10 bg-gray-300 justify-between">
        <div className="flex space-x-4">
          <p className="font-semibold">Welcome, Guest</p>
          <div className="space-x-1">
            <a href="https://www.w3schools.com">Login</a>
            <a href="https://www.w3schools.com">SignUp</a>
          </div>
        </div>
        <div className="">
          <p className="font-semibold justify-end items-end">
            Stay Updated:{" "}
            <span className="text-green-700">Subscribe via Email</span>
          </p>
        </div>
      </div>

      {/* Header */}
      <header className="bg-green-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center px-10">
          <h1 className="text-3xl font-bold">My Blog</h1>
          <span>Description of My Blog</span>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-200 p-4">
        <div className="container mx-auto">
          <ul className="flex space-x-10 px-10">
            <li>
              <a href="#" className="text-green-700 hover:text-green-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-green-700 hover:text-green-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-green-700 hover:text-green-900">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-green-700 hover:text-green-900">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto flex mt-4 px-10">
        {/* Left Side: Blog Posts */}
        <div className="w-3/4 p-4">
          {/* First Blog Post */}
          <article className="mb-8">
            <h2 className="text-2xl font-bold">Don't Cancel Chuck!</h2>
            <p className="text-gray-700">
              On July 01 in General | Posted by admin
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vitae nisi, in ullamcorper eros. Nulla facilisi. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Integer a orci ut orci ornare viverra. Suspendisse
              facilisis lectus eget ligula efficitur, nec laoreet erat
              pellentesque. Vivamus consectetur ex eget malesuada ultricies.
              Praesent id arcu fringilla, interdum orci a, luctus mauris.
              Aliquam erat volutpat.
            </p>
            <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vehicula suscipit libero a tempus.
            </blockquote>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse auctor turpis eget nisl laoreet, ut suscipit justo
              vehicula. Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas.
            </p>
          </article>

          {/* Second Blog Post */}
          <article className="mb-8">
            <h2 className="text-2xl font-bold">
              Alien Spacecraft found in New Mexico
            </h2>
            <p className="text-gray-700">
              On July 01 in General | Posted by admin
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ac urna orci. Mauris sodales diam at mauris tincidunt, sit amet
              dapibus nisi ullamcorper. Quisque consequat quam a volutpat
              scelerisque. Suspendisse tincidunt, velit in bibendum
              pellentesque, nunc ligula facilisis arcu, nec egestas libero dui
              non risus. Integer maximus auctor ante, id varius quam scelerisque
              sit amet. In auctor sapien at purus vehicula.
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Aliquam lobortis massa, quis fringilla risus</li>
              <li>Proin nec dapibus augue, ut blandit lectus</li>
            </ul>
          </article>

          {/* Third Blog Post */}
          <article className="mb-8">
            <h2 className="text-2xl font-bold">
              Ghostly Goo in your kitchen Sink?
            </h2>
            <p className="text-gray-700">
              On July 01 in General | Posted by admin
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin viverra aliquam malesuada. Quisque
              sodales turpis eget sapien convallis, id tempor ligula porta.
              Fusce feugiat orci turpis. Integer id risus vitae elit gravida
              ullamcorper. Nulla vestibulum nisi vitae turpis ornare, quis
              eleifend erat hendrerit. In hac habitasse platea dictumst.
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Aliquam lobortis massa, quis fringilla risus</li>
              <li>Proin nec dapibus augue, ut blandit lectus</li>
            </ul>
          </article>
        </div>

        {/* Right Side: Categories and Posts */}
        <div className="w-1/4 bg-gray-100 p-4 h-1/6">
          {/* Categories */}
          <section className="mb-8">
            <h3 className="text-xl font-bold">Categories</h3>
            <ul className="list-disc ml-4">
              <li>General</li>
              <li>Ghost Sightings</li>
              <li>UFO Crashes</li>
              <li>Government Coverups</li>
              <li>International Conspiracies</li>
            </ul>
          </section>

          {/* Recent Posts */}
          <section className="mb-8">
            <h3 className="text-xl font-bold">Recent Posts</h3>
            <ul className="list-disc ml-4">
              <li>Ghost Sighting In Mansion</li>
              <li>UFO spotted by waze</li>
              <li>Mysterious man</li>
              <li>Bigfoot: Fact or Fiction?</li>
            </ul>
          </section>

          {/* Archives */}
          <section className="mb-8">
            <h3 className="text-xl font-bold">Archives</h3>
            <ul className="list-disc ml-4">
              <li>July 2008</li>
              <li>June 2008</li>
              <li>May 2008</li>
              <li>April 2008</li>
              <li>March 2008</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 ">
        <div className="container mx-auto flex justify-between px-10">
          <div className="text-sm">
            Links
            <ul className="list-disc ml-4">
              <li>Photoshop tutorial</li>
              <li>Online design tutorials</li>
            </ul>
          </div>

          <div className="text-sm">
            Follow our updates
            <ul className="list-disc ml-4">
              <li>Subscribe to RSS feed</li>
              <li>Email Updates</li>
            </ul>
          </div>

          <div className="text-sm">Copyright © 2000. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
