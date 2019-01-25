import Vue, { PluginObject, VueConstructor } from 'vue';
import MenuItem from './menuItem/index';
import Col from './col/index';
import Button from './button/index';
import Menu from './menu/index';
import MenuItemGroup from './menuItemGroup/index';
import Row from './row/index';
import SubMenu from './subMenu/index';
import Transfer from './transfer/index';

const components:{[key: string]: VueConstructor} = {
    Button,
    Col,
    Menu,
    MenuItem,
    MenuItemGroup,
    Row,
    SubMenu,
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
