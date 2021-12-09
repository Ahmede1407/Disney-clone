/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styled from "styled-components";

import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trinding from "./Trending";
import Viewers from "./Viewers";

import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/Movie/movieSlice";
import { selectUserName } from "../features/User/userSlice";
// const data = require("../data/disneyPlusMoviesData.json");
import { movies } from "../data/disneyPlusMoviesData.json";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let recommended = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    movies.map((movie) => {
      switch (movie.type) {
        case "recommend":
          recommended.push({ id: movie.id, ...movie });
          break;

        case "new":
          newDisneys.push({ id: movie.id, ...movie });
          break;

        case "original":
          originals.push({ id: movie.id, ...movie });
          break;

        case "trending":
          trending.push({ id: movie.id, ...movie });
          break;

        default:
      }
    });

    dispatch(
      setMovies({
        recommended: recommended,
        newDisney: newDisneys,
        original: originals,
        trending: trending,
      })
    );
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <Trinding />
      <NewDisney />
      <Originals />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vh + 5px);

  &::after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
