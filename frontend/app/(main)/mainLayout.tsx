
import {auth} from '@/auth';
const mainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  async function getServerSideProps() {
    const session = await auth();
  }
  return (
    <div>
     {children}
    </div>
  )
}

export default mainLayout
