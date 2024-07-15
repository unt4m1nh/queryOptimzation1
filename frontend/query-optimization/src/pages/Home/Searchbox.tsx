import React from "react"

interface ISearchBoxProps {
    onSearchInputChange: (value: string) => void;
}

const SearchBox = (props: ISearchBoxProps) => {

    return (
        <div className="search-box">
            <input className="input-search" type="text" placeholder="Enter product name" onChange={(e) => {
                props.onSearchInputChange(e.target.value);
            }} />
        </div>
    )
}

export default SearchBox