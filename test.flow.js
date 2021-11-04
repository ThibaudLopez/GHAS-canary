/* @flow */
var x = (a: string, b: string): function =>
  async (dispatch: Function) => {
    dispatch(
      <span>
        {' '}
        <a href="hello">
          world
        </a>{' '}
      </span>
    );
};
function f(a: string) {
};
