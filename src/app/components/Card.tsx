import React from "react";
import Image from 'next/image'

const FloatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-black">
          {" "}
          Delicious Burgers{" "}
        </h2>
        <p className="text-black mb-4">
          {" "}
          Experience this Juiciest burger in town, made with fresh ingredients
          and grilled to perfection.{" "}
        </p>

        <button className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 transition duration-200">
          {" "}
          Order Now{" "}
        </button>

        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-black">
          {" "}
          Coming Soon: Our New Burger Launches{" "}
        </h3>

        <ul>
          <li className="text-black"> <strong className="text-black"> Cheezy BBQ Bacon Burger: </strong>
            A mouthwatering blend of cheddar cheese,
            crispy bacon, and BBQ.
          </li>
          <br />

          <li className="text-black"> <strong className="text-black"> Spicy Jalapeno Burger: </strong>
            A fiery delight topped with fresh jalapenos and zesty chipotle mayo.
          </li>
          <br />

          <li className="text-black"> <strong className="text-black"> Meshroom Swiss Burger: </strong>
            Juicy Beef Patty melted swiss cheese for a rich, savory taste.
          </li>
          <br />

          <li className="text-black"> <strong className="text-black"> Avacado Veggie Burger: </strong>
            A delicious plant-based option featuring a grilled veggie patty.
          </li>
          <br />

          <li className="text-black"> <strong className="text-black"> Buffalo Chicken Burger: </strong>
            Crispy chicken breast tossed in spicy buffalo sauce.
          </li>
          <br />          
        </ul>
        </div>


<div className="md:w-1/2 mt-6 md:mt-0">
<Image src="https://img.freepik.com/premium-photo/colorful-fast-food-illustration-blackboard_123891-42749.jpg?w=1060"
alt="delicious burger" 
width={1060}
height={100}
className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"/>
  
</div>        

      
    </section>
  );
};

export default FloatingImageContentBlock;
