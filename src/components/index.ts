import Vue, { PluginObject, VueConstructor } from 'vue';
import MenuItem from './menuItem/index';
import Col from './col/index';
import Button from './button/index';
import Menu from './menu/index';
import MenuItemGroup from './menuItemGroup/index';
import Option from './option/index';
import Radio from './radio/index';
import RadioGroup from './radioGroup/index';
import Row from './row/index';
import Select from './select/index';
import SubMenu from './subMenu/index';
import Switch from './switch/index';
import Table from './table/index';
import TableColumn from './tableColumn/index';
import Transfer from './transfer/index';

const components:{[key: string]: VueConstructor} = {
    Button,
    Col,
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
    Transfer
}
const MjUi:PluginObject<Vue> = {
    install(Vue: VueConstructor) {
        Object.keys(components).forEach(key => {
            (function (k) {
                Vue.component(components[k].name, components[k])
            })(key);
        })
    }
}
export default MjUi;
