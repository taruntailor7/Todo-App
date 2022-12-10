import React, { useState } from 'react';
import Calendars from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Calendar.css"

export const Calendar = () => {
    const [value, onChange] = useState(new Date());
    return (
        <Calendars
            onChange={onChange}
            value={value}
            className="calendars"
        />
    )
}
