import React from 'react';

const ProjectsSection = () => {
  return (
    <div className="bg-black text-white min-h-screen font-[Inter] pt-[60px] px-6">
      {/* Main heading */}
      <div className="text-center mt-24">
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-10">
          Check Our Works With<br />Real Results
        </h1>
      </div>

      {/* Project Card */}
      <div className="max-w-6xl mx-auto mt-8 bg-[#1e1e1e] rounded-3xl overflow-hidden shadow-lg grid md:grid-cols-2 grid-cols-1">
        {/* Left Image */}
        <div className="flex items-center justify-center p-6 bg-[#ffb03b]">
          <img
            src="https://images.unsplash.com/photo-1614282300047-846f3f84c826?auto=format&fit=crop&w=300&h=300&q=80"
            alt="Client"
            className="rounded-2xl object-cover h-[280px] w-[280px]"
          />
        </div>

        {/* Right Content */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <span className="bg-[#333] text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block">
              PROJECTS
            </span>
            <h3 className="text-2xl font-bold mb-2">Project 1</h3>
            <p className="text-gray-400 text-sm mb-6">
              details about the project
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-6">
            {/* Left Stat */}
            <div>
              <h4 className="text-3xl font-extrabold text-orange-500">60%</h4>
              <p className="text-sm text-gray-400">Increase in website traffic</p>
              <p className="text-xs text-gray-500 mt-1">Client: John Doe</p>
            </div>

            {/* Right Stat */}
            <div>
              <h4 className="text-3xl font-extrabold text-orange-500">★★★★★</h4>
              <p className="text-sm text-gray-400">Client Rating</p>
            </div>
          </div>
        </div>
      </div>
       <div className="max-w-6xl mx-auto mt-8 bg-[#1e1e1e] rounded-3xl overflow-hidden shadow-lg grid md:grid-cols-2 grid-cols-1">
        {/* Left Image */}
        <div className="flex items-center justify-center p-6 bg-[#ffb03b]">
          <img
            src="https://images.unsplash.com/photo-1614282300047-846f3f84c826?auto=format&fit=crop&w=300&h=300&q=80"
            alt="Client"
            className="rounded-2xl object-cover h-[280px] w-[280px]"
          />
        </div>

        {/* Right Content */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <span className="bg-[#333] text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block">
              PROJECTS
            </span>
            <h3 className="text-2xl font-bold mb-2">Project 1</h3>
            <p className="text-gray-400 text-sm mb-6">
              details about the project
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-6">
            {/* Left Stat */}
            <div>
              <h4 className="text-3xl font-extrabold text-orange-500">60%</h4>
              <p className="text-sm text-gray-400">Increase in website traffic</p>
              <p className="text-xs text-gray-500 mt-1">Client: John Doe</p>
            </div>

            {/* Right Stat */}
            <div>
              <h4 className="text-3xl font-extrabold text-orange-500">★★★★★</h4>
              <p className="text-sm text-gray-400">Client Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
