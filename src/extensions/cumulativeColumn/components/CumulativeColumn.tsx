import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';

import styles from './CumulativeColumn.module.scss';

import { Persona, PersonaInitialsColor } from 'office-ui-fabric-react/lib/Persona';

export interface ICumulativeColumnProps {
  text: string;
}

const LOG_SOURCE: string = 'CumulativeColumn';

export default class CumulativeColumn extends React.Component<ICumulativeColumnProps, {}> {
  @override
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: CumulativeColumn mounted');
  }

  @override
  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: CumulativeColumn unmounted');
  }

  @override
  public render(): React.ReactElement<{}> {

    let personalData = JSON.parse(this.props.text);
    let person = {      
      primaryText: personalData.firstName + ' ' + personalData.lastName,
      secondaryText: personalData.ageGroup + ', ' + personalData.nationality, 
      imageInitials: personalData.imageInitials,
      
    };
    let color =  personalData.imageInitials == "VIP" ? PersonaInitialsColor.darkRed : PersonaInitialsColor.lightBlue
    return (
      <div className={styles.cell}>
        <Persona {...person} initialsColor={color} />           
      </div>
    );
  }
}
