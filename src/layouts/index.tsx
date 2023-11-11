import { ProLayout } from '@ant-design/pro-layout'
import { Link, Outlet, useAppData, useLocation } from 'umi'

export default function Layout() {
  const { clientRoutes } = useAppData() // 拿到全局客户端路由
  const location = useLocation() // 拿到location对象
  return (
    <ProLayout
      route={clientRoutes[0]}
      location={location}
      title="UmiJS Starter"
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || menuItemProps.children) {
          return defaultDom
        }
        if (menuItemProps.path && location.pathname !== menuItemProps.path) {
          return (
            <Link to={menuItemProps.path} target={menuItemProps.target}>
              {defaultDom}
            </Link>
          )
        }
        return defaultDom
      }}
    >
      <Outlet />
    </ProLayout>
  )
}
