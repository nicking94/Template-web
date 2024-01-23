
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { IoIosPlay } from "react-icons/io";

const Hero = () => {
  return (
    <section className="h-[80vh] sm:h-[20vh] md:h-[90vh] grid grid-cols-1 md:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center lg:p-16 ">
        <div className="flex flex-col text-center gap-4"> 
          <h1 className="text-6xl font-bold leading-[6.5rem] xl:leading-[7.5rem]">Web Design Impactful Digital {" "}
           <span className="text-primary py-2 px-6 border-8 border-primary relative">
            Products
            <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content"/> 
            <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content"/>
            <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content"/>
            <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content"/> </span> </h1>
          <p className="text-gray-500 text-xl leading-[2rem] md:leading-[2.5rem] px-8">Help find solutions with intuitive and in accordance with client business goals. we provide a high-quality services.</p>
          <div className="flex items-center gap-4 w-[90%]">
            <button className="bg-primary text-white py-2 px-8 rounded-xl text-xl ml-10 md:ml-24 -mr-6 md:mr-0 ">Contact Us</button>
            <button className="flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl mr-4"><IoIosPlay className="bg-secondary text-primary p-4 rounded-full box-content" />Watch our <br />introduction video</button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:col-span-3 items-center justify-center">
        {/* imagen */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGuVeGPAxpJ53pmg5UFEdV3LyEd00NcVJgw&usqp=CAU" alt="image" 
        className="rounded-xl w-[500px] h-[400px] object-cover -mt-30 p-10" />
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
