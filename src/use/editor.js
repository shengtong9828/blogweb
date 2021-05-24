import E from "wangeditor";
import { onMounted, onUnmounted } from "@vue/runtime-core";
import xss from "xss";
import { useLocalStorage } from "@u/local-storage.js";
import { useDebouce } from "@u/common.js";

export const useEditor = (id = "editor") => {
  let editor = new E(`#${id}`);
  const [draft] = useLocalStorage("draft");
  onMounted(() => {
    editor.config.zIndex = 0;
    editor.config.height = 600;
    editor.config.onchange = useDebouce((newHtml) => {
      draft.value = xss(newHtml);
    }, 500);
    editor.create();
    editor.txt.html(draft.value);
  });
  onUnmounted(() => editor.destroy());
  return editor;
};
