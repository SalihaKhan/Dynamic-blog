
import Hero from "./component/hero";
import React from "react";
import BlogPage from "./blogPost/page";


 const Home = () => {
  return (
    <div>
      <Hero />
      <div className=" bg-gray-50">
      <BlogPage />
      
    </div>
     
    

    
    </div>
  );
}
export default Home