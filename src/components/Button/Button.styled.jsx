import styled from '@emotion/styled';

export const BtnLoadMore = styled.button`
 display: block;
    margin: 0 auto 20px auto;
    padding: 5px;
    width: 130px;
    height: 35px;
    text-align: center;
    font-size: 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border-style: none;
    color: #ffffff;
    background: #F0C27B;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #4B1248, #F0C27B);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #4B1248, #F0C27B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    &:hover,
    &:focus {
      transform: scale(1.1);
      transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
    }
  }`;
