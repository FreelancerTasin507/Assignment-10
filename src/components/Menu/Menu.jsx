import React from "react";

const Menu = () => {
  return (
    <div className="mt-28">
      <h1 className="text-5xl font-bold text-center">Menu</h1>
      <hr className="border-2 border-black w-1/3 mx-auto mt-3 mb-10" />
      <div className="border-2 border-black md:mx-40 mx-5 p-10">
          <h1 className="text-3xl font-semibold mb-4">Antipasti:</h1>
          <ul>
            <li><span className="font-bold text-lg">Bruschetta:</span> Grilled bread topped with garlic, tomatoes, and fresh basil - <span className="font-extrabold ">$8</span></li>
            <li><span className="font-bold text-lg">Caprese Salad:</span> Sliced fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze - <span className="font-extrabold ">$12</span></li>
            <li><span className="font-bold text-lg">Arancini:</span> Fried rice balls filled with cheese and meat ragù - <span className="font-extrabold ">$10</span></li>
          </ul>
          <hr className="border-2 border-black md:w-1/3 mt-3 mb-10" />
          <h1 className="text-3xl font-semibold mb-4">Primi Piatti:</h1>
          <ul>
            <li><span className="font-bold text-lg">Lasagna Bolognese:</span>  Spaghetti pasta with pancetta, egg yolks, and parmesan cheese in a creamy sauce -  <span className="font-extrabold ">$16</span></li>
            <li><span className="font-bold text-lg">Lasagna Bolognese:  </span> Layers of pasta with a meat ragù, béchamel sauce, and mozzarella cheese - <span className="font-extrabold ">$18</span></li>
            <li><span className="font-bold text-lg">Risotto ai Funghi: </span> Creamy risotto with wild mushrooms and parmesan cheese -  <span className="font-extrabold ">$20</span></li>
          </ul>
          <hr className="border-2 border-black md:w-1/3 mt-3 mb-10" />
          <h1 className="text-3xl font-semibold mb-4">Antipasti:</h1>
          <ul>
            <li><span className="font-bold text-lg">Bruschetta:</span> Grilled bread topped with garlic, tomatoes, and fresh basil - <span className="font-extrabold ">$8</span></li>
            <li><span className="font-bold text-lg">Caprese Salad:</span> Sliced fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze - <span className="font-extrabold ">$12</span></li>
            <li><span className="font-bold text-lg">Arancini:</span> Fried rice balls filled with cheese and meat ragù - <span className="font-extrabold ">$10</span></li>
          </ul>
          <hr className="border-2 border-black md:w-1/3 mt-3 mb-10" />
          <h1 className="text-3xl font-semibold mb-4">Primi Piatti:</h1>
          <ul>
            <li><span className="font-bold text-lg">Lasagna Bolognese:</span>  Spaghetti pasta with pancetta, egg yolks, and parmesan cheese in a creamy sauce -  <span className="font-extrabold ">$16</span></li>
            <li><span className="font-bold text-lg">Lasagna Bolognese:  </span> Layers of pasta with a meat ragù, béchamel sauce, and mozzarella cheese - <span className="font-extrabold ">$18</span></li>
            <li><span className="font-bold text-lg">Risotto ai Funghi: </span> Creamy risotto with wild mushrooms and parmesan cheese -  <span className="font-extrabold ">$20</span></li>
          </ul>
          <hr className="border-2 border-black md:w-1/3 mt-3 mb-10" />
      </div>
    </div>
  );
};

export default Menu;
