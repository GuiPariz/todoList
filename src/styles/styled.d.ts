import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: {
        input: string;
        task: string;
        body: string;
        header: string;
        shadowD: string;
        shadowL: string;
      };
      gray: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
      };
      base: {
        danger: string;
        secundary: string;
        purple_dark: string;
        primary: string;
        blue_dark: string;
        outline: string;
        text:string;
      };
    };
  }
}
