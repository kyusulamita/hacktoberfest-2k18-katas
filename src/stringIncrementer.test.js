import { stringIncrementer } from './stringIncrementer';

describe('stringIncrementer', () => {
  it('if the string ends with a number, number is incremented by 1', () => {
    expect(stringIncrementer('taco42')).toEqual('taco43');
    expect(stringIncrementer('cat12')).toEqual('cat13');
    expect(stringIncrementer('taco24')).toEqual('taco25');
    expect(stringIncrementer('taco345cat9')).toEqual('taco345cat10');
  });

  it('if the string does not end with a number, it starts at 1', () => {
    expect(stringIncrementer('taco345cat')).toEqual('taco345cat1');
    expect(stringIncrementer('tacos')).toEqual('tacos1');
  });

  it('if there are leading zeros it takes them into consideration', () => {
    expect(stringIncrementer('taco001')).toEqual('taco002');
    expect(stringIncrementer('taco009')).toEqual('taco010');
  });
});
