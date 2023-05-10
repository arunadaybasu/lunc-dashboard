// assets
import { DashboardOutlined, LineChartOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    LineChartOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'dashboard-main',
            title: 'Dashboard',
            type: 'item',
            url: '/',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'supply-main',
            title: 'Supply',
            type: 'item',
            url: '/supply',
            icon: icons.LineChartOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
