import React, { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';

//we create types for each component and 
//this types specify what props needs to be passed to this component
type Props = {
    children?: React.ReactNode
  };
const Layout:React.FC<Props> = ({children}) => {
    
    return (
    <>
        <Navbar />
        <main>{children}</main>

    </>
    );
};
export default Layout;