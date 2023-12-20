import React from 'react'
import { connect } from 'react-redux';

function Home({ message }) {
  return (
    <div className='container mt-5'>
      <h1 className='mt-5 text-center'>{message}</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  message: state.message,
});

export default connect(mapStateToProps)(Home);
