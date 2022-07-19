import styled from '@emotion/styled';

export const SearchBarHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: #f0c27b; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4b1248,
    #f0c27b
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4b1248,
    #f0c27b
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: 50px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 60px;
  height: 60px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  }

  &:hover {
    opacity: 1;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 30px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 5px 12px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
