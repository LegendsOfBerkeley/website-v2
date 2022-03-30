import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { ReactEmbeddedGoogleCalendar } from '../components/ReactEmbeddedGoogleCalendar';
const stories = storiesOf('Test', module);

const MoonPhasesCalendar = "https://calendar.google.com/calendar/embed?src=ht3jlfaac5lfd6263ulfh4tql8%40group.calendar.google.com&ctz=Europe%2FRome";

stories.add('Embedded Google Calendar', () => {
    const [url, setUrl] = useState(MoonPhasesCalendar);
    const onUrlChange = (event) => {
        setUrl(event.target.value);
    };
    const onClick = (event) => {
        setUrl(MoonPhasesCalendar);
    };
    const onClear = (event) => {
        setUrl("");
    };

    return (
        <>
            <label>
            *This field is for storybook purpose only
                <input 
                    type="text"
                    placeholder="Paste a public URL of your calendar"
                    onChange={onUrlChange}
                    value={url}
                    style={{width: '80%'}}
                ></input>
                <br/>
                <input 
                    type="button"
                    onClick={onClear}
                    value="Reset"
                ></input>
                <br/>
                <input 
                    type="button"
                    onClick={onClick}
                    value="Use Phases of the Moon"
                ></input>
            </label>
            <p>Here starts the component</p>
            <p>----------------------</p>
            <div style={{height: '500px'}}>
                <ReactEmbeddedGoogleCalendar publicUrl={url}/>
            </div>
        </>
    );
});