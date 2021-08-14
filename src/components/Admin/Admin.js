import React from 'react';
import './Admin.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBookMedical, faList, faStar, faPlus,  faUserPlus, faTasks} from '@fortawesome/free-solid-svg-icons'
import Book from './Book/Book';
import BookingList from './BookingList/BookingList';
import Review from './Review/Review';
import OrderList from './OrderList/OrderList';
import AddService from './AddService/AddService';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageServices from './ManageServices/ManageServices';



const Admin = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <Router>
                        <div className="col-md-2 col-4 side-bar pt-5 d-flex flex-column ">
                                
                            <nav className="">
                                <ul>
                                    <li>
                                    <Link to="/admin/book/:id"><FontAwesomeIcon icon={faBookMedical} /> Book</Link>
                                    </li>
                                    <li>
                                    <Link to="/admin/bookingList"><FontAwesomeIcon icon={faList} />Booking List</Link>
                                    </li>
                                    <li>
                                    <Link to="/admin/review"><FontAwesomeIcon icon={faStar} />Review</Link>
                                    </li>
                                    
                                    
                                    <li>
                                    <Link to="/admin/makeAdmin"><FontAwesomeIcon icon={faUserPlus} />Make Admin</Link>
                                    </li>
                                    <li>
                                    <Link to="/admin/orderList"><FontAwesomeIcon icon={faList} />Order List</Link>
                                    </li>
                                    <li>
                                    <Link to="/admin/addService"><FontAwesomeIcon icon={faPlus} />Add Service</Link>
                                    </li>
                                    <li>
                                    <Link to="/admin/manageServices"><FontAwesomeIcon icon={faTasks} />Manage Services</Link>
                                    </li>
                                </ul>
                            </nav>

                            <div className="logout">
                                <Link to="">
                                    <button className="btn btn-primary">Logout</button>
                                </Link>
                            </div>
                       
                        </div>


                        <Switch>
                            <div className="col-md-10 col-8 side-bar-content p-5">
                                
                                <Route path="/admin/book/:id">
                                    <Book/>
                                </Route>
                                <Route path="/admin/bookingList">
                                    <BookingList/>
                                </Route>
                                <Route path="/admin/review">
                                    <Review/>
                                </Route>
                                <Route path="/admin/orderList">
                                    <OrderList/>
                                </Route>
                                <Route path="/admin/addService">
                                    <AddService/>
                                </Route>
                                <Route path="/admin/makeAdmin">
                                    <MakeAdmin/>
                                </Route>
                                <Route path="/admin/manageServices">
                                    <ManageServices/>
                                </Route>

                            </div>

                        </Switch>

                    </Router>

                </div>
            </div>
        </div>
    );
};

export default Admin;