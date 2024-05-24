/* eslint-disable react/prop-types */

import qs from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon, selected }) => {
    //selected will be used for conditional class name rendering 
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    console.log(selected);
    const handleClick = () => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString()) // qs converts the query into object string 
        }
        const updatedQuery = { ...currentQuery, category: label } // in object form

        const url = qs.stringifyUrl({ // as browser search only supports string so we need to stringyfy 
            url: '/',
            query: updatedQuery,
        })
        navigate(url);

    }

    return (
        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-indigo-800 transition cursor-pointer ${selected ? 'border-b-indigo-800 text-indigo-800' : 'border-transparent text-neutral-500'}`}>
            <Icon size={26} />
            <div className="text-sm font-medium">{label}</div>
        </div>
    );
};

export default CategoryBox;