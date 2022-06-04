import React from 'react';

const SerchForm = ({change,handlSubmit,value}) => {
    return (
        <div className='row bg-dark text-center'>
            <form onSubmit={handlSubmit} className='form-group mt-2'>
              <div className="from-group">
                <input type="text"  name='serch' value={value} onChange={change} className="from-control" />
              </div>
              <button className='btn btn-primary mt-3'>Search</button>
            </form>
        </div>
    );
}

export default SerchForm;
