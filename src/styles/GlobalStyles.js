import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
:root {

    /* KEYFRAMES */
    @keyframes fade-in-from-top {
    0% {
        opacity: 0;
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
  }

  @keyframes fade-in-from-left {
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
  }

  @keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  }


   /* */
   --fade-speed: 0.4s;
  /* UI-colors: */
  --footer-text: rgb(255,255,255,0.15);
  --header-left: #3066BE; //#0369a1 #0369a1
  --header-right: #622DB9;
  --header-height: 75px;

  // panel  
    --panel_bg: #2B363C; //background color

  // Sidebar
  --sb_bg: #10171A;
  --sb_mb_opacity: rgba(255,255,255,0.4); //menu buttons color
  --sb_mb_hover_bg: #2b363b:  
  --sb_mb_hover_color: #fff;
  --sb_width: 85px; 

  //Logo-text
  --LT_01:  #622DB9;
  --LT_02: #622DB9;


  /* Utility functions for texts */
  .u-italic {
    font-style: italic;
  }

  .u_accent {
    color: #fff ;
  }

  .u-bold {
    font-weight: 500;
  }

  .u-bolder {
    font-weight: 700;
  }

  .u-underline {
    text-decoration: underline;
  }
  



  &, &.light-mode {
  
    /* Slate */
    --color-slate-50: rgb(248 250 252);
    --color-slate-100: rgb(241 245 249);
    --color-slate-200:	rgb(226 232 240);
    --color-slate-300:	rgb(203 213 225);
    --color-slate-400:	rgb(148 163 184);
    --color-slate-500:	rgb(100 116 139);
    --color-slate-600:	rgb(71 85 105);
    --color-slate-700:	rgb(51 65 85);
    --color-slate-800:	rgb(30 41 59);
    --color-slate-900:	rgb(15 23 42);
    --color-slate-950:	rgb(2 6 23);
  
    /* Indigo */
    --color-brand-50: #eef2ff;
    --color-brand-100: #e0e7ff;
    --color-brand-200: #c7d2fe;
    --color-brand-300: #b3bde4;
    --color-brand-400: #8b91ea;
    --color-brand-500: #6366f1;
    --color-brand-600: #4f46e5;
    --color-brand-700: #4338ca;
    --color-brand-800: #3730a3;
    --color-brand-900: #312e81;
  
    /* Brown */
    --color-DW-50: #eaded6;
    --color-DW-100: #dfcdc0;
    --color-DW-200: #dac4b5;
    --color-DW-300: #cfb39f;
    --color-DW-400: #c4a289;
    --color-DW-500: #b99173;
    --color-DW-600: #a97753;
    --color-DW-700: #936849;
    --color-DW-800: #725038;
    --color-DW-900: #513928;
  
    /* Grey */
    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;
  
    --color-blue-100: #e0f2fe;
    --color-blue-700: #0369a1;
    --color-green-100: #dcfce7;
    --color-green-700: #15803d;
    --color-yellow-100: #fef9c3;
    --color-yellow-700: #a16207;
    --color-silver-100: #e5e7eb;
    --color-silver-700: #374151;
    --color-indigo-100: #e0e7ff;
    --color-indigo-700: #4338ca;
  
    --color-orange-200: rgb(254 215 170);
    --color-orange-300: rgb(253 186 116);
  
    --color-red-100: #fee2e2;
    --color-red-200: rgb(254 202 202);
    --color-red-300: rgb(252 165 165);
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  

    --image-grayscale: 0;
  --image-opacity: 100%;
  }
  
  &.dark-mode {
    --color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
  }
  
  /* Indigo */
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;
  
  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;


}
/* RESET DEFAULT CSS STYLES */
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}

html {
  font-size: 62.5%;
}

body {

  font-family: "Poppins", sans-serif;
  color: var(--sb_bg);
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  background-color: var(--color-grey-200);
  scrollbar-width: none; 
}

button {
    border: initial; /* reset to the state specified by CSS specification meaning, the state before the user browser agent makes changes. */
    background-color: initial;
    color: inherit;
    font: inherit;
    outline: none ; /* make sure there is a visual indicator for focus state */
}  
  
ul, ol {
  list-style-type: none;
}

input,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 1  px solid var(--header-left);
  outline-offset: -1px;
}


/* Parent selector */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}


`;

export default GlobalStyles;

/*
FOR DARK MODE

--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
*/
