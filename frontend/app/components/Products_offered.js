import tiles2 from "public/images/tiles2.jpg";
import bathroom_icon from "public/images/bathroom icon.jpg";
import bathroom_floor_icon from "public/images/bathroom floor.png";
import kitchen_wall_icon from "public/images/kitchen wall icom.png";
import kitchen_floor_icon from "public/images/kitchen floor tiles.png";
import bedroom_wall_icon from "public/images/bed room wall tiles.png";
import bedroom_floor_icon from "public/images/bed room floor.png";
import livingroom_wall_icon from "public/images/living room wall.png";
import livingroom_floor_icon from "public/images/living room floor.png";
import parking_icon from "public/images/parking floor.png";
import Image from "next/image";

function Products() {
  return (
    <>
      <p className="bg-gray-300 text-center mb-0 mx-[70px] my-[20px] font-bold text-7xl text-lime-700 font-serif animate-pulse">
        we offer
      </p>
      <div className="mx-[70px] my-[20px] mt-0">
        <div className="grid grid-cols-1  md:grid-cols-2   md:gap-4 lg:grid-cols-3 gap-4">
          <div className=" bg-gray-200 p-4 flex justify-center">
            <div className="">
              <Image
                src={bathroom_icon}
                className="h-[70px] w-[70px] mx-[8rem]"
              ></Image>
              <div className="mx-[7rem] my-[8px]">
                <p>Bathroom Wall Tiles</p>
                <p>
                  <a href="#">
                    <b>Explore Now</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-gray-200 p-4 flex justify-center">
            <div className="">
              <Image
                src={bathroom_floor_icon}
                className="h-[70px] w-[70px] mx-[8rem]"
              ></Image>
              <div className="mx-[7rem] my-[8px]">
                <p>Bathroom Floor Tiles</p>
                <p>
                  <a href="#">
                    <b>Explore Now</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-gray-200 p-4 flex justify-center">
            <div className="">
              <Image
                src={kitchen_wall_icon}
                className="h-[70px] w-[70px] mx-[8rem]"
              ></Image>
              <div className="mx-[7rem] my-[8px]">
                <p>kitchen Wall Tiles</p>
                <p>
                  <a href="#">
                    <b>Explore Now</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-gray-200 p-4 flex justify-center">
            <div className="">
              <Image
                src={kitchen_floor_icon}
                className="h-[70px] w-[70px] mx-[8rem]"
              ></Image>
              <div className="mx-[7rem] my-[8px]">
                <p>kitchen floor Tiles</p>
                <p>
                  <a href="#">
                    <b>Explore Now</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-gray-200 p-4 flex justify-center">
            <div className="">
              <Image
                src={bedroom_wall_icon}
                className="h-[70px] w-[70px] mx-[8rem]"
              ></Image>
              <div className="mx-[7rem] my-[8px]">
                <p>Bedroom Wall Tiles</p>
                <p>
                  <a href="#">
                    <b>Explore Now</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-gray-200 p-4 flex justify-center">
            <div className="">
              <Image
                src={bedroom_floor_icon}
                className="h-[70px] w-[70px] mx-[8rem]"
              ></Image>
              <div className="mx-[7rem] my-[8px]">
                <p>Bedroom floor Tiles</p>
                <p>
                  <a href="#">
                    <b>Explore Now</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-gray-200 p-4 flex justify-center">
            <div className="">
              <Image
                src={livingroom_wall_icon}
                className="h-[70px] w-[70px] mx-[8rem]"
              ></Image>
              <div className="mx-[7rem] my-[8px]">
                <p>living room Wall Tiles</p>
                <p>
                  <a href="#">
                    <b>Explore Now</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-gray-200 p-4 flex justify-center">
            <div className="">
              <Image
                src={livingroom_floor_icon}
                className="h-[70px] w-[70px] mx-[8rem]"
              ></Image>
              <div className="mx-[7rem] my-[8px]">
                <p>Living room floor Tiles</p>
                <p>
                  <a href="#">
                    <b>Explore Now</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-gray-200 p-4 flex justify-center">
            <div className="">
              <Image
                src={parking_icon}
                className="h-[70px] w-[70px] mx-[8rem]"
              ></Image>
              <div className="mx-[7rem] my-[8px]">
                <p>parking floor Tiles</p>
                <p>
                  <a href="#">
                    <b>Explore Now</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Products;
