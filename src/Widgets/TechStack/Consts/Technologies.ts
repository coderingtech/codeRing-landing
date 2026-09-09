import {
  siAngular,
  siCplusplus,
  siDjango,
  siExpress,
  siFastapi,
  siGo,
  siHtml5,
  siJavascript,
  siKotlin,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siNuxt,
  siPhp,
  siPython,
  siReact,
  siRuby,
  siRubyonrails,
  siRust,
  siSpringboot,
  siSvelte,
  siSwift,
  siTailwindcss,
  siTypescript,
  siVuedotjs,
} from "simple-icons";

// Светлый цвет для брендов, чей официальный логотип тёмный (нечитаем на тёмном фоне)
const LIGHT = "#e1e1e1";

export interface TechSvgPath {
  d: string;
  fill?: string;
}

export interface Technology {
  label: string;
  viewBox: string;
  color?: string;
  paths: TechSvgPath[];
}

const simpleIcon = (label: string, hex: string, path: string): Technology => ({
  label,
  viewBox: "0 0 24 24",
  color: hex,
  paths: [{ d: path }],
});

const javaLogo: Technology = {
  label: "Java",
  viewBox: "0 0 128 128",
  paths: [
    {
      fill: "#0074bd",
      d: "M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z",
    },
    {
      fill: "#ea2d2e",
      d: "M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z",
    },
    {
      fill: "#0074bd",
      d: "M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z",
    },
    {
      fill: "#ea2d2e",
      d: "M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z",
    },
    {
      fill: "#0074bd",
      d: "M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z",
    },
  ],
};

const csharpLogo: Technology = {
  label: "C#",
  viewBox: "0 0 128 128",
  paths: [
    {
      fill: "#512bd4",
      d: "M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z",
    },
    {
      fill: "#512bd4",
      d: "M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z",
    },
    {
      fill: "#ffffff",
      d: "M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z",
    },
  ],
};

export const technologies: Technology[] = [
  simpleIcon("TypeScript", "#3178c6", siTypescript.path),
  simpleIcon("JavaScript", "#f7df1e", siJavascript.path),
  simpleIcon("Python", "#3776ab", siPython.path),
  simpleIcon("Go", "#00add8", siGo.path),
  simpleIcon("Rust", LIGHT, siRust.path),
  simpleIcon("C++", "#00599c", siCplusplus.path),
  csharpLogo,
  javaLogo,
  simpleIcon("Ruby", "#cc342d", siRuby.path),
  simpleIcon("PHP", "#777bb4", siPhp.path),
  simpleIcon("Swift", "#f05138", siSwift.path),
  simpleIcon("Kotlin", "#7f52ff", siKotlin.path),
  simpleIcon("React", "#61dafb", siReact.path),
  simpleIcon("Next.js", LIGHT, siNextdotjs.path),
  simpleIcon("Vue.js", "#4fc08d", siVuedotjs.path),
  simpleIcon("Nuxt", "#00dc82", siNuxt.path),
  simpleIcon("Angular", "#dd0031", siAngular.path),
  simpleIcon("Svelte", "#ff3e00", siSvelte.path),
  simpleIcon("Tailwind CSS", "#06b6d4", siTailwindcss.path),
  simpleIcon("HTML5", "#e34f26", siHtml5.path),
  simpleIcon("Node.js", "#5fa04e", siNodedotjs.path),
  simpleIcon("NestJS", "#e0234e", siNestjs.path),
  simpleIcon("Express", LIGHT, siExpress.path),
  simpleIcon("FastAPI", "#009688", siFastapi.path),
  simpleIcon("Django", LIGHT, siDjango.path),
  simpleIcon("Ruby on Rails", "#d30001", siRubyonrails.path),
  simpleIcon("Spring Boot", "#6db33f", siSpringboot.path),
];
