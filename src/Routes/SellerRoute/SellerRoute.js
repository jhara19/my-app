import React, {
    useContext
} from "react";
import DashbordLoader from "../../Components/Shared/DashbordLoader/DashbordLoader";
import LoadingLoader from "../../Components/Shared/Loader/LoadingLoader";
import useAdmin from "../../Components/Shared/UseAdmin/useAdmin";
import UseSeller from "../../Components/Shared/UseSeller/UseSeller";
import {
    AuthContex
} from "../../GobalAuthProvaider/GobalAuthProvaider";

const SellerRoute = ({
    children
}) => {
    const {
        user,
        logOut
    } = useContext(AuthContex);
    const [isAdmin, adminloading] = useAdmin(user.email);
    const [isSeller, sellerLoading] = UseSeller(user.email);

    if (adminloading || sellerLoading) {
        return <DashbordLoader / > ;
    }

    if (isAdmin || isSeller) {
        return children;
    } else {
        logOut();
    }
};

export default SellerRoute;