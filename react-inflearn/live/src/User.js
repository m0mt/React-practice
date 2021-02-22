import propTypes from 'prop-types';

User.propTypes = {
    male: propTypes.bool.isRequired,
    age: propTypes.number,
    type: propTypes.oneOf(['gold', 'silver', 'bronze']),
    onChangeName: propTypes.func,
    onChangeTitle: propTypes.func.isRequired,
};

export default function User({ type, age, male, onChangeName, onChangeTitle }) {
    function onClick1() {
        const msg = `type: ${type}, age: ${age ? age : '알 수 없음'}`;
        console.log(msg, { color: type === 'gold' ? 'red' : 'black' });
        // ...
    }
    function onClick2(name, title) {
        if (onChangeName) {
            onChangeName(name);
        }
        onChangeTitle(title);
        male ? goMalePage() : goFemalePage();
        // ...
    }
    // ...
    return null;
}

function goMalePage() {}
function goFemalePage() {}