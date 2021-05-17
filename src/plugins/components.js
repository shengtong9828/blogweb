import { Button, Avatar, Tag, Card } from "ant-design-vue";

const components = [Button, Avatar, Tag, Card];
export const componentsPlugin = app => {
  components.forEach(app.use, app);
};
