import jsReactToCss from './index';

describe('js-react-to-css', () => {
  const defaultValues = {
    display: 'flex',
    'flex-direction': 'column',
  };

  it('should have default flex values', () => {
    expect(jsReactToCss({})).toEqual(defaultValues);
  });

  it('should be able to override default flex values', () => {
    expect(jsReactToCss({
      display: 'block',
      flexDirection: 'row',
    })).toEqual({
      display: 'block',
      'flex-direction': 'row',
    });
  });


  it('should remove camelcase and transform to dash', () => {
    expect(jsReactToCss({
      backgroundColor: 'yellow',
    })).toEqual({
      ...defaultValues,
      'background-color': 'yellow',
    });
  });
  it('should remain non camelcase', () => {
    expect(jsReactToCss({
      background: 'red',
    })).toEqual({
      ...defaultValues,
      background: 'red',
    });
  });
  it('should add width to flex basis', () => {
    expect(jsReactToCss({
      flex: 1,
      width: 20,
    })).toEqual({
      ...defaultValues,
      flex: '1 1 20px',
      width: '20px',
    });
  });
  it('should add px for some keys', () => {
    expect(jsReactToCss({
      paddingTop: 2,
      height: 2,
      width: 2,
      padding: 2,
    })).toEqual({
      ...defaultValues,
      'padding-top': '2px',
      height: '2px',
      width: '2px',
      padding: '2px',
    });
  });
});
