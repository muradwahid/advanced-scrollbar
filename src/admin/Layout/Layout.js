import Content from '../Parts/Content';
import Header from '../Parts/Header';

const Layout = ({ children, version }) => {
  const navigation = [
    { name: 'Welcome', href: '/welcome' },
    { name: 'Our Other Popular Plugins', href: '/popularPlugin' },
    { name: 'Scrollbar Settings', href: '/settings' },
    { name: 'Custom Cursor And Click Effects', href: '/custom-cursor' },
  ]

  return <>
      <div className="bplContainer">
        <Header navigation={navigation} version={version} />
        <Content>{children}</Content>
      </div>
    </>
}

export default Layout;