import { TextField } from "@mui/material"
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../features/tasks/tasksSlice";

const SearchBar = () => {
    const dispatch = useDispatch();
    function handleSearch(e) {
        dispatch(setSearchTerm(e.target.value));
    }
    return (
        <TextField
            id="outlined-basic"
            label="Search"    
            variant="outlined"
            onChange={handleSearch}
        />
    )
}

export default SearchBar;