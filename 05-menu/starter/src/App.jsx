import { useState } from "react";
import Menu from "./components/Menu";
import Title from "./components/Title";
import data from "./data";
import Categories from "./components/Categories";
import { useMemo } from "react";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];
const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterMenuItems = (category) => {
    setMenuItems(
      category === "all"
        ? data
        : data.filter((item) => item.category === category)
    );
  };

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filterMenuItems={filterMenuItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
