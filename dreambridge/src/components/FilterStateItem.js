function FilterStateItem(props){
    const { state } = props
    return (
        <>
            <li className="filter-item">
                {state.state_abrv}
            </li>
        </>
    )
}

export default FilterStateItem