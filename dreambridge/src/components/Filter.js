import { Nav, Dropdown, Container} from "react-bootstrap";
import Context from '../context/Context';
import { useContext } from 'react';
import FilterListItem from "./FilterFirmItem";
import FilterStateItem from "./FilterStateItem";

function Filter(){
    let context = useContext(Context)

    return (
        <>
        <Container className="row-search-and-filter">
        <Nav className="input-group mb-3">
            <input type="text" placeholder="Search for Keyword" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button className="btn btn-secondary" type="button" id="button-addon2">Submit</button>
        </Nav>
        <Nav className="justify-content-end">
            <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
            Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="filter-btn">
                        State
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">{context.listOfStates.map((state) => {
                            return <FilterStateItem state={state}/>
                        })}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="filter-btn">
                        Firm
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-2">{context.listOfFirms.map((firm) => {
                            return <FilterListItem firm={firm}/>
                        })}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Dropdown.Menu>
            </Dropdown>
        </Nav>
        </Container>
        </>
    )
}

export default Filter;