import { ReactElement, FunctionComponent } from "react";

interface TooltipProps {
    children: JSX.Element
    tooltipText: string
}

const Tooltip: FunctionComponent<TooltipProps> = ({ children, tooltipText }): ReactElement => {
    return (
        <div className='tooltipWrapper'>
            <span className='tooltip'>{tooltipText}</span>
            {children}
        </div>
    );
}

export default Tooltip;