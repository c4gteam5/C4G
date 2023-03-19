import {clearVolunteer, searchVolunteer, useVolunteers} from "../../context/volunteer/volunteerState";

const VolunteerSearch = () => {
    const volunteerDispatch = useVolunteers()[1];

    const onChange = (e) => {
        if (e.target.value !== '') {
            searchVolunteer(volunteerDispatch, e.target.value);
        } else {
            clearVolunteer(volunteerDispatch);
        }
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type='text' placeholder='Search by first name...' onChange={onChange} />
        </form>
    );
};

export default VolunteerSearch;