import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

import "./ToggleTheme.css";

const ToggleTheme = () => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <div className="toggle-theme">
      <button
        className="toggle-theme_button"
        data-active={colorMode === "light"}
        onClick={setColorMode.bind(null, "light")}
      >
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18.5" cy="18.5" r="18.5" fill="currentColor" />
          <g clip-path="url(#clip0_83_1512)">
            <path
              d="M18.4997 15.625C20.0809 15.625 21.3747 16.9188 21.3747 18.5C21.3747 20.0813 20.0809 21.375 18.4997 21.375C16.9184 21.375 15.6247 20.0813 15.6247 18.5C15.6247 16.9188 16.9184 15.625 18.4997 15.625ZM18.4997 13.7083C15.8547 13.7083 13.708 15.855 13.708 18.5C13.708 21.145 15.8547 23.2917 18.4997 23.2917C21.1447 23.2917 23.2913 21.145 23.2913 18.5C23.2913 15.855 21.1447 13.7083 18.4997 13.7083ZM8.91634 19.4583H10.833C11.3601 19.4583 11.7913 19.0271 11.7913 18.5C11.7913 17.9729 11.3601 17.5417 10.833 17.5417H8.91634C8.38926 17.5417 7.95801 17.9729 7.95801 18.5C7.95801 19.0271 8.38926 19.4583 8.91634 19.4583ZM26.1663 19.4583H28.083C28.6101 19.4583 29.0413 19.0271 29.0413 18.5C29.0413 17.9729 28.6101 17.5417 28.083 17.5417H26.1663C25.6393 17.5417 25.208 17.9729 25.208 18.5C25.208 19.0271 25.6393 19.4583 26.1663 19.4583ZM17.5413 8.91668V10.8333C17.5413 11.3604 17.9726 11.7917 18.4997 11.7917C19.0268 11.7917 19.458 11.3604 19.458 10.8333V8.91668C19.458 8.38959 19.0268 7.95834 18.4997 7.95834C17.9726 7.95834 17.5413 8.38959 17.5413 8.91668ZM17.5413 26.1667V28.0833C17.5413 28.6104 17.9726 29.0417 18.4997 29.0417C19.0268 29.0417 19.458 28.6104 19.458 28.0833V26.1667C19.458 25.6396 19.0268 25.2083 18.4997 25.2083C17.9726 25.2083 17.5413 25.6396 17.5413 26.1667ZM12.7401 11.3892C12.3663 11.0154 11.753 11.0154 11.3888 11.3892C11.0151 11.7629 11.0151 12.3763 11.3888 12.7404L12.4047 13.7563C12.7784 14.13 13.3918 14.13 13.7559 13.7563C14.1201 13.3825 14.1297 12.7692 13.7559 12.405L12.7401 11.3892ZM24.5947 23.2438C24.2209 22.87 23.6076 22.87 23.2434 23.2438C22.8697 23.6175 22.8697 24.2308 23.2434 24.595L24.2593 25.6108C24.633 25.9846 25.2463 25.9846 25.6105 25.6108C25.9843 25.2371 25.9843 24.6238 25.6105 24.2596L24.5947 23.2438ZM25.6105 12.7404C25.9843 12.3667 25.9843 11.7533 25.6105 11.3892C25.2368 11.0154 24.6234 11.0154 24.2593 11.3892L23.2434 12.405C22.8697 12.7788 22.8697 13.3921 23.2434 13.7563C23.6172 14.1204 24.2305 14.13 24.5947 13.7563L25.6105 12.7404ZM13.7559 24.595C14.1297 24.2213 14.1297 23.6079 13.7559 23.2438C13.3822 22.87 12.7688 22.87 12.4047 23.2438L11.3888 24.2596C11.0151 24.6333 11.0151 25.2467 11.3888 25.6108C11.7626 25.975 12.3759 25.9846 12.7401 25.6108L13.7559 24.595Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_83_1512">
              <rect
                width="23"
                height="23"
                fill="currentColor"
                transform="translate(7 7)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <button
        className="toggle-theme_button"
        data-active={colorMode === "dark"}
        onClick={setColorMode.bind(null, "dark")}
      >
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18.5" cy="18.5" r="18.5" fill="currentColor" />
          <path
            d="M15.9796 12.2804C15.8071 12.8938 15.7208 13.5358 15.7208 14.1875C15.7208 18.0975 18.9025 21.2792 22.8125 21.2792C23.4642 21.2792 24.1062 21.1929 24.7196 21.0204C23.7229 23.4738 21.3079 25.2083 18.5 25.2083C14.8008 25.2083 11.7917 22.1992 11.7917 18.5C11.7917 15.6921 13.5262 13.2771 15.9796 12.2804ZM18.5 9.875C13.7371 9.875 9.875 13.7371 9.875 18.5C9.875 23.2629 13.7371 27.125 18.5 27.125C23.2629 27.125 27.125 23.2629 27.125 18.5C27.125 18.0592 27.0867 17.6183 27.0292 17.1967C26.09 18.5096 24.5567 19.3625 22.8125 19.3625C19.9567 19.3625 17.6375 17.0433 17.6375 14.1875C17.6375 12.4529 18.4904 10.91 19.8033 9.97083C19.3817 9.91333 18.9408 9.875 18.5 9.875Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

export default ToggleTheme;
