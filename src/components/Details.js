import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { movies } from "../data/disneyPlusMoviesData.json";

const Details = () => {
  let { title } = useParams();

  useEffect(() => {
    document.title = title;
  }, [title]);

  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    movies.filter((movie) => {
      if (movie.title === title) {
        setSelectedMovie(movie);
      }
      return null;
    });
  }, [title]);

  const { backgroundImg, description, subTitle, titleImg } = selectedMovie;

  return (
    <Container>
      <BackgroundImg>
        <img src={backgroundImg} alt={title} />
      </BackgroundImg>

      <ImgTitle>
        <img src={titleImg} alt={title} />
      </ImgTitle>

      <Content>
        <ControlBtns>
          <Player>
            <img src="/images/play-icon-black.png" alt="play-icon-black" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="play-icon-white" />
            <span>Trailer</span>
          </Trailer>

          <AddToList>
            <span></span>
            <span></span>
          </AddToList>
          <GroupWatch>
            <div>
              <img src="\images\group-icon.png" alt="group" />
            </div>
          </GroupWatch>
        </ControlBtns>

        <SubTitle>{subTitle}</SubTitle>

        <Description>{description}</Description>
      </Content>
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
`;

const BackgroundImg = styled.div`
  left: 0px;
  right: 0px;
  top: 0px;
  position: fixed;
  opacity: 0.8;
  z-index: -1;
  width: 100%;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImgTitle = styled.div`
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0 auto;
  height: 30vh;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const Content = styled.div`
  max-width: 874px;
`;

const ControlBtns = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  font-weight: bolder;
  margin: 0 22px 0 0;
  padding: 0 24px;
  height: 56px;
  border-radius: 4px;
  align-items: center;
  display: flex;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background-color: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  cursor: pointer;
  transition: 200ms ease-in-out 0s;

  img {
    width: 32px;
  }

  &:hover {
    background-color: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    font-size: 12px;
    margin: 0 10px 0 0;
    padding: 0 12px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const AddToList = styled.div`
  margin-right: 16px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid rgb(249, 249, 249);
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      width: 16px;
      height: 2px;
      transform: translate(1px, 0) rotate(0deg);
    }
    &:nth-child(2) {
      width: 2px;
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
    }
  }
`;

const GroupWatch = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  cursor: pointer;

  div {
    width: 40px;
    height: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  font-size: 20px;
  line-height: 1.4;
  padding: 16px 0;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export default Details;
