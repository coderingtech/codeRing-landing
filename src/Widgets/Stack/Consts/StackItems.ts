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

export interface StackItem {
  name: string;
  path: string;
  color: string;
}

const LIGHT = "#e1e1e1";

const StackItems: StackItem[] = [
  { name: "TypeScript", path: siTypescript.path, color: siTypescript.hex },
  { name: "JavaScript", path: siJavascript.path, color: siJavascript.hex },
  { name: "Python", path: siPython.path, color: siPython.hex },
  { name: "Go", path: siGo.path, color: siGo.hex },
  { name: "Rust", path: siRust.path, color: LIGHT },
  { name: "C++", path: siCplusplus.path, color: siCplusplus.hex },
  { name: "Ruby", path: siRuby.path, color: siRuby.hex },
  { name: "PHP", path: siPhp.path, color: siPhp.hex },
  { name: "Swift", path: siSwift.path, color: siSwift.hex },
  { name: "Kotlin", path: siKotlin.path, color: siKotlin.hex },
  { name: "React", path: siReact.path, color: siReact.hex },
  { name: "Next.js", path: siNextdotjs.path, color: LIGHT },
  { name: "Vue.js", path: siVuedotjs.path, color: siVuedotjs.hex },
  { name: "Nuxt.js", path: siNuxt.path, color: siNuxt.hex },
  { name: "Angular", path: siAngular.path, color: "#dd0031" },
  { name: "Svelte", path: siSvelte.path, color: siSvelte.hex },
  { name: "Tailwind CSS", path: siTailwindcss.path, color: siTailwindcss.hex },
  { name: "HTML5", path: siHtml5.path, color: siHtml5.hex },
  { name: "Node.js", path: siNodedotjs.path, color: siNodedotjs.hex },
  { name: "NestJS", path: siNestjs.path, color: siNestjs.hex },
  { name: "Express", path: siExpress.path, color: LIGHT },
  { name: "FastAPI", path: siFastapi.path, color: siFastapi.hex },
  { name: "Django", path: siDjango.path, color: "#44b78b" },
  { name: "Ruby on Rails", path: siRubyonrails.path, color: siRubyonrails.hex },
  { name: "Spring Boot", path: siSpringboot.path, color: siSpringboot.hex },
];

export default StackItems;
