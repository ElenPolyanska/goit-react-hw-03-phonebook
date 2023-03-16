import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ stateFilter, onChange }) => {
    return (
        <Label >Find contacts by name
            <Input onChange={onChange} type="text" value={stateFilter} />
        </Label>
    )
};

Filter.propTypes = {
    stateFilter: PropTypes.string,
    onChange: PropTypes.func,
}