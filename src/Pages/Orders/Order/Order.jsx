import { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../../Component/Home/Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/useMenu";
import FoodCart from "../../../Component/FootCart/foodCart";
import OrderTabs from "./OrderTabs/OrderTabs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {

  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const {category} = useParams();
  const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();
    
    console.log(category);
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
           <Helmet>
                          <title>Bistro Boss | Order Food</title>
                      </Helmet>
            <Cover  img={orderCoverImg} title="Order Food"></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dissert</Tab>
    <Tab>Drink</Tab>
    
  </TabList>
  <TabPanel>
    <OrderTabs
    items={salad}
    >

    </OrderTabs>
  </TabPanel>
  <TabPanel>
  <OrderTabs
    items={pizza}
    >

    </OrderTabs>
  </TabPanel>
  <TabPanel>
  <OrderTabs
    items={soup}
    >

    </OrderTabs>
  </TabPanel>
  <TabPanel>
  <OrderTabs
    items={dessert}
    >

    </OrderTabs>
  </TabPanel>
  <TabPanel>
  <OrderTabs
    items={drinks}
    >

    </OrderTabs>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default Order;