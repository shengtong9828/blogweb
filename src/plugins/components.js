import {
  Button,
  Avatar,
  Tag,
  Card,
  Pagination,
  Timeline,
  Form,
  Input,
  Radio,
  Table
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
  Radio,
  Table
];
export const componentsPlugin = app => {
  components.forEach(app.use, app);
};
