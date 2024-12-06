import { NavLink } from "react-router-dom";

export function Nabbar(){
    return(
        <nav className="bg-body-tertiary pt-3 pb-3">
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <NavLink to="try1">try1</NavLink>
                        </div>
                        <div className="col-4">
                            <NavLink to="try2">try2</NavLink>
                        </div>
                        <div className="col-4">
                            <NavLink to="try3">try3</NavLink>
                        </div>
                    </div>       
            </div>
        </nav>
    )
}