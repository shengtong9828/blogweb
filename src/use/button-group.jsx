import { defineComponent } from "vue";

export const useButtonGroup = (group = []) => {
  return defineComponent({
    setup() {
      const buttonGroup = group.map(item => (
        <a-button style={{ margin: "8px" }} onClick={item.handle}>
          {" "}
          {item.icon} {item.text}{" "}
        </a-button>
      ));
      return () => <section>{buttonGroup}</section>;
    }
  });
};
