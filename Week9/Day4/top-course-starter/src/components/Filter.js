export default function(props)
{
    const filterData = props.filterData.map((filter) => <button key={filter.id}>{filter.title}</button>);
    return (
        <div>
            {filterData}
        </div>
    )
}