import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - RFC`;
    },[title])
}
export default useTitle;