import Accessibility from "./Accessibility";
import CanliDestek from "./CanliDestek"
import {CrosshairCursor,HoverCursor} from "./Cursor";
import ScrollBehaviour from "./ScrollBehaviour"

const Additionals = ()=>{
    return(
    <>
        <CanliDestek />
        <ScrollBehaviour />
        <Accessibility />
        {/* <CrosshairCursor />
        <HoverCursor /> */}
    </>)
}

export default Additionals;