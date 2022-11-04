import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: "Open Sans", sans-serif;
  :link {
    text-decoration: none !important;
  }

  p {
    margin: 0
  }
}

html {
  font-size: 10px;
}

ul, li {
  list-style: none;
}
button {
  cursor: pointer;
  border: none;
}

body {
  /* overflow: hidden; */
  background: ${({ theme }) => theme.colors.white};
  -webkit-font-smoothing: antialiased;

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  select {
    -webkit-appearance: none;
    appearance: none;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
}

:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: #e74c3c;
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-toast-width: 320px;
  --toastify-toast-background: #fff;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;

  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  //Used only for colored theme
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;

  // Used when no type is provided
  // toast("hello")
  --toastify-color-progress-light: linear-gradient(
    to right,
    #4cd964,
    #5ac8fa,
    #007aff,
    #34aadc,
    #5856d6,
    #ff2d55
  );
  // Used when no type is provided
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
}

.collapsible .content {
  padding: 6px;
  background-color: #eeeeee;
}

.collapsible .header {
    background-color: #dddddd;
    padding: 6px;
    cursor: pointer;
}

.active-link-final {
  color: white;
  display: flex;
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 0.15);
  align-items: center;
  justify-content: flex-start;
  font-size: 1.8rem;
  color: #9d9d9d;
  text-decoration: none; 
  padding-left: 2rem;

  &:hover {
    background: #252626;
  }
}

.inactive-link-final {
  color: white;
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.8rem;
  text-decoration: none; 
  color: #9d9d9d;
  padding-left: 2rem;

  &:hover {
    background: #252626;
  }
}

.react-select {
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 14px;

  :hover {
    border-color: none !important;
  }
}

.css-1s2u09g-control{
  padding: 2px 2px !important;
  border: 1px solid !important;
  border-color: ${({ theme }) => theme.colors.gray300} !important;
  border-radius: 5px !important;

  :hover {
    border-color: none !important;
  }
}

.css-1pahdxg-control {
  padding: 2px 2px !important;
  border: 1px solid !important;
  border-color: ${({ theme }) => theme.colors.gray300} !important;
  border-radius: 5px !important;
  box-shadow: none !important;

  :hover {
    border-color: none !important;
  }
}

`;

export default GlobalStyle;
