import E from "wangeditor";
import { onMounted, onUnmounted } from "@vue/runtime-core";
import xss from "xss";
import { useLocalStorage } from "@u/local-storage.js";
import { useInfoNotice } from "@u/notice.js";
import { useDebouce } from "@u/common.js";

export const useEditor = (id = "editor") => {
  let editor = null;
  const [draft] = useLocalStorage("draft");
  onMounted(() => {
    editor = new E(`#${id}`);
    editor.config.zIndex = 0;
    editor.config.height = 600;
    editor.config.onchange = useDebouce(newHtml => {
      draft.value = xss(newHtml);
      useInfoNotice({
        message: "草稿",
        description: "已缓存到本地"
      });
    }, 3000);
    editor.create();
    editor.txt.html(draft.value);
  });
  onUnmounted(() => editor.destroy());
  return editor;
};
