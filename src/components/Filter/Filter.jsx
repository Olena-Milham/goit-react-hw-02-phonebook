import PropTypes from 'prop-types';
// import {  Field } from 'formik';
export const Filter =({value, onChange})=>{
    return (
        <div>
             <h3>Find contacts by name</h3>
             <input type="text" value={value} onChange={onChange} />
        </div>
       
    );
};

Filter.propTypes={
value:PropTypes.string.isRequired,
onChange:PropTypes.func.isRequired,
};