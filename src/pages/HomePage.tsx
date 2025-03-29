import React from "react";

// components
import MainTemplate from "@components/main/MainTemplate";
import Header from "@components/base/Header";
import HomeBanner from "@components/home/HomeBanner";

export type HomePageProps = {};

function HomePage(props: HomePageProps) {
  return (
    <MainTemplate>
      <Header />
      <HomeBanner />
    </MainTemplate>
  )

}

export default HomePage;