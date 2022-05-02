import React from 'react'
import '../BusLogs.css'

const BusFill = ({
  bus,
  sendDate,
  AdminDelete = false,
  AdminUpdate = false,
  setAdminBus,
  setPage,
  setUpdateBus
}) => {
  return (
    <div className='busLogs__modal'>
      <div className='busLogs__s1'>
        <label>From:</label>
        <h4>{bus.from.toUpperCase()}</h4>
        <label>To:</label>
        <h4>{bus.to.toUpperCase()}</h4>
        <h3>{sendDate}</h3>
      </div>
      <div className='busLogs__s2'>
        <h3>{bus.time}</h3>
      </div>
      <div className='busLogs__s3'>
        <h3>
          <strong>{bus.remaining}</strong> seats available
        </h3>
        <h3>
          <strong>{bus.total}</strong> total seats.
        </h3>
        {AdminDelete && (
          <button
            onClick={() => {
              setUpdateBus(bus)
            }}
          >
            Delete Bus
          </button>
        )}
        {AdminUpdate && (
          <button
            onClick={() => {
              setPage(5)
              setAdminBus(bus)
              setUpdateBus(bus)
            }}
          >
            Update Bus
          </button>
        )}
      </div>
    </div>
  )
}

export default BusFill
