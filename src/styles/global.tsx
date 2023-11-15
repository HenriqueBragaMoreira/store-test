"use client";
import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    :root {
        --primary: #FFFFFF;
        --product-color: #2C2C2C;
        --value-color: #373737;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 14px;
        
    }

    a {
        text-decoration: none;
    }

    body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-track {
  background: white;
}

body::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 20px;
}
`;

export const GlobalStyles = () => {
  return <Globals />;
};
