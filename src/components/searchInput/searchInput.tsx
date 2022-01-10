import React from "react";
import "./searchInput.scss";

interface IProps {
    onChange: any;
    value?: string;
    placeholder?: string;
    style?: any;
    id?: string
}

const SearchInput = (props: IProps) => {
    return (
        <div className="SearchInput d-flex align-items-center">
            <div className="search-icon"
                id={`${props.id}-icon-div`}>
            </div>
            <input
                id={`${props.id}-input`}
                type="text"
                value={props.value}
                placeholder={"Search"}
                onChange={props.onChange}
                style={props.style}
            />
        </div>
    );
};

export default SearchInput;
