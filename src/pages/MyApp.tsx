import { CiSearch } from "react-icons/ci";
import "../App.css";
import logo from "../assets/image/LOGO.png";
import logoViedo from "../assets/Viedo/4bfe5eb8ab0b4bfc9276b0111e6a2105.HD-1080p-7.2Mbps-49600716 (1).mp4";
import { useState } from "react";
import { RiContactsFill } from "react-icons/ri";
import {
  FaBagShopping,
  FaFacebook,
  FaInstagram,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import one from "../assets/image/one.webp";
import five from "../assets/image/five.webp";
import three from "../assets/image/three.webp";
import four from "../assets/image/four.webp";
import two from "../assets/image/two.webp";
import viedo1 from "../assets/viedo/new.mp4";
import viedo2 from "../assets/viedo/new2.mp4";
import viedo3 from "../assets/viedo/new3.mp4";
import viedo4 from "../assets/viedo/new4.mp4";
import viedo5 from "../assets/viedo/new5.mp4";
import viedo6 from "../assets/viedo/new6.mp4";
import viedo7 from "../assets/viedo/new7.mp4";
import six from "../assets/image/six.webp";
import seven from "../assets/image/seven.webp";
import eight from "../assets/image/eight.webp";
import nine from "../assets/image/nine.webp";
import ten from "../assets/image/ten.webp";
import new1 from "../assets/image/11.webp";
import new2 from "../assets/image/12.webp";
import new3 from "../assets/image/13.webp";
import victor from "../assets/image/Vector.webp";
import footer from "../assets/image/logo_footer.webp";

const MyApp = () => {
  const [shadowColor, setShadowColor] = useState("#f2ef12");
  const images = [new1, ten, new3, nine, eight, four];

  const text = [
    "Home",
    "Catalog",
    "About Us",
    "Contact",
    "Return Shipping",
    "Shipping Policy",
  ];

  const policy = [
    "Search",
    "Privacy Policy",
    "Return Policy",
    "Shipping Policy",
    "Terms of Service",
    "Contact Us",
  ];

  return (
    <div>
      {/* first */}
      <div className="flex flex-col gap-2">
        <div className="overflow-hidden bg-[#f2ef12] py-2">
          <div className="marquee text-sm font-semibold  text-[#ec008c] tracking-wider whitespace-nowrap">
            <div className="flex gap-10">
              <p>FREE SHIPPING ON ALL ORDERS!!</p>
              <p>FREE SHIPPING ON ALL ORDERS!!</p>
              <p>FREE SHIPPING ON ALL ORDERS!!</p>
              <p>FREE SHIPPING ON ALL ORDERS!!</p>
              <p>FREE SHIPPING ON ALL ORDERS!!</p>
              <p>FREE SHIPPING ON ALL ORDERS!!</p>
            </div>
            <div className="flex gap-10">
              <p>FREE SHIPPING ON ALL ORDERS!!</p>
              <p>FREE SHIPPING ON ALL ORDERS!!</p>
              <p>FREE SHIPPING ON ALL ORDERS!!</p>
              <p>FREE SHIPPING ON ALL ORDERS!!</p>
              <p>FREE SHIPPING ON ALL ORDERS!!</p>
              <p>FREE SHIPPING ON ALL ORDERS!!</p>
            </div>
          </div>
        </div>

        {/* second */}
        <div className="sticky top-0 z-50 flex justify-between px-10 h-20 items-center bg-[#ec008c] text-white rounded-b-[40px] text-[13px] font-semibold">
          <div className="  w-1/3 flex justify-start gap-4 text-start">
            <p className="flex flex-col justify-center hover:cursor-pointer">
              Home
            </p>
            <p className="uppercase bg-[#4ca3df] hover:bg-[#f2ef12]  hover:text-[#ec008c] hover:cursor-pointer px-4 py-1 rounded-full">
              Catalog
            </p>
            <p className="flex flex-col justify-center hover:cursor-pointer">
              About Us
            </p>
          </div>

          <div className="w-1/3 flex justify-center hover:cursor-pointer">
            <img src={logo} alt="Logo" />
          </div>

          <div className="w-1/3 flex justify-end gap-4 items-center">
            <p className="hover:cursor-pointer">Contact</p>
            <p className="hover:cursor-pointer">Return Shipping</p>
            <p className="hover:cursor-pointer">Shipping Policy</p>
            <p>|</p>
            <CiSearch className="text-xl hover:cursor-pointer" />
            <RiContactsFill className="text-xl hover:cursor-pointer" />
            <FaBagShopping className="text-xl hover:cursor-pointer" />
          </div>
        </div>

        {/* third */}
        <div className="relative rounded-t-[40px]">
          <video
            src={logoViedo}
            className="h-screen w-full object-cover rounded-t-[40px]"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute bottom-5 left-7">
            <div
              className="uppercase px-6 py-2 bg-[#ec008c] text-[#f2ef12] hover:bg-[#f2ef12] hover:text-[#ec008c] hover:cursor-pointer font-semibold rounded-3xl shadow-2xl transition-all duration-300"
              style={{ boxShadow: `3px 3px  ${shadowColor}` }}
              onMouseEnter={() => setShadowColor("#ec008c")}
              onMouseLeave={() => setShadowColor("#f2ef12")}
            >
              shop now
            </div>
          </div>
        </div>

        {/* four */}
        <div className="bg-[#ec008c] h-20 flex items-center overflow-hidden">
          <div className="marqueeNew text-[45px] flex uppercase text-[#f2ef12] whitespace-nowrap font-['Avory_I_PE']">
            <div className="flex gap-10">
              <p className="pr-10">Vegan Friendly Dissolvable Strips</p>
              <p>Gluten Free</p>
            </div>
            <div className="flex gap-10 ml-20">
              <p className="pr-10">Vegan Friendly Dissolvable Strips</p>
              <p>Gluten Free</p>
            </div>
          </div>
        </div>

        {/* fifth */}
        <div className="w-full">
          <div className="grid grid-cols-3 place-items-center gap-2 px-4 text-center">
            {/* start */}
            <div className="flex flex-col gap-2">
              <div className="w-full h-screen flex justify-center items-center ">
                <img
                  src={one}
                  className="w-full h-full object-cover rounded-[30px]"
                />
              </div>
              <div className="w-full h-screen flex justify-center items-center">
                <img
                  src={two}
                  className="w-full h-full object-cover rounded-[30px]"
                />
              </div>
            </div>

            {/* Middle  */}
            <div className="bg-[#ec008c] h-[calc(100vh*2)] rounded-[30px]  flex flex-col justify-center items-center text-white">
              <div className="flex flex-col w-full h-screen  justify-center items-center">
                <img src={five} className="w-full h-full object-contain" />
                <div className="text-4xl uppercase font-bold mb-4 [text-shadow:_2px_3px_4px_rgba(0,0,0,0.5)]">
                  Hangover Strips
                </div>

                <p className="text-xl text-center px-10  pb-5 leading-10">
                  Our Hangover Oral Strips are crafted with a blend of
                  ingredients inspired by traditional Ayurvedic practices,
                  designed to support general wellness. These strips are
                  formulated with a focus on the traditional use of each
                  ingredient, aiming to contribute to your overall well-being.
                </p>
                <div className="uppercase px-7 py-3 font-semibold hover:cursor-pointer bg-[#f2ef12] text-[#ec008c] rounded-full my-5">
                  shop now
                </div>
              </div>
            </div>

            {/* last */}
            <div className="flex flex-col gap-2">
              <div className="w-full h-screen flex justify-center items-center">
                <video
                  src={viedo1}
                  className="w-full h-full object-cover rounded-[30px]"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              </div>
              <div className="w-full h-screen flex justify-center items-center rounded-2xl">
                <img
                  src={three}
                  className="w-full h-full object-cover rounded-[30px] "
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 place-items-center gap-2 px-4 text-center pt-2">
            <div className="w-full h-screen flex justify-center items-center ">
              <img
                src={four}
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
            <div className="w-full h-screen flex justify-center items-center ">
              <video
                src={viedo2}
                className="w-full h-full object-cover rounded-[30px]"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
            <div className="w-full h-screen flex justify-center items-center ">
              <div className="bg-[#f2ef12] h-full w-full rounded-[30px]">
                <div className="flex flex-col h-full w-full justify-center items-center px-10">
                  <p className=" text-xl font-semibold leading-10 px-4">
                    After a long night, our Hangover Oral Strips are here to
                    help you bounce back. Packed with natural ingredients, they
                    work quickly to rehydrate, restore energy, and ease
                    discomfort, so you can feel refreshed and ready to take on
                    the day. Perfect for those who need a quick recovery after a
                    fun night out or a busy evening.
                  </p>
                  <div className="uppercase px-7 py-3 font-semibold hover:cursor-pointer bg-[#ec008c] text-[#f2ef12] rounded-full my-5">
                    shop now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* six */}
        <div className="bg-[#f2ef12] h-20 flex items-center overflow-hidden">
          <div className="marqueeNew text-[45px] flex uppercase text-[#ec008c] whitespace-nowrap font-['Avory_I_PE']">
            <div className="flex gap-10">
              <p className="pr-10">Vegan Friendly Dissolvable Strips</p>
              <p>Energy Strips</p>
            </div>
            <div className="flex gap-10 ml-20">
              <p className="pr-10">Vegan Friendly Dissolvable Strips</p>
              <p>Energy Strips</p>
            </div>
          </div>
        </div>

        {/* seven */}
        <div className="w-full">
          <div className="grid grid-cols-3 place-items-center gap-2 px-4 text-center">
            {/* start */}
            <div className="flex flex-col gap-2">
              <div className="w-full h-screen flex justify-center items-center ">
                <video
                  src={viedo4}
                  className="w-full h-full object-cover rounded-[30px]"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              </div>
              <div className="w-full h-screen flex justify-center items-center">
                <video
                  src={viedo5}
                  className="w-full h-full object-cover rounded-[30px]"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              </div>
            </div>

            {/* Middle  */}
            <div className="bg-[#f2ef12] h-[calc(100vh*2)] rounded-[30px]  flex flex-col justify-center items-center text-white">
              <div className="flex flex-col w-full h-screen  justify-center items-center">
                <img src={six} className="w-full h-full object-contain" />
                <div className="text-4xl text-black uppercase font-bold mb-4 [text-shadow:_2px_3px_4px_rgba(255,255,255,0.5)]">
                  Energy Strips
                </div>

                <p className="text-xl text-black text-center px-10  pb-5 leading-10">
                  They offer increased sustained energy compared to sugary
                  drinks or coffee without the crash or jitters that come with
                  regular caffeine intake.*
                </p>
                <div className="uppercase px-7 py-3 font-semibold hover:cursor-pointer bg-[#ec008c] text-[#] rounded-full my-5">
                  shop now
                </div>
              </div>
            </div>

            {/* last */}
            <div className="flex flex-col gap-2">
              <div className="w-full h-screen flex justify-center items-center">
                <img
                  src={seven}
                  className="w-full h-full object-cover rounded-[30px] "
                />
              </div>
              <div className="w-full h-screen flex justify-center items-center rounded-2xl">
                <img
                  src={eight}
                  className="w-full h-full object-cover rounded-[30px] "
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 place-items-center gap-2 px-4 text-center pt-2">
            <div className="w-full h-screen flex justify-center items-center ">
              <img
                src={nine}
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
            <div className="w-full h-screen flex justify-center items-center ">
              <video
                src={viedo3}
                className="w-full h-full object-cover rounded-[30px]"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
            <div className="w-full h-screen flex justify-center items-center ">
              <img
                src={ten}
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
          </div>
        </div>

        {/* eight */}
        <div className="bg-[#ec008c] h-20 flex items-center overflow-hidden">
          <div className="marqueeNew text-[45px] flex uppercase text-[#f2ef12] whitespace-nowrap font-['Avory_I_PE']">
            <div className="flex gap-10">
              <p className="pr-10">Vegan Friendly Dissolvable Strips</p>
              <p>Gluten Free</p>
            </div>
            <div className="flex gap-10 ml-20">
              <p className="pr-10">Vegan Friendly Dissolvable Strips</p>
              <p>Gluten Free</p>
            </div>
          </div>
        </div>

        {/* nine */}
        <div className="w-full">
          <div className="grid grid-cols-3 place-items-center gap-2 px-4 text-center">
            {/* start */}
            <div className="flex flex-col gap-2">
              <div className="w-full h-screen flex justify-center items-center ">
                <img
                  src={new1}
                  className="w-full h-full object-cover rounded-[30px] "
                />
              </div>
              <div className="w-full h-screen flex justify-center items-center">
                <div className="bg-[#f2ef12] h-full w-full rounded-[30px]">
                  <div className="flex flex-col h-full w-full justify-center items-center px-10">
                    <div className="text-4xl text-black uppercase font-bold mb-4 [text-shadow:_4px_4px_4px_rgba(255,255,255,0.5)]">
                      Recharge While You Rest
                    </div>
                    <p className=" text-xl font-semibold leading-10 px-4">
                      Whether you're always on the move or just need to feel
                      like you again, our Sleep Oral Strips help you fall asleep
                      faster and wake up feeling clear, calm, and fully
                      recharged
                    </p>
                    <div className="uppercase px-7 py-3 font-semibold hover:cursor-pointer bg-[#ec008c] text-[#f2ef12] rounded-full my-5">
                      shop now
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle  */}
            <div className="bg-[#fb1521] h-[calc(100vh*2)] rounded-[30px]  flex flex-col justify-center items-center text-white">
              <div className="flex flex-col w-full h-screen  justify-center items-center">
                <img src={new2} className="w-full h-full object-contain" />
                <div className="text-5xl text-yellow-300 uppercase font-bold mb-8 [text-shadow:_2px_3px_4px_rgba(255,255,255,0.5)]">
                  Sleep Strips
                </div>

                <p className="text-xl text-white text-center px-10  pb-5 leading-10">
                  Whether you enjoy an active lifestyle or just need an extra
                  boost during the day, Sleep oral strips will give you the
                  energy to do anything.
                </p>
                <div
                  className="uppercase px-6 py-2 bg-[#ec008c] text-[#f2ef12] hover:bg-[#f2ef12] hover:text-[#ec008c] hover:cursor-pointer font-semibold rounded-3xl shadow-2xl transition-all duration-300"
                  style={{ boxShadow: `3px 3px  ${shadowColor}` }}
                  onMouseEnter={() => setShadowColor("#ec008c")}
                  onMouseLeave={() => setShadowColor("#f2ef12")}
                >
                  shop now
                </div>
              </div>
            </div>

            {/* last */}
            <div className="flex flex-col gap-2">
              <div className="w-full h-screen flex justify-center items-center">
                <video
                  src={viedo6}
                  className="w-full h-full object-cover rounded-[30px]"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              </div>
              <div className="w-full h-screen flex justify-center items-center rounded-2xl">
                <img
                  src={new3}
                  className="w-full h-full object-cover rounded-[30px] "
                />
              </div>
            </div>
          </div>

          <div className="flex place-items-center gap-2 px-4 text-center pt-2">
            <div className="w-[60%] h-screen flex justify-center items-center ">
              <video
                src={viedo7}
                className="w-full h-full object-cover rounded-[30px]"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
            <div className="w-[40%] h-screen flex justify-center items-center ">
              <img
                src={ten}
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
          </div>
        </div>

        {/* ten */}
        <div className="w-full px-4">
          <div className="bg-[#ec008c] w-full h-[330px] rounded-2xl p-3">
            <p className="text-4xl text-white mb-4">Join Us @mind.strips</p>
            <div className="flex w-full justify-evenly gap-2 overflow-x-auto">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className=" w-48 h-60 object-cover  flex-shrink-0 hover:cursor-pointer"
                  alt={`image-${index}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="w-full h-screen relative">
          {/* Background Image */}
          <img
            src={victor}
            className="absolute inset-0 h-full w-full object-fill"
            alt="background"
          />

          {/* Overlay Content */}
          <div className="relative z-20 w-full h-full flex flex-col justify-center items-center px-6 py-10">
            {/* Footer Image */}
            <img src={footer} className="w-[200px] mb-6" alt="footer logo" />

            {/* Column 1: About */}
            <div className="w-full bg-[#fff200] py-12 px-6 text-black">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-2 border-b border-b-gray-500">
                {/* Column 1: About */}
                <div>
                  <p className="text-lg font-bold mb-2">MindStrips</p>
                  <p className="text-sm mb-4">
                    At MindStrips, we innovate wellness with convenient,
                    effective oral dissolvable strips designed to enhance your
                    daily life.
                  </p>
                  <p className="text-sm font-bold">Contact Us</p>
                  <p className="text-sm">7901 4th St N, 4412</p>
                  <p className="text-sm mb-3">St. Petersburg, FL 33702</p>
                  <div className="flex gap-3">
                    <div className="h-10 w-10 border border-black rounded-full flex items-center justify-center hover:cursor-pointer">
                      <FaFacebook />
                    </div>
                    <div className="h-10 w-10 border border-black rounded-full flex items-center justify-center hover:cursor-pointer">
                      <FaInstagram />
                    </div>
                    <div className="h-10 w-10 border border-black rounded-full flex items-center justify-center hover:cursor-pointer">
                      <FaYoutube />
                    </div>
                    <div className="h-10 w-10 border border-black rounded-full flex items-center justify-center hover:cursor-pointer">
                      <FaSquareXTwitter />
                    </div>
                  </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                  <p className="text-lg font-bold mb-2">Quick links</p>
                  <div className="flex flex-col gap-1 text-sm">
                    {text.map((item, index) => (
                      <p key={index} className="cursor-pointer ">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Column 3: Policies */}
                <div>
                  <p className="text-lg font-bold mb-2">Policies</p>
                  <div className="flex flex-col gap-1 text-sm">
                    {policy.map((item, index) => (
                      <p key={index} className="cursor-pointer ">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Column 4: Newsletter */}
                <div>
                  <p className="text-lg font-bold mb-2">
                    Subscribe to our emails
                  </p>
                  <input
                    type="text"
                    placeholder="Enter email address"
                    className="w-full px-3 py-2 text-sm rounded border border-black mb-3"
                  />
                  <button className="w-full bg-black text-white py-2 text-sm font-semibold rounded hover:opacity-90 transition">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyApp;
