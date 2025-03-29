import React from "react";

// components
import MainTemplate from "@components/main/MainTemplate";
import Header from "@components/base/Header";

export type HomePageProps = {};

function HomePage(props: HomePageProps) {
  return (
    <MainTemplate>
      <Header />
    </MainTemplate>
  )

}

export default HomePage;