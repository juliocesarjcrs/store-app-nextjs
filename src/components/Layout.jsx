import Navbar from '@/components/Navbar';
const Layout =({children}) => {
  return(
    <div>
      <Navbar />
      <main>{children}</main>
      <footer>My footer</footer>
    </div>
  )

}
export default Layout;