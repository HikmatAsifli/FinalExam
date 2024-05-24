import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import MainContext from "../../../context/context";
import Banner from "../../../components/Banner/Banner";
import Courses from "../../../components/Courses/Courses";
import Subscribe from "../../../components/Subscribe/Subscribe";
import Services from "../../../components/Services/Services";
import Events from "../../../components/Events/Events";

const Home = () => {
  const { data, setData } = useContext(MainContext);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <Courses />
      <Subscribe />
      <Services />
      <Events />
    </>
  );
};

export default Home;
