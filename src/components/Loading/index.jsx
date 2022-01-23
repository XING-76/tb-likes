import React from 'react';
import './index.css'

export default function Loading() {
  return (
    <div className="custom-loading">
      <div className="custom-ball">
        <div className="ball">
          <div className="inner">
            <div className="line"></div>
            <div className="line line--two"></div>
            <div className="oval"></div>
            <div className="oval oval--two"></div>
          </div>
        </div>
        <div className="shadow"></div>
      </div>
      <span>Loading...</span>
    </div>
  )
}
