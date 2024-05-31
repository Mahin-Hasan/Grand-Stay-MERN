import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import { getRole } from "../api/auth"


const useRole = () => {
    const { user, loading } = useAuth()

    const { data: role, isLoading } = useQuery({
        enabled: !loading && !!user?.email, //enables when loading is false | !! convertes the value to boolean. i.e if email exist it will return true or else it will return false
        queryFn: async () => await getRole(user?.email),
        queryKey: ['role'],

    })
    return [role, isLoading]
}

export default useRole


















// before converting to tan stack
// import { useEffect, useState } from "react"
// import useAuth from "./useAuth"
// import { getRole } from "../api/auth"


// const useRole = () => {
//     const { user } = useAuth()
//     const [role, setRole] = useState(null)
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         // setLoading(true)
//         getRole(user?.email).then(data => {
//             setRole(data)
//             setLoading(false)
//         })
//     }, [user])

//     return [role, loading]
// }

// export default useRole