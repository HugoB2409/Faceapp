import React from 'react';


const Rank = ({name, entries}) => {
    return(
        <div>
            <div className='white f3'>
                {`${name}, ton nombre d'enter est ...`}
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;