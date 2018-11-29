import * as React from 'react';
import Hero, { IHero } from '../hero/hero';

class Heroes extends React.Component {
  private heroes: IHero[] = [
    {
      id: 1,
      name: 'Superman',
      side: 'good'
    }, {
      id: 2,
      name: 'Joker',
      side: 'evil'
    }
  ];

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <ul>
        {
          this.heroes.map((h: IHero) => <Hero key={h.id} hero={h}/>)
        }
      </ul>
    );
  }
}

export default Heroes;
