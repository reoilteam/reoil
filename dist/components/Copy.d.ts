import React from 'react';
interface CopyProps {
    type?: 'innerText' | 'innerHTML' | 'outerHTML';
    onCopyTriggered?: (copiedString: string) => void;
}
declare const Copy: React.FC<CopyProps>;
export default Copy;
