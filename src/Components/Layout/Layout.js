import React,{Component} from 'react';
import Aux from "../../hoc/Auxx";
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import "./Layout.css"
// const Layout=(props)=>(
//     <Aux>

//     <div>
//         <Toolbar/>
//         <SideDrawer/>
//         <main className="content">
//             {props.children}
//         </main>
//     </div>
//     </Aux>
// );
// export default Layout;
class Layout extends Component {
    state = { 
        showSideDrawer:false
     }
    sideDrawerHandler=()=>{
        this.setState({showSideDrawer:false})
    }
    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }
    render() { 
        return ( 
            <Aux>

                 <div>
                     <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                     <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerHandler}/>
                     <main className="content">
                         {this.props.children}
                     </main>
                 </div>
                </Aux>
         );
    }
}
 
export default Layout;