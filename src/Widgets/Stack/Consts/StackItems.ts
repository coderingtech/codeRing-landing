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

// Java and C# brand glyphs (simple-icons < 7.x, CC0) - not present in newer
// simple-icons releases, so they are vendored here as path data.
const JAVA_PATH =
  "M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639";
const CSHARP_PATH =
  "M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zM9.426 7.12a5.55 5.55 0 011.985.38v1.181a4.5 4.5 0 00-2.25-.566 3.439 3.439 0 00-2.625 1.087 4.099 4.099 0 00-1.012 2.906 3.9 3.9 0 00.945 2.754 3.217 3.217 0 002.482 1.023 4.657 4.657 0 002.464-.634l-.004 1.08a5.543 5.543 0 01-2.625.555 4.211 4.211 0 01-3.228-1.297 4.793 4.793 0 01-1.212-3.409 5.021 5.021 0 011.365-3.663 4.631 4.631 0 013.473-1.392 5.55 5.55 0 01.12-.004 5.55 5.55 0 01.122 0zm5.863.155h.836l-.555 2.652h1.661l.567-2.652h.81l-.555 2.652 1.732-.004-.15.697H17.91l-.412 1.98h1.852l-.176.698h-1.816l-.58 2.625h-.83l.567-2.625h-1.65l-.555 2.625h-.81l.555-2.625h-1.74l.131-.698h1.748l.401-1.976h-1.826l.138-.697h1.826zm.142 3.345L15 12.6h1.673l.423-1.98z";

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
  { name: "C#", path: CSHARP_PATH, color: "#512bd4" },
  { name: "Java", path: JAVA_PATH, color: "#007396" },
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
