import UpdateModalContainer from "../Modal/UpdateModalContainer";
import { Navigation } from '../Navigation/Navigation';



const AppLayout = ({ children }) => {

    return (<>

        <UpdateModalContainer />
        {children}

    </>)
}


export default AppLayout;