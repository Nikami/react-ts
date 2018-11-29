import * as React from 'react';

export interface IHero {
  id: number;
  name: string;
  side: string;
}

export interface IHeroProps {
  hero: IHero;
}

class Hero extends React.Component<IHeroProps, object> {
  constructor(props: IHeroProps) {
    super(props);
  }

  public render() {
    const hero: IHero = this.props.hero;

    return (
      <li>{ hero.name } - { hero.side }</li>
    );
  }
}

export default Hero;
