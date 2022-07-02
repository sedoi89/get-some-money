import React, {useEffect, useState} from 'react';

const Clock = () => {
    const date = new Date();
    const dayOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const setDay = function () {
        return  dayOfTheWeek[date.getDay() - 1];
    };

   const [time, setTime] = useState(0)
    const [timeNow, setTimeNow] = useState('')
    useEffect(() => {
        const interval = setInterval(() => {
            const time = function () {
                let time = [date.getHours(),date.getMinutes(),date.getSeconds()];
                if (time[0] < 10) {time[0] = `0${time[0]}`; setDay()}
                if (time[1] < 10) {time[1] = '0' + time[1]}
                if (time[2] < 10) {time[2] = '0' + time[2]}

                return time.join(':')

            }

            setTimeNow(time())
             setTime(time => time + 1)

        }, 1000);

        return () => clearInterval(interval)
    })




     return (
        <span>
            {setDay()}
            <br/>
            {timeNow}
        </span>
    );
};

export default Clock;
