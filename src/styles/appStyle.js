import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: var(--bg);
  width: 100%;
  height: 100vh;
  display: flex;
  .container {
    max-width: 1366px;
    background-color: var(--bg);
    /* width: min(1366px, 100%);*/
    height: 100%;
    margin: 0 auto auto;
    padding: 43px 20px 20px 41px;
    display: grid;
    grid-template-columns: 1fr 6fr;
    gap: 34px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 20px;
      gap: 20px;
    }
    &__left {
      position: relative;
      &_filter__container {
        @media (max-width: 768px) {
          display: none;
        }
        &.active {
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg);
        }
      }
      .phone__nav__icon {
        margin: auto 0px;
        position: relative !important;
        outline: none;
        height: 30px;
        width: 30px;
        @media (min-width: 769px) {
          display: none;
        }
        .hamInner {
          transition: all cubic-bezier(0.67, -0.62, 0, 1.53) 300ms;
          z-index: 12;
          position: absolute;
          top: 50%;
          right: 0px;
          width: 25px;
          height: 2px;
          border-radius: 4px;
          background-color: var(--white);
          transform: rotate(0deg);
          &::after {
            transition: all cubic-bezier(0.67, -0.62, 0, 1.53) 300ms;
            bottom: -10px;
            transform: rotate(0deg);
            content: "";
            display: block;
            position: absolute;
            right: 0px;
            width: 25px;
            height: 2px;
            border-radius: 4px;
            background-color: var(--white);
          }
          &::before {
            transition: all cubic-bezier(0.67, -0.62, 0, 1.53) 300ms;
            top: -10px;
            opacity: 1;
            content: "";
            display: block;
            position: absolute;
            right: 0px;
            width: 25px;
            height: 2px;
            border-radius: 4px;
            background-color: var(--white);
          }
          &.active {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            width: 0;
            height: 0;
            border-radius: 4px;
            background-color: var(--white);
            transform: rotate(0deg);
            &::after {
              content: "";
              display: block;
              position: absolute;
              top: 12px;
              bottom: 0;
              right: 0;
              left: 2.5px;
              width: 30px;
              height: 2px;
              border-radius: 4px;
              background-color: var(--white);
              transition-timing-function: ease;
              transition-duration: 0.15s;
              transition-property: transform;
              transform: rotate(45deg);
            }
            &::before {
              opacity: 1;
              content: "";
              display: block;
              position: absolute;
              top: 12px;
              bottom: 0;
              right: 0;
              left: 2.5px;
              width: 30px;
              height: 2px;
              border-radius: 4px;
              background-color: var(--white);
              transition-timing-function: ease;
              transition-duration: 0.15s;
              transition-property: transform;
              transform: rotate(-45deg);
            }
          }
        }
      }
    }
    &__right {
      max-width: 100%;
      height: 100%;
      overflow-x: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      h1.title {
        color: var(--white);
        font-style: normal;
        font-weight: bold;
        font-size: 35px;
        line-height: 42px;
      }
      h2.subTitle {
        color: var(--lite-white);
        font-weight: 500;
        font-size: 25px;
        line-height: 30px;
        text-shadow: var(--shadow);
        margin-top: 21px;
      }
    }
  }
`;
