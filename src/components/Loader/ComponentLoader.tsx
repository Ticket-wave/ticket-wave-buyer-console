import { FunctionComponent, ReactElement } from 'react';
import LoaderStyle from '../../styles/Loader.module.scss';

interface ComponentLoaderProps {
    backgroundColor?: any;
    lightTheme?: boolean; 
}

const ComponentLoader: FunctionComponent<ComponentLoaderProps> = ({ backgroundColor, lightTheme }): ReactElement => {
    return (
        <>
            <div className={LoaderStyle.compLoader} style={{ backgroundColor: `${backgroundColor}` }}>
                <div className={LoaderStyle.loadingSpinner}>
                    <svg className={LoaderStyle.loadingSpinner__circleSvg} viewBox="25 25 50 50">
                        <circle className={lightTheme ? LoaderStyle.loadingSpinner__circleStrokeLight : LoaderStyle.loadingSpinner__circleStroke} cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                    </svg>
                </div>
            </div>
        </>
    );
}

export default ComponentLoader;


interface ButtonLoaderProps {
    backgroundColor?: string;
}
export const ButtonLoader: FunctionComponent<ButtonLoaderProps> = ({ backgroundColor }): ReactElement => {
    return (
        <>
            {/* <div className={LoaderStyle.btnLoaderBox} style={{ backgroundColor: `${backgroundColor}` }}>
                <span className={LoaderStyle.btnLoader}></span>
            </div> */}            
            <div className="loading-spinner"></div>
        </>
    );
}