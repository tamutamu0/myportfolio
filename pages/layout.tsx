import { ReactNode } from "react";
import Header from "../components/Header"

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};

type Props = {
    children?: ReactNode;
};

export default Layout;