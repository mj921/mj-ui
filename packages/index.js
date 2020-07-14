import Button from "./button/index";
import Checkbox from "./checkbox/index";
import Col from "./col/index";
import Menu from "./menu/index";
import Input from "./input/index";
import DatePicker from "./datepicker/index";
import MenuItem from "./menuItem/index";
import MenuItemGroup from "./menuItemGroup/index";
import Option from "./option/index";
import Radio from "./radio/index";
import RadioGroup from "./radioGroup/index";
import Row from "./row/index";
import Select from "./select/index";
import SubMenu from "./subMenu/index";
import Switch from "./switch/index";
import Table from "./table/index";
import TableColumn from "./tableColumn/index";
import Tag from "./tag/index";
import Transfer from "./transfer/index";
import Dialog from "./dialog";

const components = {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Dialog,
  Input,
  Menu,
  MenuItem,
  MenuItemGroup,
  Option,
  Radio,
  RadioGroup,
  Row,
  Select,
  SubMenu,
  Switch,
  Table,
  TableColumn,
  Tag,
  Transfer
};
export default {
  install(Vue) {
    Object.keys(components).forEach(key => {
      (function(k) {
        Vue.component(components[k].name, components[k]);
      })(key);
    });
  },
  ...components
};
