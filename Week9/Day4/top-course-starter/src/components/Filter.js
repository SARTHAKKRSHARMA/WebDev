export default function(props)
{
    let category = props.category;
    let setCategory = props.setCategory;
    function filterHandler(title) 
    {
        setCategory(title);   
    }
    const filterData = props.filterData.map((filter) => <button onClick={() => filterHandler(filter.title)} className={`cursor-pointer text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 ${category === filter.title ? " bg-opacity-60 border-white" : " bg-opacity-40 border-transparent"}`} key={filter.id}>{filter.title}</button>);
    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto py-4 justify-center items-center">
            {filterData}
        </div>
    )
}