import { ReactElement, FunctionComponent } from "react";
import styles from "../../styles/Dashboard.module.scss";

interface DashboardProps {
    
}
 
const Dashboard: FunctionComponent<DashboardProps> = ():ReactElement => {
    return ( 
        <div className={styles.dashboard}>
            Dashboard
        </div>
     );
}
 
export default Dashboard;