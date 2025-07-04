import React, { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-screen min-h-screen bg-[#0A0A0A] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-[63px] ml-[55px]">
          <div className="space-y-8">
            <h2
              className="text-white text-[200px] font-normal leading-[150px] tracking-tight"
              style={{ fontFamily: "Unbounded" }}
            >
              <span
                className="text-white"
                style={{ width: "886px", height: "204px" }}
              >
                Let's
              </span>
              <br />
              <span
                className="text-[#F58327]"
                style={{ width: "886px", height: "204px", paddingLeft: "2px" }}
              >
                Talk!
              </span>
            </h2>
          </div>

          <div
            className="bg-white/5 rounded-[30px] p-10"
            style={{ marginLeft: "-70px", height: "520px",width: "720px" }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label
                  className="block"
                  style={{
                    fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "14px",
                    color: "rgb(136, 136, 136)",
                  }}
                >
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="px-3 py-4 bg-gray-500/15 border border-gray-500/10 rounded-[20px] text-gray-400 text-sm placeholder-gray-400"
                    style={{
                      fontFamily: "Inter",
                      width: "650px",
                      height: "60px",
                      marginTop: "10px",
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className="text-[#888] text-xs font-medium"
                  style={{
                    fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "14px",
                    color: "rgb(136, 136, 136)",
                  }}
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="px-3 py-4 bg-gray-500/15 border border-gray-500/10 rounded-[20px] text-gray-400 text-sm placeholder-gray-400"
                    style={{
                      fontFamily: "Inter",
                      width: "650px",
                      height: "60px",
                      marginTop: "10px",
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className="text-[#888] text-xs font-medium"
                  style={{
                    fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "14px",
                    color: "rgb(136, 136, 136)",
                  }}
                >
                  Message
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                    rows={4}
                    className="px-3 py-3 bg-gray-500/15 border border-gray-500/10 rounded-[20px] text-gray-400 text-sm placeholder-gray-400 resize-none"
                    style={{
                      fontFamily: "Inter",
                      width: "650px",
                      height: "127px",
                      marginTop: "10px",
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="py-2 bg-[#F58327] rounded-[10px] text-[#0A0A0A] text-base font-normal transition-all duration-200 hover:bg-[#e6751f]"
                style={{
                  fontFamily: "Unbounded",
                  width: "650px",
                  height: "40px",
                  fontWeight: 700,
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
