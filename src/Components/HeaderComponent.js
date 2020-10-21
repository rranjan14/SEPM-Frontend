import React ,{Component} from 'react';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,NavbarText, DropdownItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
     constructor(props){
         super(props);
         this.state ={
             isNavOpen: false
          

         }
         this.toggleNav = this.toggleNav.bind(this);
       

     }
     toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
  

     render(){
        return (
           <React.Fragment>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Aceat</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isNavOpen} navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink className ='nav-link' to ='/home'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className='nav-link' to ='/courses'>Courses</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Upcoming Exams
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                        <NavLink className ='nav-link' to ='/engineering'>Engineering</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                        <NavLink className ='nav-link' to ='/medical'>Medical</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                        <NavLink className ='nav-link' to ='/law'>Law</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                        <NavLink className ='nav-link' to ='/commerce'>Commerce</NavLink>
                        </DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem>
                        <NavLink className ='nav-link' to ='/others'>Others</NavLink>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
    
                </Collapse>
              </Navbar>
            
           </React.Fragment>
          );
     }
}
                                
                       