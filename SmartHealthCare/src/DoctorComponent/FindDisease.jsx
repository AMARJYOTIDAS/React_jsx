import React from "react";

const FindDisease = () => {
  let images = [
    {
      img: "https://www.careinsurance.com/upload_master/media/posts/January2023/most-communicable-diseases-in-india.jpg",
      alt: "smallpox",
      header: "smallpox",
      readmore:
        "https://asm.org/articles/2020/march/disease-eradication-what-does-it-take-to-wipe-out",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfee4LMMaCpVc_YU-06cvHXUIOcvoLnUVQhmW0sLmBSg&s=10",
      alt: "smallpox",
      header: "smallpox",
      readmore:
        "https://asm.org/articles/2020/march/disease-eradication-what-does-it-take-to-wipe-out",
    },
    {
      img: "https://asm.org/getContentAsset/2567b5d2-4c31-41cd-8326-b0534123f116/dfc3d011-8f63-43f6-9ed8-4b444333a1d0/DiseaseEradication-Smallpox-593x329.jpg?language=en-US",
      alt: "smallpox",
      header: "smallpox",
      readmore:
        "https://asm.org/articles/2020/march/disease-eradication-what-does-it-take-to-wipe-out",
    },
    {
      img: "https://asm.org/getContentAsset/2567b5d2-4c31-41cd-8326-b0534123f116/dfc3d011-8f63-43f6-9ed8-4b444333a1d0/DiseaseEradication-Smallpox-593x329.jpg?language=en-US",
      alt: "smallpox",
      header: "smallpox",
      readmore:
        "https://asm.org/articles/2020/march/disease-eradication-what-does-it-take-to-wipe-out",
    },
    {
      img: "https://asm.org/getContentAsset/2567b5d2-4c31-41cd-8326-b0534123f116/dfc3d011-8f63-43f6-9ed8-4b444333a1d0/DiseaseEradication-Smallpox-593x329.jpg?language=en-US",
      alt: "smallpox",
      header: "smallpox",
      readmore:
        "https://asm.org/articles/2020/march/disease-eradication-what-does-it-take-to-wipe-out",
    },
    {
      img: "https://asm.org/getContentAsset/2567b5d2-4c31-41cd-8326-b0534123f116/dfc3d011-8f63-43f6-9ed8-4b444333a1d0/DiseaseEradication-Smallpox-593x329.jpg?language=en-US",
      alt: "smallpox",
      header: "smallpox",
      readmore:
        "https://asm.org/articles/2020/march/disease-eradication-what-does-it-take-to-wipe-out",
    },
    {
      img: "https://asm.org/getContentAsset/2567b5d2-4c31-41cd-8326-b0534123f116/dfc3d011-8f63-43f6-9ed8-4b444333a1d0/DiseaseEradication-Smallpox-593x329.jpg?language=en-US",
      alt: "smallpox",
      header: "smallpox",
      readmore:
        "https://asm.org/articles/2020/march/disease-eradication-what-does-it-take-to-wipe-out",
    },
    {
      img: "https://asm.org/getContentAsset/2567b5d2-4c31-41cd-8326-b0534123f116/dfc3d011-8f63-43f6-9ed8-4b444333a1d0/DiseaseEradication-Smallpox-593x329.jpg?language=en-US",
      alt: "smallpox",
      header: "smallpox",
      readmore:
        "https://asm.org/articles/2020/march/disease-eradication-what-does-it-take-to-wipe-out",
    },
  ];

  return (
    <section id="finddisease">
      <h1 className="flex items-center justify-center font-black text-2xl">
        Know Your Disease
      </h1>
      <div className="w-full overflow-x-auto">
        {images.map((item, index) => {
          <div key={index} className="  flex gap-5 w-max p-5">
            <img src={item.img} alt={item.alt} />
            <h1>{item.header}</h1>
            <button type={item.readmore}>ReadMore</button>
          </div>;
        })}
      </div>
    </section>
  );
};

export default FindDisease;
