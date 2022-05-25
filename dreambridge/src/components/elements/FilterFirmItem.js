function FilterListItem(props){
    const { firm } = props

    return (
        <>
            <li className='filter-item'>
                {firm.firm}
            </li>
        </>
    )

}

export default FilterListItem
