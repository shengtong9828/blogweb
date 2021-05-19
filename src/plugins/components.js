import {
  Button,
  Avatar,
  Tag,
  Card,
  Pagination,
  Timeline,
  Form,
  Input,
  Radio
} from "ant-design-vue";

const components = [
  Button,
  Avatar,
  Tag,
  Card,
  Pagination,
  Timeline,
  Form,
  Input,
  Radio
];
export const componentsPlugin = app => {
  components.forEach(app.use, app);
};
