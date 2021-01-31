import React, { useCallback } from 'react';

import useTabStatus from './hooks/useTabStatus';
import useWindowSize from './hooks/useWindowSize';
import useUrlHash from './hooks/useUrlHash';
import useEvent from './hooks/useEvent';

function App() {
    const { hasFocus } = useTabStatus();
    const { size } = useWindowSize();
    const { hash } = useUrlHash();
    const onResize = useCallback(() => {
        console.log('resize', hash);
    }, [hash]);

    useEvent('', onResize);

    return (
        <div>
            <h1>Focus</h1>
            <span>{`Has Focus ${hasFocus ? 'yes' : 'no'}`}</span>

            <h1>Size</h1>
            <span>{`width: ${size.width} height: ${size.height}`}</span>

            <h1>Hash</h1>
            <span>{hash}</span>
        </div>
    );
}

export default App;
