import React from "react";
import Blogs from "./Blogs";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const BlogsPage = () => {
  return (
    <>
      <Blogs />
      <div id="contact">
        <ContactForm />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
};

export default BlogsPage;
